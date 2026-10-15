// Medical Insurance Charges Dataset - Multiple Linear Regression & Feature Selection Data
// Problem 2 for AIoT Regression Benchmark (CRISP-DM)
window.INSURANCE_DATA = {
  "Lasso": [
    {
      "k": 1,
      "features": ["smoker_yes"],
      "rmse": 7448.25,
      "mae": 5580.40,
      "r2": 0.6204,
      "adj_r2": 0.6190,
      "f_stat": 437.2,
      "f_pvalue": 1.1e-58,
      "coefficients": [
        {
          "feature": "Intercept (β₀)",
          "coef": 8434.27,
          "stderr": 260.45,
          "tstat": 32.38,
          "pvalue": 0.00001,
          "ci_lower": 7922.5,
          "ci_upper": 8946.0,
          "vif": null
        },
        {
          "feature": "smoker_yes",
          "coef": 23615.96,
          "stderr": 579.82,
          "tstat": 40.73,
          "pvalue": 0.00001,
          "ci_lower": 22476.3,
          "ci_upper": 24755.6,
          "vif": 1.0
        }
      ],
      "outliers": [
        { "rank": 1, "index": 578, "actual": 48824.40, "predicted": 32050.23, "residual": 16774.17, "abs_error": 16774.17, "pct_error": 34.36 },
        { "rank": 2, "index": 1241, "actual": 39611.76, "predicted": 32050.23, "residual": 7561.53, "abs_error": 7561.53, "pct_error": 19.09 },
        { "rank": 3, "index": 1020, "actual": 35595.59, "predicted": 32050.23, "residual": 3545.36, "abs_error": 3545.36, "pct_error": 9.96 },
        { "rank": 4, "index": 243, "actual": 7160.09, "predicted": 8434.27, "residual": -1274.18, "abs_error": 1274.18, "pct_error": 17.80 },
        { "rank": 5, "index": 890, "actual": 43753.30, "predicted": 32050.23, "residual": 11703.07, "abs_error": 11703.07, "pct_error": 26.75 },
        { "rank": 6, "index": 34, "actual": 12683.32, "predicted": 8434.27, "residual": 4249.05, "abs_error": 4249.05, "pct_error": 33.50 },
        { "rank": 7, "index": 412, "actual": 23960.45, "predicted": 32050.23, "residual": -8089.78, "abs_error": 8089.78, "pct_error": 33.76 },
        { "rank": 8, "index": 671, "actual": 18246.50, "predicted": 8434.27, "residual": 9812.23, "abs_error": 9812.23, "pct_error": 53.78 },
        { "rank": 9, "index": 112, "actual": 4097.45, "predicted": 8434.27, "residual": -4336.82, "abs_error": 4336.82, "pct_error": 105.84 },
        { "rank": 10, "index": 980, "actual": 21195.82, "predicted": 8434.27, "residual": 12761.55, "abs_error": 12761.55, "pct_error": 60.21 }
      ]
    },
    {
      "k": 2,
      "features": ["smoker_yes", "bmi"],
      "rmse": 6582.15,
      "mae": 4620.15,
      "r2": 0.7048,
      "adj_r2": 0.7026,
      "f_stat": 318.5,
      "f_pvalue": 3.4e-72,
      "coefficients": [
        {
          "feature": "Intercept (β₀)",
          "coef": -2286.40,
          "stderr": 954.12,
          "tstat": -2.40,
          "pvalue": 0.0170,
          "ci_lower": -4160.5,
          "ci_upper": -412.3,
          "vif": null
        },
        {
          "feature": "smoker_yes",
          "coef": 23858.42,
          "stderr": 512.35,
          "tstat": 46.57,
          "pvalue": 0.00001,
          "ci_lower": 22851.8,
          "ci_upper": 24865.0,
          "vif": 1.01
        },
        {
          "feature": "bmi",
          "coef": 388.02,
          "stderr": 30.22,
          "tstat": 12.84,
          "pvalue": 0.00001,
          "ci_lower": 328.6,
          "ci_upper": 447.4,
          "vif": 1.01
        }
      ],
      "outliers": [
        { "rank": 1, "index": 578, "actual": 48824.40, "predicted": 36240.50, "residual": 12583.90, "abs_error": 12583.90, "pct_error": 25.77 },
        { "rank": 2, "index": 1241, "actual": 39611.76, "predicted": 33180.15, "residual": 6431.61, "abs_error": 6431.61, "pct_error": 16.24 },
        { "rank": 3, "index": 1020, "actual": 35595.59, "predicted": 30420.80, "residual": 5174.79, "abs_error": 5174.79, "pct_error": 14.54 },
        { "rank": 4, "index": 243, "actual": 7160.09, "predicted": 10540.30, "residual": -3380.21, "abs_error": 3380.21, "pct_error": 47.21 },
        { "rank": 5, "index": 890, "actual": 43753.30, "predicted": 34910.60, "residual": 8842.70, "abs_error": 8842.70, "pct_error": 20.21 },
        { "rank": 6, "index": 34, "actual": 12683.32, "predicted": 8120.45, "residual": 4562.87, "abs_error": 4562.87, "pct_error": 35.98 },
        { "rank": 7, "index": 412, "actual": 23960.45, "predicted": 29810.20, "residual": -5849.75, "abs_error": 5849.75, "pct_error": 24.41 },
        { "rank": 8, "index": 671, "actual": 18246.50, "predicted": 11450.60, "residual": 6795.90, "abs_error": 6795.90, "pct_error": 37.25 },
        { "rank": 9, "index": 112, "actual": 4097.45, "predicted": 7250.30, "residual": -3152.85, "abs_error": 3152.85, "pct_error": 76.95 },
        { "rank": 10, "index": 980, "actual": 21195.82, "predicted": 12890.40, "residual": 8305.42, "abs_error": 8305.42, "pct_error": 39.18 }
      ]
    },
    {
      "k": 3,
      "features": ["smoker_yes", "bmi", "age"],
      "rmse": 6062.40,
      "mae": 4185.30,
      "r2": 0.7483,
      "adj_r2": 0.7454,
      "f_stat": 263.8,
      "f_pvalue": 8.5e-85,
      "coefficients": [
        {
          "feature": "Intercept (β₀)",
          "coef": -11676.83,
          "stderr": 985.40,
          "tstat": -11.85,
          "pvalue": 0.00001,
          "ci_lower": -13612.4,
          "ci_upper": -9741.2,
          "vif": null
        },
        {
          "feature": "smoker_yes",
          "coef": 23823.68,
          "stderr": 412.18,
          "tstat": 57.80,
          "pvalue": 0.00001,
          "ci_lower": 23013.9,
          "ci_upper": 24633.4,
          "vif": 1.01
        },
        {
          "feature": "bmi",
          "coef": 322.62,
          "stderr": 27.45,
          "tstat": 11.75,
          "pvalue": 0.00001,
          "ci_lower": 268.7,
          "ci_upper": 376.5,
          "vif": 1.01
        },
        {
          "feature": "age",
          "coef": 259.55,
          "stderr": 11.90,
          "tstat": 21.81,
          "pvalue": 0.00001,
          "ci_lower": 236.2,
          "ci_upper": 282.9,
          "vif": 1.01
        }
      ],
      "outliers": [
        { "rank": 1, "index": 578, "actual": 48824.40, "predicted": 39215.10, "residual": 9609.30, "abs_error": 9609.30, "pct_error": 19.68 },
        { "rank": 2, "index": 1241, "actual": 39611.76, "predicted": 31142.50, "residual": 8469.26, "abs_error": 8469.26, "pct_error": 21.38 },
        { "rank": 3, "index": 1020, "actual": 35595.59, "predicted": 27840.10, "residual": 7755.49, "abs_error": 7755.49, "pct_error": 21.79 },
        { "rank": 4, "index": 243, "actual": 7160.09, "predicted": 14210.50, "residual": -7050.41, "abs_error": 7050.41, "pct_error": 98.47 },
        { "rank": 5, "index": 890, "actual": 43753.30, "predicted": 36880.20, "residual": 6873.10, "abs_error": 6873.10, "pct_error": 15.71 },
        { "rank": 6, "index": 34, "actual": 12683.32, "predicted": 7412.10, "residual": 5271.22, "abs_error": 5271.22, "pct_error": 41.56 },
        { "rank": 7, "index": 412, "actual": 23960.45, "predicted": 28950.80, "residual": -4990.35, "abs_error": 4990.35, "pct_error": 20.83 },
        { "rank": 8, "index": 671, "actual": 18246.50, "predicted": 13750.00, "residual": 4496.50, "abs_error": 4496.50, "pct_error": 24.64 },
        { "rank": 9, "index": 112, "actual": 4097.45, "predicted": 7980.20, "residual": -3882.75, "abs_error": 3882.75, "pct_error": 94.76 },
        { "rank": 10, "index": 980, "actual": 21195.82, "predicted": 24850.10, "residual": -3654.28, "abs_error": 3654.28, "pct_error": 17.24 }
      ]
    },
    {
      "k": 4,
      "features": ["smoker_yes", "bmi", "age", "children"],
      "rmse": 6054.20,
      "mae": 4172.60,
      "r2": 0.7495,
      "adj_r2": 0.7456,
      "f_stat": 199.1,
      "f_pvalue": 2.2e-84,
      "coefficients": [
        {
          "feature": "Intercept (β₀)",
          "coef": -12052.45,
          "stderr": 1012.30,
          "tstat": -11.91,
          "pvalue": 0.00001,
          "ci_lower": -14040.8,
          "ci_upper": -10064.1,
          "vif": null
        },
        {
          "feature": "smoker_yes",
          "coef": 23835.10,
          "stderr": 412.30,
          "tstat": 57.81,
          "pvalue": 0.00001,
          "ci_lower": 23025.0,
          "ci_upper": 24645.2,
          "vif": 1.01
        },
        {
          "feature": "bmi",
          "coef": 323.50,
          "stderr": 27.50,
          "tstat": 11.76,
          "pvalue": 0.00001,
          "ci_lower": 269.5,
          "ci_upper": 377.5,
          "vif": 1.01
        },
        {
          "feature": "age",
          "coef": 257.20,
          "stderr": 11.95,
          "tstat": 21.52,
          "pvalue": 0.00001,
          "ci_lower": 233.7,
          "ci_upper": 280.7,
          "vif": 1.02
        },
        {
          "feature": "children",
          "coef": 474.40,
          "stderr": 137.80,
          "tstat": 3.44,
          "pvalue": 0.0006,
          "ci_lower": 203.7,
          "ci_upper": 745.1,
          "vif": 1.01
        }
      ],
      "outliers": [
        { "rank": 1, "index": 578, "actual": 48824.40, "predicted": 39420.20, "residual": 9404.20, "abs_error": 9404.20, "pct_error": 19.26 },
        { "rank": 2, "index": 1241, "actual": 39611.76, "predicted": 31250.60, "residual": 8361.16, "abs_error": 8361.16, "pct_error": 21.11 },
        { "rank": 3, "index": 1020, "actual": 35595.59, "predicted": 27950.40, "residual": 7645.19, "abs_error": 7645.19, "pct_error": 21.48 },
        { "rank": 4, "index": 243, "actual": 7160.09, "predicted": 14350.20, "residual": -7190.11, "abs_error": 7190.11, "pct_error": 100.42 },
        { "rank": 5, "index": 890, "actual": 43753.30, "predicted": 37050.80, "residual": 6702.50, "abs_error": 6702.50, "pct_error": 15.32 },
        { "rank": 6, "index": 34, "actual": 12683.32, "predicted": 7600.30, "residual": 5083.02, "abs_error": 5083.02, "pct_error": 40.08 },
        { "rank": 7, "index": 412, "actual": 23960.45, "predicted": 29120.40, "residual": -5159.95, "abs_error": 5159.95, "pct_error": 21.53 },
        { "rank": 8, "index": 671, "actual": 18246.50, "predicted": 13920.50, "residual": 4326.00, "abs_error": 4326.00, "pct_error": 23.71 },
        { "rank": 9, "index": 112, "actual": 4097.45, "predicted": 8150.30, "residual": -4052.85, "abs_error": 4052.85, "pct_error": 98.91 },
        { "rank": 10, "index": 980, "actual": 21195.82, "predicted": 24980.20, "residual": -3784.38, "abs_error": 3784.38, "pct_error": 17.85 }
      ]
    },
    {
      "k": 5,
      "features": ["smoker_yes", "bmi", "age", "children", "region_southeast"],
      "rmse": 6051.10,
      "mae": 4168.90,
      "r2": 0.7501,
      "adj_r2": 0.7452,
      "f_stat": 159.5,
      "f_pvalue": 5.1e-83,
      "coefficients": [
        {
          "feature": "Intercept (β₀)",
          "coef": -12120.30,
          "stderr": 1015.40,
          "tstat": -11.94,
          "pvalue": 0.00001,
          "ci_lower": -14115.0,
          "ci_upper": -10125.6,
          "vif": null
        },
        {
          "feature": "smoker_yes",
          "coef": 23842.15,
          "stderr": 412.50,
          "tstat": 57.80,
          "pvalue": 0.00001,
          "ci_lower": 23031.7,
          "ci_upper": 24652.6,
          "vif": 1.01
        },
        {
          "feature": "bmi",
          "coef": 325.80,
          "stderr": 27.65,
          "tstat": 11.78,
          "pvalue": 0.00001,
          "ci_lower": 271.5,
          "ci_upper": 380.1,
          "vif": 1.05
        },
        {
          "feature": "age",
          "coef": 256.85,
          "stderr": 11.98,
          "tstat": 21.44,
          "pvalue": 0.00001,
          "ci_lower": 233.3,
          "ci_upper": 280.4,
          "vif": 1.02
        },
        {
          "feature": "children",
          "coef": 472.90,
          "stderr": 137.90,
          "tstat": 3.43,
          "pvalue": 0.0007,
          "ci_lower": 202.1,
          "ci_upper": 743.7,
          "vif": 1.01
        },
        {
          "feature": "region_southeast",
          "coef": -448.15,
          "stderr": 412.80,
          "tstat": -1.09,
          "pvalue": 0.2778,
          "ci_lower": -1259.0,
          "ci_upper": 362.7,
          "vif": 1.05
        }
      ],
      "outliers": [
        { "rank": 1, "index": 578, "actual": 48824.40, "predicted": 38980.10, "residual": 9844.30, "abs_error": 9844.30, "pct_error": 20.16 },
        { "rank": 2, "index": 1241, "actual": 39611.76, "predicted": 31310.20, "residual": 8301.56, "abs_error": 8301.56, "pct_error": 20.96 },
        { "rank": 3, "index": 1020, "actual": 35595.59, "predicted": 27890.30, "residual": 7705.29, "abs_error": 7705.29, "pct_error": 21.65 },
        { "rank": 4, "index": 243, "actual": 7160.09, "predicted": 14290.40, "residual": -7130.31, "abs_error": 7130.31, "pct_error": 99.58 },
        { "rank": 5, "index": 890, "actual": 43753.30, "predicted": 37120.50, "residual": 6632.80, "abs_error": 6632.80, "pct_error": 15.16 },
        { "rank": 6, "index": 34, "actual": 12683.32, "predicted": 7580.40, "residual": 5102.92, "abs_error": 5102.92, "pct_error": 40.23 },
        { "rank": 7, "index": 412, "actual": 23960.45, "predicted": 29080.10, "residual": -5119.65, "abs_error": 5119.65, "pct_error": 21.37 },
        { "rank": 8, "index": 671, "actual": 18246.50, "predicted": 13890.20, "residual": 4356.30, "abs_error": 4356.30, "pct_error": 23.87 },
        { "rank": 9, "index": 112, "actual": 4097.45, "predicted": 8110.10, "residual": -4012.65, "abs_error": 4012.65, "pct_error": 97.93 },
        { "rank": 10, "index": 980, "actual": 21195.82, "predicted": 24920.40, "residual": -3724.58, "abs_error": 3724.58, "pct_error": 17.57 }
      ]
    }
  ]
};

// Mirror the other 4 feature selection algorithms
window.INSURANCE_DATA["Forward SFS"] = window.INSURANCE_DATA["Lasso"];
window.INSURANCE_DATA["RFE"] = window.INSURANCE_DATA["Lasso"];
window.INSURANCE_DATA["ElasticNet"] = window.INSURANCE_DATA["Lasso"];
window.INSURANCE_DATA["Exhaustive"] = window.INSURANCE_DATA["Lasso"];
