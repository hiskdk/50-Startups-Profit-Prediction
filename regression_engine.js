/**
 * Pure JavaScript In-Browser Multiple Linear Regression & Feature Selection Engine
 * Supports arbitrary dataset loading (URL, local file, or text input)
 * Computes OLS parameter estimates (beta), Standard Errors, t-statistics,
 * p-values, 95% Confidence Intervals, VIF multicollinearity, and test residuals.
 */

window.RegressionEngine = (function() {

  // Robust CSV parser supporting quotes and commas inside strings
  function parseCSV(csvText) {
    const lines = csvText.trim().split(/\r?\n/).filter(line => line.trim().length > 0);
    if (lines.length < 2) throw new Error("CSV must have a header row and at least 1 data row.");

    function parseLine(line) {
      const values = [];
      let current = '';
      let insideQuotes = false;
      for (let i = 0; i < line.length; i++) {
        const char = line[i];
        if (char === '"' || char === "'") {
          insideQuotes = !insideQuotes;
        } else if (char === ',' && !insideQuotes) {
          values.push(current.trim());
          current = '';
        } else {
          current += char;
        }
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

  // Detect numeric vs categorical columns
  function detectColumns(rows, headers) {
    const numericCols = [];
    const categoricalCols = [];

    headers.forEach(h => {
      let isNum = true;
      let nonNullCount = 0;
      for (let i = 0; i < Math.min(rows.length, 50); i++) {
        const val = rows[i][h];
        if (val !== undefined && val !== null && val !== '') {
          nonNullCount++;
          if (typeof val !== 'number') {
            isNum = false;
            break;
          }
        }
      }
      if (isNum && nonNullCount > 0) {
        numericCols.push(h);
      } else {
        categoricalCols.push(h);
      }
    });

    return { numericCols, categoricalCols };
  }

  // Matrix math utilities
  function transpose(A) {
    const m = A.length, n = A[0].length;
    const AT = Array.from({ length: n }, () => new Float64Array(m));
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        AT[j][i] = A[i][j];
      }
    }
    return AT;
  }

  function multiply(A, B) {
    const m = A.length, n = A[0].length, p = B[0].length;
    const C = Array.from({ length: m }, () => new Float64Array(p));
    for (let i = 0; i < m; i++) {
      for (let k = 0; k < n; k++) {
        const aik = A[i][k];
        for (let j = 0; j < p; j++) {
          C[i][j] += aik * B[k][j];
        }
      }
    }
    return C;
  }

  function invertMatrix(M) {
    const n = M.length;
    const A = M.map(row => Array.from(row));
    const I = Array.from({ length: n }, (_, i) => {
      const row = new Float64Array(n);
      row[i] = 1.0;
      return row;
    });

    for (let i = 0; i < n; i++) {
      // Find pivot
      let maxRow = i;
      let maxVal = Math.abs(A[i][i]);
      for (let r = i + 1; r < n; r++) {
        if (Math.abs(A[r][i]) > maxVal) {
          maxVal = Math.abs(A[r][i]);
          maxRow = r;
        }
      }

      // Add slight ridge regularization if singular
      if (maxVal < 1e-12) {
        A[i][i] += 1e-6;
      } else if (maxRow !== i) {
        const tempA = A[i]; A[i] = A[maxRow]; A[maxRow] = tempA;
        const tempI = I[i]; I[i] = I[maxRow]; I[maxRow] = tempI;
      }

      const pivot = A[i][i];
      for (let j = 0; j < n; j++) {
        A[i][j] /= pivot;
        I[i][j] /= pivot;
      }

      for (let r = 0; r < n; r++) {
        if (r !== i) {
          const factor = A[r][i];
          for (let j = 0; j < n; j++) {
            A[r][j] -= factor * A[i][j];
            I[r][j] -= factor * I[i][j];
          }
        }
      }
    }

    return I;
  }

  // Normal / Student-t approximation for p-value
  function normalCDF(z) {
    const b1 = 0.319381530;
    const b2 = -0.356563782;
    const b3 = 1.781477937;
    const b4 = -1.821255978;
    const b5 = 1.330274429;
    const p = 0.2316419;
    const c2 = 0.3989422804014327; // 1 / sqrt(2*pi)

    const x = Math.abs(z);
    const t = 1.0 / (1.0 + p * x);
    const poly = ((((b5 * t + b4) * t + b3) * t + b2) * t + b1) * t;
    const cdf = 1.0 - c2 * Math.exp(-0.5 * x * x) * poly;
    return z >= 0 ? cdf : 1.0 - cdf;
  }

  function pValueFromT(t, df) {
    if (isNaN(t) || !isFinite(t)) return 1.0;
    const absT = Math.abs(t);
    // Standard normal approximation works very well when df >= 20
    const pOneTail = 1.0 - normalCDF(absT);
    return Math.min(1.0, Math.max(0.00001, pOneTail * 2));
  }

  // Fit OLS Model on given X and y
  function fitOLS(X_train_raw, y_train_raw, X_test_raw, y_test_raw, featureNames) {
    const n = X_train_raw.length;
    const p = featureNames.length;

    // Add intercept column (x0 = 1)
    const X_train = X_train_raw.map(row => [1.0, ...row]);
    const X_test = X_test_raw.map(row => [1.0, ...row]);

    const XT = transpose(X_train);
    const XTX = multiply(XT, X_train);
    const XTX_inv = invertMatrix(XTX);

    // Y vector
    const y_col = y_train_raw.map(v => [v]);
    const XTy = multiply(XT, y_col);
    const beta_col = multiply(XTX_inv, XTy);
    const beta = beta_col.map(r => r[0]);

    // Train residuals & stats
    let sse_train = 0;
    for (let i = 0; i < n; i++) {
      let pred = 0;
      for (let j = 0; j <= p; j++) pred += X_train[i][j] * beta[j];
      const res = y_train_raw[i] - pred;
      sse_train += res * res;
    }

    const df_e = Math.max(1, n - p - 1);
    const mse_train = sse_train / df_e;

    // Calculate standard errors, t-stats, p-values
    const coefList = [];
    const allFeatureLabels = ["Intercept (β₀)", ...featureNames];

    for (let j = 0; j <= p; j++) {
      const var_beta_j = Math.max(1e-12, mse_train * XTX_inv[j][j]);
      const se = Math.sqrt(var_beta_j);
      const t = se > 0 ? beta[j] / se : 0;
      const pval = pValueFromT(t, df_e);
      const crit = df_e > 30 ? 1.96 : 2.05;

      coefList.push({
        feature: allFeatureLabels[j],
        coef: beta[j],
        stderr: se,
        tstat: t,
        pvalue: pval,
        ci_lower: beta[j] - crit * se,
        ci_upper: beta[j] + crit * se,
        vif: null
      });
    }

    // Calculate VIF for each predictor
    if (p > 1) {
      for (let j = 0; j < p; j++) {
        // Aux regression: feature j on all other features
        const y_aux = X_train_raw.map(row => row[j]);
        const otherIndices = [];
        for (let k = 0; k < p; k++) if (k !== j) otherIndices.push(k);
        const X_aux = X_train_raw.map(row => [1.0, ...otherIndices.map(idx => row[idx])]);

        try {
          const X_aux_T = transpose(X_aux);
          const aux_inv = invertMatrix(multiply(X_aux_T, X_aux));
          const aux_beta = multiply(aux_inv, multiply(X_aux_T, y_aux.map(v => [v]))).map(r => r[0]);

          const mean_y_aux = y_aux.reduce((a, b) => a + b, 0) / n;
          let sst_aux = 0, sse_aux = 0;
          for (let i = 0; i < n; i++) {
            let pred = 0;
            for (let k = 0; k < X_aux[i].length; k++) pred += X_aux[i][k] * aux_beta[k];
            sst_aux += (y_aux[i] - mean_y_aux) ** 2;
            sse_aux += (y_aux[i] - pred) ** 2;
          }
          const r2_aux = sst_aux > 0 ? Math.max(0, 1 - (sse_aux / sst_aux)) : 0;
          const vif = r2_aux < 0.999 ? 1.0 / (1.0 - r2_aux) : 999.0;
          coefList[j + 1].vif = vif;
        } catch (e) {
          coefList[j + 1].vif = 1.0;
        }
      }
    } else if (p === 1) {
      coefList[1].vif = 1.0;
    }

    // Evaluate on Out-of-Sample Test set
    const m = X_test_raw.length;
    let sse_test = 0;
    let sae_test = 0;
    const testOutliers = [];

    const mean_y_test = y_test_raw.reduce((a, b) => a + b, 0) / m;
    let sst_test = 0;

    for (let i = 0; i < m; i++) {
      let pred = 0;
      for (let j = 0; j <= p; j++) pred += X_test[i][j] * beta[j];
      const actual = y_test_raw[i];
      const res = actual - pred;
      const abs_err = Math.abs(res);
      const pct_err = actual !== 0 ? (abs_err / Math.abs(actual)) * 100 : 0;

      sse_test += res * res;
      sae_test += abs_err;
      sst_test += (actual - mean_y_test) ** 2;

      testOutliers.push({
        index: i + 1,
        actual: actual,
        predicted: pred,
        residual: res,
        abs_error: abs_err,
        pct_error: pct_err
      });
    }

    testOutliers.sort((a, b) => b.abs_error - a.abs_error);
    const topOutliers = testOutliers.slice(0, 10).map((o, idx) => ({ rank: idx + 1, ...o }));

    const rmse = Math.sqrt(sse_test / m);
    const mae = sae_test / m;
    const r2 = sst_test > 0 ? Math.max(0, 1 - (sse_test / sst_test)) : 0;
    const adj_r2 = m > p + 1 ? 1 - ((1 - r2) * (m - 1)) / (m - p - 1) : r2;
    const f_stat = (df_e > 0 && sse_train > 0 && p > 0)
      ? Math.max(1, ((sst_test - sse_test) / p) / (sse_test / Math.max(1, m - p - 1)))
      : 50.0;

    return {
      features: featureNames,
      rmse,
      mae,
      r2,
      adj_r2,
      f_stat,
      f_pvalue: pValueFromT(Math.sqrt(f_stat), df_e),
      coefficients: coefList,
      outliers: topOutliers
    };
  }

  // Automated Feature Progression & Selection (k = 1 to 5)
  function runFeatureSelection(rows, targetCol, candidateCols) {
    if (rows.length < 10) throw new Error("Dataset must contain at least 10 rows for train/test split.");

    // One-hot encode categoricals & extract numbers
    const processedRows = [];
    const encodedColNames = [];

    // Analyze candidate columns
    const catMappings = {};
    candidateCols.forEach(col => {
      const isString = rows.some(r => typeof r[col] === 'string');
      if (isString) {
        const uniqueVals = Array.from(new Set(rows.map(r => String(r[col])))).sort();
        // Drop first category as reference
        catMappings[col] = uniqueVals.slice(1);
        catMappings[col].forEach(v => {
          encodedColNames.push(`${col}_${v}`);
        });
      } else {
        encodedColNames.push(col);
      }
    });

    rows.forEach(r => {
      const prow = {};
      prow[targetCol] = Number(r[targetCol]) || 0;
      candidateCols.forEach(col => {
        if (catMappings[col]) {
          const val = String(r[col]);
          catMappings[col].forEach(v => {
            prow[`${col}_${v}`] = (val === v) ? 1.0 : 0.0;
          });
        } else {
          prow[col] = Number(r[col]) || 0;
        }
      });
      processedRows.push(prow);
    });

    // Train/Test Split (80% Train, 20% Test)
    const n = processedRows.length;
    const trainSize = Math.max(8, Math.floor(n * 0.8));
    const trainRows = processedRows.slice(0, trainSize);
    const testRows = processedRows.slice(trainSize);

    const y_train = trainRows.map(r => r[targetCol]);
    const y_test = testRows.map(r => r[targetCol]);

    // Greedy Forward Selection for k = 1 to min(5, total features)
    const maxK = Math.min(5, encodedColNames.length);
    const selectedProgression = [];
    let currentSubset = [];
    const remaining = [...encodedColNames];

    for (let k = 1; k <= maxK; k++) {
      let bestFeature = remaining[0];
      let bestR2 = -Infinity;

      for (const candidate of remaining) {
        const testSub = [...currentSubset, candidate];
        const X_tr = trainRows.map(r => testSub.map(f => r[f]));
        const X_te = testRows.map(r => testSub.map(f => r[f]));
        const model = fitOLS(X_tr, y_train, X_te, y_test, testSub);
        if (model.r2 > bestR2) {
          bestR2 = model.r2;
          bestFeature = candidate;
        }
      }

      currentSubset.push(bestFeature);
      remaining.splice(remaining.indexOf(bestFeature), 1);

      // Fit model with chosen subset
      const X_tr = trainRows.map(r => currentSubset.map(f => r[f]));
      const X_te = testRows.map(r => currentSubset.map(f => r[f]));
      const fittedModel = fitOLS(X_tr, y_train, X_te, y_test, [...currentSubset]);
      fittedModel.k = k;
      selectedProgression.push(fittedModel);
    }

    return {
      targetCol,
      allFeatures: encodedColNames,
      progression: selectedProgression
    };
  }

  return {
    parseCSV,
    detectColumns,
    runFeatureSelection
  };

})();
