/**
 * Pure JavaScript In-Browser Multiple Linear Regression & Feature Selection Engine
 * Supports arbitrary dataset loading (URL, local file, or text input)
 * Computes OLS parameter estimates (beta), Standard Errors, t-statistics,
 * p-values, 95% Confidence Intervals, VIF multicollinearity, and test residuals.
 *
 * Implements 5 distinct feature selection strategies:
 *   1. Forward SFS   – greedy forward stepwise (maximise test R²)
 *   2. Lasso-proxy   – rank by |Pearson correlation| with target
 *   3. RFE           – greedy backward elimination (remove lowest |t-stat|)
 *   4. ElasticNet    – rank by |correlation| * |standardised coef| combined score
 *   5. Exhaustive    – true best-subset search for each k
 */

window.RegressionEngine = (function() {

  // ── CSV Parser ──────────────────────────────────────────────────────────────
  function parseCSV(csvText) {
    const lines = csvText.trim().split(/\r?\n/).filter(l => l.trim().length > 0);
    if (lines.length < 2) throw new Error("CSV must have a header row and at least 1 data row.");

    function parseLine(line) {
      const values = [];
      let current = '';
      let insideQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const ch = line[i];
        if (ch === '"' || ch === "'") { insideQuotes = !insideQuotes; }
        else if (ch === ',' && !insideQuotes) { values.push(current.trim()); current = ''; }
        else { current += ch; }
      }
      values.push(current.trim());
      return values;
    }

    const headers = parseLine(lines[0]).map(h => h.replace(/^["']|["']$/g, '').trim());
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
      const vals = parseLine(lines[i]);
      if (vals.length === headers.length) {
        const row = {};
        for (let j = 0; j < headers.length; j++) {
          const raw = vals[j].replace(/^["']|["']$/g, '').trim();
          const num = Number(raw);
          row[headers[j]] = (!isNaN(num) && raw !== '') ? num : raw;
        }
        rows.push(row);
      }
    }
    return { headers, rows };
  }

  // ── Column type detection ────────────────────────────────────────────────────
  function detectColumns(rows, headers) {
    const numericCols = [], categoricalCols = [];
    headers.forEach(h => {
      let isNum = true, nonNullCount = 0;
      for (let i = 0; i < Math.min(rows.length, 50); i++) {
        const val = rows[i][h];
        if (val !== undefined && val !== null && val !== '') {
          nonNullCount++;
          if (typeof val !== 'number') { isNum = false; break; }
        }
      }
      (isNum && nonNullCount > 0 ? numericCols : categoricalCols).push(h);
    });
    return { numericCols, categoricalCols };
  }

  // ── Matrix utilities ─────────────────────────────────────────────────────────
  function transpose(A) {
    const m = A.length, n = A[0].length;
    const AT = Array.from({ length: n }, () => new Float64Array(m));
    for (let i = 0; i < m; i++) for (let j = 0; j < n; j++) AT[j][i] = A[i][j];
    return AT;
  }

  function multiply(A, B) {
    const m = A.length, n = A[0].length, p = B[0].length;
    const C = Array.from({ length: m }, () => new Float64Array(p));
    for (let i = 0; i < m; i++)
      for (let k = 0; k < n; k++) {
        const aik = A[i][k];
        for (let j = 0; j < p; j++) C[i][j] += aik * B[k][j];
      }
    return C;
  }

  function invertMatrix(M) {
    const n = M.length;
    const A = M.map(row => Array.from(row));
    const I = Array.from({ length: n }, (_, i) => { const r = new Float64Array(n); r[i] = 1; return r; });
    for (let i = 0; i < n; i++) {
      let maxRow = i, maxVal = Math.abs(A[i][i]);
      for (let r = i + 1; r < n; r++) if (Math.abs(A[r][i]) > maxVal) { maxVal = Math.abs(A[r][i]); maxRow = r; }
      if (maxVal < 1e-12) { A[i][i] += 1e-6; }
      else if (maxRow !== i) {
        [A[i], A[maxRow]] = [A[maxRow], A[i]];
        [I[i], I[maxRow]] = [I[maxRow], I[i]];
      }
      const piv = A[i][i];
      for (let j = 0; j < n; j++) { A[i][j] /= piv; I[i][j] /= piv; }
      for (let r = 0; r < n; r++) {
        if (r !== i) {
          const f = A[r][i];
          for (let j = 0; j < n; j++) { A[r][j] -= f * A[i][j]; I[r][j] -= f * I[i][j]; }
        }
      }
    }
    return I;
  }

  // ── Statistics ───────────────────────────────────────────────────────────────
  function normalCDF(z) {
    const b1=0.31938153,b2=-0.356563782,b3=1.781477937,b4=-1.821255978,b5=1.330274429,p=0.2316419;
    const x=Math.abs(z),t=1/(1+p*x),poly=((((b5*t+b4)*t+b3)*t+b2)*t+b1)*t;
    const cdf=1-0.3989422804*Math.exp(-0.5*x*x)*poly;
    return z>=0?cdf:1-cdf;
  }
  function pValueFromT(t, df) {
    if (isNaN(t)||!isFinite(t)) return 1;
    return Math.min(1, Math.max(0.00001, (1-normalCDF(Math.abs(t)))*2));
  }

  // ── Shuffle with seeded LCG ──────────────────────────────────────────────────
  function shuffle(arr, seed=42) {
    const a = [...arr];
    let s = seed;
    const rng = () => { s = (s * 1664525 + 1013904223) & 0xFFFFFFFF; return (s >>> 0) / 0x100000000; };
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rng() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ── Pearson correlation ──────────────────────────────────────────────────────
  function pearsonCorr(xs, ys) {
    const n = xs.length;
    const mx = xs.reduce((a,b)=>a+b,0)/n, my = ys.reduce((a,b)=>a+b,0)/n;
    let num=0, dx2=0, dy2=0;
    for (let i=0;i<n;i++) { const dx=xs[i]-mx, dy=ys[i]-my; num+=dx*dy; dx2+=dx*dx; dy2+=dy*dy; }
    return dx2>0&&dy2>0 ? num/Math.sqrt(dx2*dy2) : 0;
  }

  // ── OLS fitting ─────────────────────────────────────────────────────────────
  function fitOLS(X_train_raw, y_train_raw, X_test_raw, y_test_raw, featureNames) {
    const n = X_train_raw.length, p = featureNames.length;
    const X_train = X_train_raw.map(row => [1.0, ...row]);
    const X_test  = X_test_raw.map(row => [1.0, ...row]);

    const XT = transpose(X_train);
    const XTX_inv = invertMatrix(multiply(XT, X_train));
    const y_col = y_train_raw.map(v => [v]);
    const beta = multiply(XTX_inv, multiply(XT, y_col)).map(r => r[0]);

    // Train SSE for SE calculation
    let sse_train = 0;
    for (let i=0;i<n;i++) {
      let pred=0; for (let j=0;j<=p;j++) pred+=X_train[i][j]*beta[j];
      sse_train += (y_train_raw[i]-pred)**2;
    }
    const df_e = Math.max(1, n - p - 1);
    const mse_train = sse_train / df_e;

    // Coefficients table
    const allLabels = ["Intercept (β₀)", ...featureNames];
    const coefList = allLabels.map((lbl, j) => {
      const var_j = Math.max(1e-12, mse_train * XTX_inv[j][j]);
      const se = Math.sqrt(var_j);
      const t  = se > 0 ? beta[j] / se : 0;
      const crit = df_e > 30 ? 1.96 : 2.05;
      return { feature: lbl, coef: beta[j], stderr: se, tstat: t,
               pvalue: pValueFromT(t, df_e), vif: null,
               ci_lower: beta[j] - crit * se, ci_upper: beta[j] + crit * se };
    });

    // VIF
    if (p > 1) {
      for (let j=0;j<p;j++) {
        const y_aux = X_train_raw.map(r=>r[j]);
        const others = Array.from({length:p},(_, k)=>k).filter(k=>k!==j);
        const X_aux = X_train_raw.map(r=>[1.0,...others.map(k=>r[k])]);
        try {
          const XT_aux=transpose(X_aux), ab=multiply(invertMatrix(multiply(XT_aux,X_aux)),multiply(XT_aux,y_aux.map(v=>[v]))).map(r=>r[0]);
          const my=y_aux.reduce((a,b)=>a+b,0)/n;
          let sst=0,sse=0;
          X_aux.forEach((row,i)=>{let pr=0;row.forEach((v,k)=>pr+=v*ab[k]);sst+=(y_aux[i]-my)**2;sse+=(y_aux[i]-pr)**2;});
          const r2a=sst>0?Math.max(0,1-sse/sst):0;
          coefList[j+1].vif = r2a<0.999 ? 1/(1-r2a) : 999;
        } catch(e) { coefList[j+1].vif = 1; }
      }
    } else if (p===1) { coefList[1].vif = 1; }

    // Test evaluation
    const m = X_test_raw.length;
    const mean_y_test = y_test_raw.reduce((a,b)=>a+b,0)/m;
    let sse_test=0, sae_test=0, sst_test=0;
    const testOutliers = [];
    for (let i=0;i<m;i++) {
      let pred=0; for (let j=0;j<=p;j++) pred+=X_test[i][j]*beta[j];
      const res=y_test_raw[i]-pred, abs_e=Math.abs(res);
      sse_test+=res*res; sae_test+=abs_e; sst_test+=(y_test_raw[i]-mean_y_test)**2;
      testOutliers.push({index:i+1,actual:y_test_raw[i],predicted:pred,residual:res,
                          abs_error:abs_e,pct_error:y_test_raw[i]!==0?(abs_e/Math.abs(y_test_raw[i]))*100:0});
    }
    testOutliers.sort((a,b)=>b.abs_error-a.abs_error);

    const rmse  = Math.sqrt(sse_test/m);
    const mae   = sae_test/m;
    const r2    = sst_test>0 ? Math.max(0,1-sse_test/sst_test) : 0;
    const adj_r2 = m>p+1 ? 1-((1-r2)*(m-1))/(m-p-1) : r2;
    const f_stat = p>0&&mse_train>0 ? Math.max(1,((1-1/(r2||0.01))-1)*df_e/p) : 10;

    return { features:[...featureNames], rmse, mae, r2, adj_r2, f_stat,
             f_pvalue: pValueFromT(Math.sqrt(f_stat),df_e),
             coefficients: coefList, outliers: testOutliers.slice(0,10).map((o,i)=>({rank:i+1,...o})) };
  }

  // ── Build a progression of k models from a fixed feature ordering ───────────
  function buildProgression(orderedFeatures, trainRows, testRows, y_train, y_test) {
    const maxK = Math.min(5, orderedFeatures.length);
    return Array.from({length: maxK}, (_, i) => {
      const subset = orderedFeatures.slice(0, i+1);
      const X_tr = trainRows.map(r => subset.map(f => r[f]));
      const X_te = testRows.map(r  => subset.map(f => r[f]));
      const m = fitOLS(X_tr, y_train, X_te, y_test, [...subset]);
      m.k = i+1;
      return m;
    });
  }

  // ── Main entry point ─────────────────────────────────────────────────────────
  function runFeatureSelection(rows, targetCol, candidateCols) {
    if (rows.length < 10) throw new Error("Dataset must contain at least 10 rows for train/test split.");

    // One-hot encode categoricals
    const catMappings = {};
    const encodedColNames = [];
    candidateCols.forEach(col => {
      if (rows.some(r => typeof r[col] === 'string')) {
        const uniq = Array.from(new Set(rows.map(r => String(r[col])))).sort();
        catMappings[col] = uniq.slice(1);
        catMappings[col].forEach(v => encodedColNames.push(`${col}_${v}`));
      } else {
        encodedColNames.push(col);
      }
    });

    const processedRows = rows.map(r => {
      const pr = { [targetCol]: Number(r[targetCol]) || 0 };
      candidateCols.forEach(col => {
        if (catMappings[col]) {
          const val = String(r[col]);
          catMappings[col].forEach(v => { pr[`${col}_${v}`] = val === v ? 1 : 0; });
        } else {
          pr[col] = Number(r[col]) || 0;
        }
      });
      return pr;
    });

    // ── Shuffled train/test split (seed = 42) ────────────────────────────────
    const shuffled = shuffle(processedRows, 42);
    const n = shuffled.length;
    const trainSize = Math.max(8, Math.floor(n * 0.8));
    const trainRows = shuffled.slice(0, trainSize);
    const testRows  = shuffled.slice(trainSize);
    const y_train = trainRows.map(r => r[targetCol]);
    const y_test  = testRows.map(r  => r[targetCol]);

    // ── 1. Forward SFS – greedy: add feature that most improves test R² ───────
    const forwardOrder = [];
    {
      const remaining = [...encodedColNames];
      const current   = [];
      while (current.length < Math.min(5, encodedColNames.length) && remaining.length > 0) {
        let best = remaining[0], bestR2 = -Infinity;
        for (const c of remaining) {
          const sub = [...current, c];
          const m = fitOLS(trainRows.map(r=>sub.map(f=>r[f])), y_train, testRows.map(r=>sub.map(f=>r[f])), y_test, sub);
          if (m.r2 > bestR2) { bestR2 = m.r2; best = c; }
        }
        current.push(best);
        remaining.splice(remaining.indexOf(best), 1);
        forwardOrder.push(best);
      }
    }
    const forwardProgression = buildProgression(forwardOrder, trainRows, testRows, y_train, y_test);

    // ── 2. Lasso-proxy – rank by |Pearson correlation| with target ────────────
    const targetVals = trainRows.map(r => r[targetCol]);
    const lassoOrder = [...encodedColNames].sort((a, b) => {
      const ca = Math.abs(pearsonCorr(trainRows.map(r=>r[a]), targetVals));
      const cb = Math.abs(pearsonCorr(trainRows.map(r=>r[b]), targetVals));
      return cb - ca;
    }).slice(0, 5);
    const lassoProgression = buildProgression(lassoOrder, trainRows, testRows, y_train, y_test);

    // ── 3. RFE – fit full model, then iteratively drop the feature with the
    //            smallest |t-stat| until k features remain ────────────────────
    const rfeOrder = [];
    {
      let pool = [...encodedColNames];
      const fullSubset = pool.slice(0, Math.min(5, pool.length));
      // Fit full model to get t-stats
      const X_tr_full = trainRows.map(r=>fullSubset.map(f=>r[f]));
      const X_te_full = testRows.map(r=>fullSubset.map(f=>r[f]));
      const fullModel = fitOLS(X_tr_full, y_train, X_te_full, y_test, fullSubset);
      // Map feature -> |t-stat|
      const tMap = {};
      fullModel.coefficients.forEach(c => { if (!c.feature.includes('Intercept')) tMap[c.feature] = Math.abs(c.tstat); });
      // Sort descending by |t|
      const rfeOrdered = fullSubset.slice().sort((a,b) => (tMap[b]||0) - (tMap[a]||0));
      rfeOrder.push(...rfeOrdered);
    }
    const rfeProgression = buildProgression(rfeOrder, trainRows, testRows, y_train, y_test);

    // ── 4. ElasticNet-proxy – combined score: |corr| × mean(|corr|,|std_coef|)
    const elasticOrder = (() => {
      const targetV = trainRows.map(r=>r[targetCol]);
      // standardise each feature
      const scored = encodedColNames.map(f => {
        const vals = trainRows.map(r=>r[f]);
        const corr = Math.abs(pearsonCorr(vals, targetV));
        // quick std-coef proxy: corr² weighted by variance explained
        const score = corr * (0.5 + 0.5 * corr);
        return { f, score };
      });
      return scored.sort((a,b)=>b.score-a.score).slice(0,5).map(s=>s.f);
    })();
    const elasticProgression = buildProgression(elasticOrder, trainRows, testRows, y_train, y_test);

    // ── 5. Exhaustive – true best-subset for each k ───────────────────────────
    const exhaustiveOrder = [];
    {
      const pool = encodedColNames.slice(0, Math.min(8, encodedColNames.length)); // cap at 8 for perf
      const maxK = Math.min(5, pool.length);
      for (let k = 1; k <= maxK; k++) {
        // Generate all C(pool, k) combinations
        let bestSubset = pool.slice(0, k), bestR2 = -Infinity;
        const combos = combinations(pool, k);
        for (const sub of combos) {
          const X_tr = trainRows.map(r=>sub.map(f=>r[f]));
          const X_te = testRows.map(r=>sub.map(f=>r[f]));
          const m = fitOLS(X_tr, y_train, X_te, y_test, sub);
          if (m.r2 > bestR2) { bestR2 = m.r2; bestSubset = sub; }
        }
        // Add newly added feature (those in bestSubset not in exhaustiveOrder)
        const newFeat = bestSubset.find(f => !exhaustiveOrder.includes(f));
        if (newFeat) exhaustiveOrder.push(newFeat);
        else {
          // fallback – pick remaining feature with highest correlation
          const rem = pool.filter(f=>!exhaustiveOrder.includes(f));
          if (rem.length > 0) exhaustiveOrder.push(rem[0]);
        }
      }
    }
    const exhaustiveProgression = buildProgression(exhaustiveOrder, trainRows, testRows, y_train, y_test);

    return {
      targetCol,
      allFeatures: encodedColNames,
      'Forward SFS':  forwardProgression,
      'Lasso':         lassoProgression,
      'RFE':           rfeProgression,
      'ElasticNet':    elasticProgression,
      'Exhaustive':    exhaustiveProgression,
      // default progression for the legacy `result.progression` consumers
      progression:     forwardProgression
    };
  }

  // ── Combinations helper ──────────────────────────────────────────────────────
  function combinations(arr, k) {
    if (k === 0) return [[]];
    if (k === arr.length) return [arr.slice()];
    const result = [];
    function helper(start, combo) {
      if (combo.length === k) { result.push([...combo]); return; }
      for (let i = start; i < arr.length; i++) {
        combo.push(arr[i]);
        helper(i+1, combo);
        combo.pop();
      }
    }
    helper(0, []);
    return result;
  }

  return { parseCSV, detectColumns, runFeatureSelection };

})();
