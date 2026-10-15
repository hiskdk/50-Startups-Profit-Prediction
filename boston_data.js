// Boston Housing Dataset - Multiple Linear Regression & Feature Selection Data
window.BOSTON_DATA = {
    "ElasticNet":  [
                       {
                           "k":  1,
                           "features":  [
                                            "lstat"
                                        ],
                           "rmse":  6.89,
                           "mae":  5,
                           "r2":  0.529,
                           "adj_r2":  0.5242,
                           "f_stat":  112.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  34.0466,
                                                    "stderr":  0.6042,
                                                    "tstat":  56.353,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  32.86,
                                                    "ci_upper":  35.23,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.9234,
                                                    "stderr":  0.0418,
                                                    "tstat":  -22.071,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.01,
                                                    "ci_upper":  -0.84,
                                                    "vif":  1.37
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  27.18,
                                                "residual":  22.82,
                                                "abs_error":  22.82,
                                                "pct_error":  45.65
                                            },
                                            {
                                                "rank":  2,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  28.59,
                                                "residual":  20.21,
                                                "abs_error":  20.21,
                                                "pct_error":  41.42
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  29.94,
                                                "residual":  20.06,
                                                "abs_error":  20.06,
                                                "pct_error":  40.13
                                            },
                                            {
                                                "rank":  4,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  30.63,
                                                "residual":  19.37,
                                                "abs_error":  19.37,
                                                "pct_error":  38.74
                                            },
                                            {
                                                "rank":  5,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  31.39,
                                                "residual":  18.61,
                                                "abs_error":  18.61,
                                                "pct_error":  37.23
                                            },
                                            {
                                                "rank":  6,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  6.76,
                                                "residual":  16.94,
                                                "abs_error":  16.94,
                                                "pct_error":  71.48
                                            },
                                            {
                                                "rank":  7,
                                                "index":  34,
                                                "actual":  43.1,
                                                "predicted":  27.34,
                                                "residual":  15.76,
                                                "abs_error":  15.76,
                                                "pct_error":  36.56
                                            },
                                            {
                                                "rank":  8,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  30.75,
                                                "residual":  13.05,
                                                "abs_error":  13.05,
                                                "pct_error":  29.79
                                            },
                                            {
                                                "rank":  9,
                                                "index":  40,
                                                "actual":  41.3,
                                                "predicted":  29.81,
                                                "residual":  11.49,
                                                "abs_error":  11.49,
                                                "pct_error":  27.83
                                            },
                                            {
                                                "rank":  10,
                                                "index":  69,
                                                "actual":  41.7,
                                                "predicted":  31.77,
                                                "residual":  9.93,
                                                "abs_error":  9.93,
                                                "pct_error":  23.82
                                            }
                                        ]
                       },
                       {
                           "k":  2,
                           "features":  [
                                            "lstat",
                                            "rm"
                                        ],
                           "rmse":  5.97,
                           "mae":  4.74,
                           "r2":  0.6459,
                           "adj_r2":  0.6388,
                           "f_stat":  90.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  -0.9049,
                                                    "stderr":  3.5989,
                                                    "tstat":  -0.251,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  -7.96,
                                                    "ci_upper":  6.15,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6232,
                                                    "stderr":  0.0485,
                                                    "tstat":  -12.861,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.72,
                                                    "ci_upper":  -0.53,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.9839,
                                                    "stderr":  0.5073,
                                                    "tstat":  9.824,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.99,
                                                    "ci_upper":  5.98,
                                                    "vif":  1.59
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  39.56,
                                                "residual":  -17.66,
                                                "abs_error":  17.66,
                                                "pct_error":  80.63
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  7.65,
                                                "residual":  16.05,
                                                "abs_error":  16.05,
                                                "pct_error":  67.71
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.35,
                                                "residual":  14.65,
                                                "abs_error":  14.65,
                                                "pct_error":  29.3
                                            },
                                            {
                                                "rank":  4,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  35.81,
                                                "residual":  14.19,
                                                "abs_error":  14.19,
                                                "pct_error":  28.38
                                            },
                                            {
                                                "rank":  5,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  36.31,
                                                "residual":  13.69,
                                                "abs_error":  13.69,
                                                "pct_error":  27.39
                                            },
                                            {
                                                "rank":  6,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  37.34,
                                                "residual":  12.66,
                                                "abs_error":  12.66,
                                                "pct_error":  25.32
                                            },
                                            {
                                                "rank":  7,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  37.27,
                                                "residual":  11.53,
                                                "abs_error":  11.53,
                                                "pct_error":  23.63
                                            },
                                            {
                                                "rank":  8,
                                                "index":  34,
                                                "actual":  43.1,
                                                "predicted":  32.05,
                                                "residual":  11.05,
                                                "abs_error":  11.05,
                                                "pct_error":  25.64
                                            },
                                            {
                                                "rank":  9,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  18.04,
                                                "residual":  -10.84,
                                                "abs_error":  10.84,
                                                "pct_error":  150.61
                                            },
                                            {
                                                "rank":  10,
                                                "index":  40,
                                                "actual":  41.3,
                                                "predicted":  30.84,
                                                "residual":  10.46,
                                                "abs_error":  10.46,
                                                "pct_error":  25.33
                                            }
                                        ]
                       },
                       {
                           "k":  3,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio"
                                        ],
                           "rmse":  5.32,
                           "mae":  4.17,
                           "r2":  0.7192,
                           "adj_r2":  0.7106,
                           "f_stat":  83.6,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  15.0906,
                                                    "stderr":  4.4383,
                                                    "tstat":  3.4,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  6.39,
                                                    "ci_upper":  23.79,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.5649,
                                                    "stderr":  0.0477,
                                                    "tstat":  -11.839,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.66,
                                                    "ci_upper":  -0.47,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.5547,
                                                    "stderr":  0.4938,
                                                    "tstat":  9.225,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.59,
                                                    "ci_upper":  5.52,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.762,
                                                    "stderr":  0.1323,
                                                    "tstat":  -5.761,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.02,
                                                    "ci_upper":  -0.5,
                                                    "vif":  1.81
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  34.68,
                                                "residual":  15.32,
                                                "abs_error":  15.32,
                                                "pct_error":  30.64
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  8.88,
                                                "residual":  14.82,
                                                "abs_error":  14.82,
                                                "pct_error":  62.55
                                            },
                                            {
                                                "rank":  3,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  36.7,
                                                "residual":  -14.8,
                                                "abs_error":  14.8,
                                                "pct_error":  67.58
                                            },
                                            {
                                                "rank":  4,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  37.91,
                                                "residual":  12.09,
                                                "abs_error":  12.09,
                                                "pct_error":  24.17
                                            },
                                            {
                                                "rank":  5,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  38.77,
                                                "residual":  11.23,
                                                "abs_error":  11.23,
                                                "pct_error":  22.46
                                            },
                                            {
                                                "rank":  6,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.85,
                                                "residual":  11.15,
                                                "abs_error":  11.15,
                                                "pct_error":  22.29
                                            },
                                            {
                                                "rank":  7,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.11,
                                                "residual":  -9.91,
                                                "abs_error":  9.91,
                                                "pct_error":  137.65
                                            },
                                            {
                                                "rank":  8,
                                                "index":  68,
                                                "actual":  27.9,
                                                "predicted":  18.39,
                                                "residual":  9.51,
                                                "abs_error":  9.51,
                                                "pct_error":  34.09
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  34.98,
                                                "residual":  8.82,
                                                "abs_error":  8.82,
                                                "pct_error":  20.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  40.1,
                                                "residual":  8.7,
                                                "abs_error":  8.7,
                                                "pct_error":  17.83
                                            }
                                        ]
                       },
                       {
                           "k":  4,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio",
                                            "dis"
                                        ],
                           "rmse":  5.25,
                           "mae":  4.07,
                           "r2":  0.7261,
                           "adj_r2":  0.7148,
                           "f_stat":  64.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  20.7594,
                                                    "stderr":  4.5727,
                                                    "tstat":  4.54,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  11.8,
                                                    "ci_upper":  29.72,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6512,
                                                    "stderr":  0.0514,
                                                    "tstat":  -12.667,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.75,
                                                    "ci_upper":  -0.55,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.3603,
                                                    "stderr":  0.4868,
                                                    "tstat":  8.957,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.41,
                                                    "ci_upper":  5.31,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.8233,
                                                    "stderr":  0.1306,
                                                    "tstat":  -6.302,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.08,
                                                    "ci_upper":  -0.57,
                                                    "vif":  1.81
                                                },
                                                {
                                                    "feature":  "dis",
                                                    "coef":  -0.5767,
                                                    "stderr":  0.142,
                                                    "tstat":  -4.063,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.85,
                                                    "ci_upper":  -0.3,
                                                    "vif":  2.03
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  7.73,
                                                "residual":  15.97,
                                                "abs_error":  15.97,
                                                "pct_error":  67.37
                                            },
                                            {
                                                "rank":  2,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  37.87,
                                                "residual":  -15.97,
                                                "abs_error":  15.97,
                                                "pct_error":  72.92
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.51,
                                                "residual":  14.49,
                                                "abs_error":  14.49,
                                                "pct_error":  28.98
                                            },
                                            {
                                                "rank":  4,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.86,
                                                "residual":  11.14,
                                                "abs_error":  11.14,
                                                "pct_error":  22.28
                                            },
                                            {
                                                "rank":  5,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.65,
                                                "residual":  -10.45,
                                                "abs_error":  10.45,
                                                "pct_error":  145.1
                                            },
                                            {
                                                "rank":  6,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  39.64,
                                                "residual":  10.36,
                                                "abs_error":  10.36,
                                                "pct_error":  20.72
                                            },
                                            {
                                                "rank":  7,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  39.99,
                                                "residual":  10.01,
                                                "abs_error":  10.01,
                                                "pct_error":  20.01
                                            },
                                            {
                                                "rank":  8,
                                                "index":  31,
                                                "actual":  20,
                                                "predicted":  11.48,
                                                "residual":  8.52,
                                                "abs_error":  8.52,
                                                "pct_error":  42.61
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  35.7,
                                                "residual":  8.1,
                                                "abs_error":  8.1,
                                                "pct_error":  18.5
                                            },
                                            {
                                                "rank":  10,
                                                "index":  81,
                                                "actual":  19.3,
                                                "predicted":  11.28,
                                                "residual":  8.02,
                                                "abs_error":  8.02,
                                                "pct_error":  41.55
                                            }
                                        ]
                       },
                       {
                           "k":  5,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio",
                                            "dis",
                                            "crim"
                                        ],
                           "rmse":  5.17,
                           "mae":  3.99,
                           "r2":  0.7345,
                           "adj_r2":  0.7207,
                           "f_stat":  53.1,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  19.4007,
                                                    "stderr":  4.582,
                                                    "tstat":  4.234,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  10.42,
                                                    "ci_upper":  28.38,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6137,
                                                    "stderr":  0.0535,
                                                    "tstat":  -11.474,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.72,
                                                    "ci_upper":  -0.51,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.464,
                                                    "stderr":  0.4859,
                                                    "tstat":  9.186,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.51,
                                                    "ci_upper":  5.42,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.7814,
                                                    "stderr":  0.1311,
                                                    "tstat":  -5.961,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.04,
                                                    "ci_upper":  -0.52,
                                                    "vif":  1.81
                                                },
                                                {
                                                    "feature":  "dis",
                                                    "coef":  -0.6414,
                                                    "stderr":  0.1437,
                                                    "tstat":  -4.463,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.92,
                                                    "ci_upper":  -0.36,
                                                    "vif":  2.03
                                                },
                                                {
                                                    "feature":  "crim",
                                                    "coef":  -0.0824,
                                                    "stderr":  0.0346,
                                                    "tstat":  -2.38,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  -0.15,
                                                    "ci_upper":  -0.01,
                                                    "vif":  2.25
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  38.06,
                                                "residual":  -16.16,
                                                "abs_error":  16.16,
                                                "pct_error":  73.78
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  8.57,
                                                "residual":  15.13,
                                                "abs_error":  15.13,
                                                "pct_error":  63.85
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.66,
                                                "residual":  14.34,
                                                "abs_error":  14.34,
                                                "pct_error":  28.67
                                            },
                                            {
                                                "rank":  4,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.73,
                                                "residual":  11.27,
                                                "abs_error":  11.27,
                                                "pct_error":  22.55
                                            },
                                            {
                                                "rank":  5,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  39.56,
                                                "residual":  10.44,
                                                "abs_error":  10.44,
                                                "pct_error":  20.88
                                            },
                                            {
                                                "rank":  6,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.28,
                                                "residual":  -10.08,
                                                "abs_error":  10.08,
                                                "pct_error":  140
                                            },
                                            {
                                                "rank":  7,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  40.11,
                                                "residual":  9.89,
                                                "abs_error":  9.89,
                                                "pct_error":  19.77
                                            },
                                            {
                                                "rank":  8,
                                                "index":  68,
                                                "actual":  27.9,
                                                "predicted":  19.4,
                                                "residual":  8.5,
                                                "abs_error":  8.5,
                                                "pct_error":  30.47
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  35.81,
                                                "residual":  7.99,
                                                "abs_error":  7.99,
                                                "pct_error":  18.25
                                            },
                                            {
                                                "rank":  10,
                                                "index":  31,
                                                "actual":  20,
                                                "predicted":  12.03,
                                                "residual":  7.97,
                                                "abs_error":  7.97,
                                                "pct_error":  39.84
                                            }
                                        ]
                       }
                   ],
    "Lasso":  [
                  {
                      "k":  1,
                      "features":  [
                                       "lstat"
                                   ],
                      "rmse":  6.89,
                      "mae":  5,
                      "r2":  0.529,
                      "adj_r2":  0.5242,
                      "f_stat":  112.3,
                      "f_pvalue":  0.0001,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (b0)",
                                               "coef":  34.0466,
                                               "stderr":  0.6042,
                                               "tstat":  56.353,
                                               "pvalue":  0.0001,
                                               "ci_lower":  32.86,
                                               "ci_upper":  35.23,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "lstat",
                                               "coef":  -0.9234,
                                               "stderr":  0.0418,
                                               "tstat":  -22.071,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -1.01,
                                               "ci_upper":  -0.84,
                                               "vif":  1.37
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  47,
                                           "actual":  50,
                                           "predicted":  27.18,
                                           "residual":  22.82,
                                           "abs_error":  22.82,
                                           "pct_error":  45.65
                                       },
                                       {
                                           "rank":  2,
                                           "index":  45,
                                           "actual":  48.8,
                                           "predicted":  28.59,
                                           "residual":  20.21,
                                           "abs_error":  20.21,
                                           "pct_error":  41.42
                                       },
                                       {
                                           "rank":  3,
                                           "index":  44,
                                           "actual":  50,
                                           "predicted":  29.94,
                                           "residual":  20.06,
                                           "abs_error":  20.06,
                                           "pct_error":  40.13
                                       },
                                       {
                                           "rank":  4,
                                           "index":  33,
                                           "actual":  50,
                                           "predicted":  30.63,
                                           "residual":  19.37,
                                           "abs_error":  19.37,
                                           "pct_error":  38.74
                                       },
                                       {
                                           "rank":  5,
                                           "index":  14,
                                           "actual":  50,
                                           "predicted":  31.39,
                                           "residual":  18.61,
                                           "abs_error":  18.61,
                                           "pct_error":  37.23
                                       },
                                       {
                                           "rank":  6,
                                           "index":  46,
                                           "actual":  23.7,
                                           "predicted":  6.76,
                                           "residual":  16.94,
                                           "abs_error":  16.94,
                                           "pct_error":  71.48
                                       },
                                       {
                                           "rank":  7,
                                           "index":  34,
                                           "actual":  43.1,
                                           "predicted":  27.34,
                                           "residual":  15.76,
                                           "abs_error":  15.76,
                                           "pct_error":  36.56
                                       },
                                       {
                                           "rank":  8,
                                           "index":  83,
                                           "actual":  43.8,
                                           "predicted":  30.75,
                                           "residual":  13.05,
                                           "abs_error":  13.05,
                                           "pct_error":  29.79
                                       },
                                       {
                                           "rank":  9,
                                           "index":  40,
                                           "actual":  41.3,
                                           "predicted":  29.81,
                                           "residual":  11.49,
                                           "abs_error":  11.49,
                                           "pct_error":  27.83
                                       },
                                       {
                                           "rank":  10,
                                           "index":  69,
                                           "actual":  41.7,
                                           "predicted":  31.77,
                                           "residual":  9.93,
                                           "abs_error":  9.93,
                                           "pct_error":  23.82
                                       }
                                   ]
                  },
                  {
                      "k":  2,
                      "features":  [
                                       "lstat",
                                       "rm"
                                   ],
                      "rmse":  5.97,
                      "mae":  4.74,
                      "r2":  0.6459,
                      "adj_r2":  0.6388,
                      "f_stat":  90.3,
                      "f_pvalue":  0.0001,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (b0)",
                                               "coef":  -0.9049,
                                               "stderr":  3.5989,
                                               "tstat":  -0.251,
                                               "pvalue":  0.0045,
                                               "ci_lower":  -7.96,
                                               "ci_upper":  6.15,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "lstat",
                                               "coef":  -0.6232,
                                               "stderr":  0.0485,
                                               "tstat":  -12.861,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.72,
                                               "ci_upper":  -0.53,
                                               "vif":  1.37
                                           },
                                           {
                                               "feature":  "rm",
                                               "coef":  4.9839,
                                               "stderr":  0.5073,
                                               "tstat":  9.824,
                                               "pvalue":  0.0001,
                                               "ci_lower":  3.99,
                                               "ci_upper":  5.98,
                                               "vif":  1.59
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  50,
                                           "actual":  21.9,
                                           "predicted":  39.56,
                                           "residual":  -17.66,
                                           "abs_error":  17.66,
                                           "pct_error":  80.63
                                       },
                                       {
                                           "rank":  2,
                                           "index":  46,
                                           "actual":  23.7,
                                           "predicted":  7.65,
                                           "residual":  16.05,
                                           "abs_error":  16.05,
                                           "pct_error":  67.71
                                       },
                                       {
                                           "rank":  3,
                                           "index":  44,
                                           "actual":  50,
                                           "predicted":  35.35,
                                           "residual":  14.65,
                                           "abs_error":  14.65,
                                           "pct_error":  29.3
                                       },
                                       {
                                           "rank":  4,
                                           "index":  47,
                                           "actual":  50,
                                           "predicted":  35.81,
                                           "residual":  14.19,
                                           "abs_error":  14.19,
                                           "pct_error":  28.38
                                       },
                                       {
                                           "rank":  5,
                                           "index":  33,
                                           "actual":  50,
                                           "predicted":  36.31,
                                           "residual":  13.69,
                                           "abs_error":  13.69,
                                           "pct_error":  27.39
                                       },
                                       {
                                           "rank":  6,
                                           "index":  14,
                                           "actual":  50,
                                           "predicted":  37.34,
                                           "residual":  12.66,
                                           "abs_error":  12.66,
                                           "pct_error":  25.32
                                       },
                                       {
                                           "rank":  7,
                                           "index":  45,
                                           "actual":  48.8,
                                           "predicted":  37.27,
                                           "residual":  11.53,
                                           "abs_error":  11.53,
                                           "pct_error":  23.63
                                       },
                                       {
                                           "rank":  8,
                                           "index":  34,
                                           "actual":  43.1,
                                           "predicted":  32.05,
                                           "residual":  11.05,
                                           "abs_error":  11.05,
                                           "pct_error":  25.64
                                       },
                                       {
                                           "rank":  9,
                                           "index":  19,
                                           "actual":  7.2,
                                           "predicted":  18.04,
                                           "residual":  -10.84,
                                           "abs_error":  10.84,
                                           "pct_error":  150.61
                                       },
                                       {
                                           "rank":  10,
                                           "index":  40,
                                           "actual":  41.3,
                                           "predicted":  30.84,
                                           "residual":  10.46,
                                           "abs_error":  10.46,
                                           "pct_error":  25.33
                                       }
                                   ]
                  },
                  {
                      "k":  3,
                      "features":  [
                                       "lstat",
                                       "rm",
                                       "ptratio"
                                   ],
                      "rmse":  5.32,
                      "mae":  4.17,
                      "r2":  0.7192,
                      "adj_r2":  0.7106,
                      "f_stat":  83.6,
                      "f_pvalue":  0.0001,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (b0)",
                                               "coef":  15.0906,
                                               "stderr":  4.4383,
                                               "tstat":  3.4,
                                               "pvalue":  0.0045,
                                               "ci_lower":  6.39,
                                               "ci_upper":  23.79,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "lstat",
                                               "coef":  -0.5649,
                                               "stderr":  0.0477,
                                               "tstat":  -11.839,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.66,
                                               "ci_upper":  -0.47,
                                               "vif":  1.37
                                           },
                                           {
                                               "feature":  "rm",
                                               "coef":  4.5547,
                                               "stderr":  0.4938,
                                               "tstat":  9.225,
                                               "pvalue":  0.0001,
                                               "ci_lower":  3.59,
                                               "ci_upper":  5.52,
                                               "vif":  1.59
                                           },
                                           {
                                               "feature":  "ptratio",
                                               "coef":  -0.762,
                                               "stderr":  0.1323,
                                               "tstat":  -5.761,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -1.02,
                                               "ci_upper":  -0.5,
                                               "vif":  1.81
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  44,
                                           "actual":  50,
                                           "predicted":  34.68,
                                           "residual":  15.32,
                                           "abs_error":  15.32,
                                           "pct_error":  30.64
                                       },
                                       {
                                           "rank":  2,
                                           "index":  46,
                                           "actual":  23.7,
                                           "predicted":  8.88,
                                           "residual":  14.82,
                                           "abs_error":  14.82,
                                           "pct_error":  62.55
                                       },
                                       {
                                           "rank":  3,
                                           "index":  50,
                                           "actual":  21.9,
                                           "predicted":  36.7,
                                           "residual":  -14.8,
                                           "abs_error":  14.8,
                                           "pct_error":  67.58
                                       },
                                       {
                                           "rank":  4,
                                           "index":  33,
                                           "actual":  50,
                                           "predicted":  37.91,
                                           "residual":  12.09,
                                           "abs_error":  12.09,
                                           "pct_error":  24.17
                                       },
                                       {
                                           "rank":  5,
                                           "index":  47,
                                           "actual":  50,
                                           "predicted":  38.77,
                                           "residual":  11.23,
                                           "abs_error":  11.23,
                                           "pct_error":  22.46
                                       },
                                       {
                                           "rank":  6,
                                           "index":  14,
                                           "actual":  50,
                                           "predicted":  38.85,
                                           "residual":  11.15,
                                           "abs_error":  11.15,
                                           "pct_error":  22.29
                                       },
                                       {
                                           "rank":  7,
                                           "index":  19,
                                           "actual":  7.2,
                                           "predicted":  17.11,
                                           "residual":  -9.91,
                                           "abs_error":  9.91,
                                           "pct_error":  137.65
                                       },
                                       {
                                           "rank":  8,
                                           "index":  68,
                                           "actual":  27.9,
                                           "predicted":  18.39,
                                           "residual":  9.51,
                                           "abs_error":  9.51,
                                           "pct_error":  34.09
                                       },
                                       {
                                           "rank":  9,
                                           "index":  83,
                                           "actual":  43.8,
                                           "predicted":  34.98,
                                           "residual":  8.82,
                                           "abs_error":  8.82,
                                           "pct_error":  20.15
                                       },
                                       {
                                           "rank":  10,
                                           "index":  45,
                                           "actual":  48.8,
                                           "predicted":  40.1,
                                           "residual":  8.7,
                                           "abs_error":  8.7,
                                           "pct_error":  17.83
                                       }
                                   ]
                  },
                  {
                      "k":  4,
                      "features":  [
                                       "lstat",
                                       "rm",
                                       "ptratio",
                                       "dis"
                                   ],
                      "rmse":  5.25,
                      "mae":  4.07,
                      "r2":  0.7261,
                      "adj_r2":  0.7148,
                      "f_stat":  64.3,
                      "f_pvalue":  0.0001,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (b0)",
                                               "coef":  20.7594,
                                               "stderr":  4.5727,
                                               "tstat":  4.54,
                                               "pvalue":  0.0001,
                                               "ci_lower":  11.8,
                                               "ci_upper":  29.72,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "lstat",
                                               "coef":  -0.6512,
                                               "stderr":  0.0514,
                                               "tstat":  -12.667,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.75,
                                               "ci_upper":  -0.55,
                                               "vif":  1.37
                                           },
                                           {
                                               "feature":  "rm",
                                               "coef":  4.3603,
                                               "stderr":  0.4868,
                                               "tstat":  8.957,
                                               "pvalue":  0.0001,
                                               "ci_lower":  3.41,
                                               "ci_upper":  5.31,
                                               "vif":  1.59
                                           },
                                           {
                                               "feature":  "ptratio",
                                               "coef":  -0.8233,
                                               "stderr":  0.1306,
                                               "tstat":  -6.302,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -1.08,
                                               "ci_upper":  -0.57,
                                               "vif":  1.81
                                           },
                                           {
                                               "feature":  "dis",
                                               "coef":  -0.5767,
                                               "stderr":  0.142,
                                               "tstat":  -4.063,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.85,
                                               "ci_upper":  -0.3,
                                               "vif":  2.03
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  46,
                                           "actual":  23.7,
                                           "predicted":  7.73,
                                           "residual":  15.97,
                                           "abs_error":  15.97,
                                           "pct_error":  67.37
                                       },
                                       {
                                           "rank":  2,
                                           "index":  50,
                                           "actual":  21.9,
                                           "predicted":  37.87,
                                           "residual":  -15.97,
                                           "abs_error":  15.97,
                                           "pct_error":  72.92
                                       },
                                       {
                                           "rank":  3,
                                           "index":  44,
                                           "actual":  50,
                                           "predicted":  35.51,
                                           "residual":  14.49,
                                           "abs_error":  14.49,
                                           "pct_error":  28.98
                                       },
                                       {
                                           "rank":  4,
                                           "index":  14,
                                           "actual":  50,
                                           "predicted":  38.86,
                                           "residual":  11.14,
                                           "abs_error":  11.14,
                                           "pct_error":  22.28
                                       },
                                       {
                                           "rank":  5,
                                           "index":  19,
                                           "actual":  7.2,
                                           "predicted":  17.65,
                                           "residual":  -10.45,
                                           "abs_error":  10.45,
                                           "pct_error":  145.1
                                       },
                                       {
                                           "rank":  6,
                                           "index":  33,
                                           "actual":  50,
                                           "predicted":  39.64,
                                           "residual":  10.36,
                                           "abs_error":  10.36,
                                           "pct_error":  20.72
                                       },
                                       {
                                           "rank":  7,
                                           "index":  47,
                                           "actual":  50,
                                           "predicted":  39.99,
                                           "residual":  10.01,
                                           "abs_error":  10.01,
                                           "pct_error":  20.01
                                       },
                                       {
                                           "rank":  8,
                                           "index":  31,
                                           "actual":  20,
                                           "predicted":  11.48,
                                           "residual":  8.52,
                                           "abs_error":  8.52,
                                           "pct_error":  42.61
                                       },
                                       {
                                           "rank":  9,
                                           "index":  83,
                                           "actual":  43.8,
                                           "predicted":  35.7,
                                           "residual":  8.1,
                                           "abs_error":  8.1,
                                           "pct_error":  18.5
                                       },
                                       {
                                           "rank":  10,
                                           "index":  81,
                                           "actual":  19.3,
                                           "predicted":  11.28,
                                           "residual":  8.02,
                                           "abs_error":  8.02,
                                           "pct_error":  41.55
                                       }
                                   ]
                  },
                  {
                      "k":  5,
                      "features":  [
                                       "lstat",
                                       "rm",
                                       "ptratio",
                                       "dis",
                                       "crim"
                                   ],
                      "rmse":  5.17,
                      "mae":  3.99,
                      "r2":  0.7345,
                      "adj_r2":  0.7207,
                      "f_stat":  53.1,
                      "f_pvalue":  0.0001,
                      "coefficients":  [
                                           {
                                               "feature":  "Intercept (b0)",
                                               "coef":  19.4007,
                                               "stderr":  4.582,
                                               "tstat":  4.234,
                                               "pvalue":  0.0001,
                                               "ci_lower":  10.42,
                                               "ci_upper":  28.38,
                                               "vif":  null
                                           },
                                           {
                                               "feature":  "lstat",
                                               "coef":  -0.6137,
                                               "stderr":  0.0535,
                                               "tstat":  -11.474,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.72,
                                               "ci_upper":  -0.51,
                                               "vif":  1.37
                                           },
                                           {
                                               "feature":  "rm",
                                               "coef":  4.464,
                                               "stderr":  0.4859,
                                               "tstat":  9.186,
                                               "pvalue":  0.0001,
                                               "ci_lower":  3.51,
                                               "ci_upper":  5.42,
                                               "vif":  1.59
                                           },
                                           {
                                               "feature":  "ptratio",
                                               "coef":  -0.7814,
                                               "stderr":  0.1311,
                                               "tstat":  -5.961,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -1.04,
                                               "ci_upper":  -0.52,
                                               "vif":  1.81
                                           },
                                           {
                                               "feature":  "dis",
                                               "coef":  -0.6414,
                                               "stderr":  0.1437,
                                               "tstat":  -4.463,
                                               "pvalue":  0.0001,
                                               "ci_lower":  -0.92,
                                               "ci_upper":  -0.36,
                                               "vif":  2.03
                                           },
                                           {
                                               "feature":  "crim",
                                               "coef":  -0.0824,
                                               "stderr":  0.0346,
                                               "tstat":  -2.38,
                                               "pvalue":  0.0045,
                                               "ci_lower":  -0.15,
                                               "ci_upper":  -0.01,
                                               "vif":  2.25
                                           }
                                       ],
                      "outliers":  [
                                       {
                                           "rank":  1,
                                           "index":  50,
                                           "actual":  21.9,
                                           "predicted":  38.06,
                                           "residual":  -16.16,
                                           "abs_error":  16.16,
                                           "pct_error":  73.78
                                       },
                                       {
                                           "rank":  2,
                                           "index":  46,
                                           "actual":  23.7,
                                           "predicted":  8.57,
                                           "residual":  15.13,
                                           "abs_error":  15.13,
                                           "pct_error":  63.85
                                       },
                                       {
                                           "rank":  3,
                                           "index":  44,
                                           "actual":  50,
                                           "predicted":  35.66,
                                           "residual":  14.34,
                                           "abs_error":  14.34,
                                           "pct_error":  28.67
                                       },
                                       {
                                           "rank":  4,
                                           "index":  14,
                                           "actual":  50,
                                           "predicted":  38.73,
                                           "residual":  11.27,
                                           "abs_error":  11.27,
                                           "pct_error":  22.55
                                       },
                                       {
                                           "rank":  5,
                                           "index":  33,
                                           "actual":  50,
                                           "predicted":  39.56,
                                           "residual":  10.44,
                                           "abs_error":  10.44,
                                           "pct_error":  20.88
                                       },
                                       {
                                           "rank":  6,
                                           "index":  19,
                                           "actual":  7.2,
                                           "predicted":  17.28,
                                           "residual":  -10.08,
                                           "abs_error":  10.08,
                                           "pct_error":  140
                                       },
                                       {
                                           "rank":  7,
                                           "index":  47,
                                           "actual":  50,
                                           "predicted":  40.11,
                                           "residual":  9.89,
                                           "abs_error":  9.89,
                                           "pct_error":  19.77
                                       },
                                       {
                                           "rank":  8,
                                           "index":  68,
                                           "actual":  27.9,
                                           "predicted":  19.4,
                                           "residual":  8.5,
                                           "abs_error":  8.5,
                                           "pct_error":  30.47
                                       },
                                       {
                                           "rank":  9,
                                           "index":  83,
                                           "actual":  43.8,
                                           "predicted":  35.81,
                                           "residual":  7.99,
                                           "abs_error":  7.99,
                                           "pct_error":  18.25
                                       },
                                       {
                                           "rank":  10,
                                           "index":  31,
                                           "actual":  20,
                                           "predicted":  12.03,
                                           "residual":  7.97,
                                           "abs_error":  7.97,
                                           "pct_error":  39.84
                                       }
                                   ]
                  }
              ],
    "Exhaustive":  [
                       {
                           "k":  1,
                           "features":  [
                                            "lstat"
                                        ],
                           "rmse":  6.89,
                           "mae":  5,
                           "r2":  0.529,
                           "adj_r2":  0.5242,
                           "f_stat":  112.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  34.0466,
                                                    "stderr":  0.6042,
                                                    "tstat":  56.353,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  32.86,
                                                    "ci_upper":  35.23,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.9234,
                                                    "stderr":  0.0418,
                                                    "tstat":  -22.071,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.01,
                                                    "ci_upper":  -0.84,
                                                    "vif":  1.37
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  27.18,
                                                "residual":  22.82,
                                                "abs_error":  22.82,
                                                "pct_error":  45.65
                                            },
                                            {
                                                "rank":  2,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  28.59,
                                                "residual":  20.21,
                                                "abs_error":  20.21,
                                                "pct_error":  41.42
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  29.94,
                                                "residual":  20.06,
                                                "abs_error":  20.06,
                                                "pct_error":  40.13
                                            },
                                            {
                                                "rank":  4,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  30.63,
                                                "residual":  19.37,
                                                "abs_error":  19.37,
                                                "pct_error":  38.74
                                            },
                                            {
                                                "rank":  5,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  31.39,
                                                "residual":  18.61,
                                                "abs_error":  18.61,
                                                "pct_error":  37.23
                                            },
                                            {
                                                "rank":  6,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  6.76,
                                                "residual":  16.94,
                                                "abs_error":  16.94,
                                                "pct_error":  71.48
                                            },
                                            {
                                                "rank":  7,
                                                "index":  34,
                                                "actual":  43.1,
                                                "predicted":  27.34,
                                                "residual":  15.76,
                                                "abs_error":  15.76,
                                                "pct_error":  36.56
                                            },
                                            {
                                                "rank":  8,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  30.75,
                                                "residual":  13.05,
                                                "abs_error":  13.05,
                                                "pct_error":  29.79
                                            },
                                            {
                                                "rank":  9,
                                                "index":  40,
                                                "actual":  41.3,
                                                "predicted":  29.81,
                                                "residual":  11.49,
                                                "abs_error":  11.49,
                                                "pct_error":  27.83
                                            },
                                            {
                                                "rank":  10,
                                                "index":  69,
                                                "actual":  41.7,
                                                "predicted":  31.77,
                                                "residual":  9.93,
                                                "abs_error":  9.93,
                                                "pct_error":  23.82
                                            }
                                        ]
                       },
                       {
                           "k":  2,
                           "features":  [
                                            "lstat",
                                            "rm"
                                        ],
                           "rmse":  5.97,
                           "mae":  4.74,
                           "r2":  0.6459,
                           "adj_r2":  0.6388,
                           "f_stat":  90.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  -0.9049,
                                                    "stderr":  3.5989,
                                                    "tstat":  -0.251,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  -7.96,
                                                    "ci_upper":  6.15,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6232,
                                                    "stderr":  0.0485,
                                                    "tstat":  -12.861,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.72,
                                                    "ci_upper":  -0.53,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.9839,
                                                    "stderr":  0.5073,
                                                    "tstat":  9.824,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.99,
                                                    "ci_upper":  5.98,
                                                    "vif":  1.59
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  39.56,
                                                "residual":  -17.66,
                                                "abs_error":  17.66,
                                                "pct_error":  80.63
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  7.65,
                                                "residual":  16.05,
                                                "abs_error":  16.05,
                                                "pct_error":  67.71
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.35,
                                                "residual":  14.65,
                                                "abs_error":  14.65,
                                                "pct_error":  29.3
                                            },
                                            {
                                                "rank":  4,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  35.81,
                                                "residual":  14.19,
                                                "abs_error":  14.19,
                                                "pct_error":  28.38
                                            },
                                            {
                                                "rank":  5,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  36.31,
                                                "residual":  13.69,
                                                "abs_error":  13.69,
                                                "pct_error":  27.39
                                            },
                                            {
                                                "rank":  6,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  37.34,
                                                "residual":  12.66,
                                                "abs_error":  12.66,
                                                "pct_error":  25.32
                                            },
                                            {
                                                "rank":  7,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  37.27,
                                                "residual":  11.53,
                                                "abs_error":  11.53,
                                                "pct_error":  23.63
                                            },
                                            {
                                                "rank":  8,
                                                "index":  34,
                                                "actual":  43.1,
                                                "predicted":  32.05,
                                                "residual":  11.05,
                                                "abs_error":  11.05,
                                                "pct_error":  25.64
                                            },
                                            {
                                                "rank":  9,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  18.04,
                                                "residual":  -10.84,
                                                "abs_error":  10.84,
                                                "pct_error":  150.61
                                            },
                                            {
                                                "rank":  10,
                                                "index":  40,
                                                "actual":  41.3,
                                                "predicted":  30.84,
                                                "residual":  10.46,
                                                "abs_error":  10.46,
                                                "pct_error":  25.33
                                            }
                                        ]
                       },
                       {
                           "k":  3,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio"
                                        ],
                           "rmse":  5.32,
                           "mae":  4.17,
                           "r2":  0.7192,
                           "adj_r2":  0.7106,
                           "f_stat":  83.6,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  15.0906,
                                                    "stderr":  4.4383,
                                                    "tstat":  3.4,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  6.39,
                                                    "ci_upper":  23.79,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.5649,
                                                    "stderr":  0.0477,
                                                    "tstat":  -11.839,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.66,
                                                    "ci_upper":  -0.47,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.5547,
                                                    "stderr":  0.4938,
                                                    "tstat":  9.225,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.59,
                                                    "ci_upper":  5.52,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.762,
                                                    "stderr":  0.1323,
                                                    "tstat":  -5.761,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.02,
                                                    "ci_upper":  -0.5,
                                                    "vif":  1.81
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  34.68,
                                                "residual":  15.32,
                                                "abs_error":  15.32,
                                                "pct_error":  30.64
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  8.88,
                                                "residual":  14.82,
                                                "abs_error":  14.82,
                                                "pct_error":  62.55
                                            },
                                            {
                                                "rank":  3,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  36.7,
                                                "residual":  -14.8,
                                                "abs_error":  14.8,
                                                "pct_error":  67.58
                                            },
                                            {
                                                "rank":  4,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  37.91,
                                                "residual":  12.09,
                                                "abs_error":  12.09,
                                                "pct_error":  24.17
                                            },
                                            {
                                                "rank":  5,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  38.77,
                                                "residual":  11.23,
                                                "abs_error":  11.23,
                                                "pct_error":  22.46
                                            },
                                            {
                                                "rank":  6,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.85,
                                                "residual":  11.15,
                                                "abs_error":  11.15,
                                                "pct_error":  22.29
                                            },
                                            {
                                                "rank":  7,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.11,
                                                "residual":  -9.91,
                                                "abs_error":  9.91,
                                                "pct_error":  137.65
                                            },
                                            {
                                                "rank":  8,
                                                "index":  68,
                                                "actual":  27.9,
                                                "predicted":  18.39,
                                                "residual":  9.51,
                                                "abs_error":  9.51,
                                                "pct_error":  34.09
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  34.98,
                                                "residual":  8.82,
                                                "abs_error":  8.82,
                                                "pct_error":  20.15
                                            },
                                            {
                                                "rank":  10,
                                                "index":  45,
                                                "actual":  48.8,
                                                "predicted":  40.1,
                                                "residual":  8.7,
                                                "abs_error":  8.7,
                                                "pct_error":  17.83
                                            }
                                        ]
                       },
                       {
                           "k":  4,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio",
                                            "dis"
                                        ],
                           "rmse":  5.25,
                           "mae":  4.07,
                           "r2":  0.7261,
                           "adj_r2":  0.7148,
                           "f_stat":  64.3,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  20.7594,
                                                    "stderr":  4.5727,
                                                    "tstat":  4.54,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  11.8,
                                                    "ci_upper":  29.72,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6512,
                                                    "stderr":  0.0514,
                                                    "tstat":  -12.667,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.75,
                                                    "ci_upper":  -0.55,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.3603,
                                                    "stderr":  0.4868,
                                                    "tstat":  8.957,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.41,
                                                    "ci_upper":  5.31,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.8233,
                                                    "stderr":  0.1306,
                                                    "tstat":  -6.302,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.08,
                                                    "ci_upper":  -0.57,
                                                    "vif":  1.81
                                                },
                                                {
                                                    "feature":  "dis",
                                                    "coef":  -0.5767,
                                                    "stderr":  0.142,
                                                    "tstat":  -4.063,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.85,
                                                    "ci_upper":  -0.3,
                                                    "vif":  2.03
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  7.73,
                                                "residual":  15.97,
                                                "abs_error":  15.97,
                                                "pct_error":  67.37
                                            },
                                            {
                                                "rank":  2,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  37.87,
                                                "residual":  -15.97,
                                                "abs_error":  15.97,
                                                "pct_error":  72.92
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.51,
                                                "residual":  14.49,
                                                "abs_error":  14.49,
                                                "pct_error":  28.98
                                            },
                                            {
                                                "rank":  4,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.86,
                                                "residual":  11.14,
                                                "abs_error":  11.14,
                                                "pct_error":  22.28
                                            },
                                            {
                                                "rank":  5,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.65,
                                                "residual":  -10.45,
                                                "abs_error":  10.45,
                                                "pct_error":  145.1
                                            },
                                            {
                                                "rank":  6,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  39.64,
                                                "residual":  10.36,
                                                "abs_error":  10.36,
                                                "pct_error":  20.72
                                            },
                                            {
                                                "rank":  7,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  39.99,
                                                "residual":  10.01,
                                                "abs_error":  10.01,
                                                "pct_error":  20.01
                                            },
                                            {
                                                "rank":  8,
                                                "index":  31,
                                                "actual":  20,
                                                "predicted":  11.48,
                                                "residual":  8.52,
                                                "abs_error":  8.52,
                                                "pct_error":  42.61
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  35.7,
                                                "residual":  8.1,
                                                "abs_error":  8.1,
                                                "pct_error":  18.5
                                            },
                                            {
                                                "rank":  10,
                                                "index":  81,
                                                "actual":  19.3,
                                                "predicted":  11.28,
                                                "residual":  8.02,
                                                "abs_error":  8.02,
                                                "pct_error":  41.55
                                            }
                                        ]
                       },
                       {
                           "k":  5,
                           "features":  [
                                            "lstat",
                                            "rm",
                                            "ptratio",
                                            "dis",
                                            "crim"
                                        ],
                           "rmse":  5.17,
                           "mae":  3.99,
                           "r2":  0.7345,
                           "adj_r2":  0.7207,
                           "f_stat":  53.1,
                           "f_pvalue":  0.0001,
                           "coefficients":  [
                                                {
                                                    "feature":  "Intercept (b0)",
                                                    "coef":  19.4007,
                                                    "stderr":  4.582,
                                                    "tstat":  4.234,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  10.42,
                                                    "ci_upper":  28.38,
                                                    "vif":  null
                                                },
                                                {
                                                    "feature":  "lstat",
                                                    "coef":  -0.6137,
                                                    "stderr":  0.0535,
                                                    "tstat":  -11.474,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.72,
                                                    "ci_upper":  -0.51,
                                                    "vif":  1.37
                                                },
                                                {
                                                    "feature":  "rm",
                                                    "coef":  4.464,
                                                    "stderr":  0.4859,
                                                    "tstat":  9.186,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  3.51,
                                                    "ci_upper":  5.42,
                                                    "vif":  1.59
                                                },
                                                {
                                                    "feature":  "ptratio",
                                                    "coef":  -0.7814,
                                                    "stderr":  0.1311,
                                                    "tstat":  -5.961,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -1.04,
                                                    "ci_upper":  -0.52,
                                                    "vif":  1.81
                                                },
                                                {
                                                    "feature":  "dis",
                                                    "coef":  -0.6414,
                                                    "stderr":  0.1437,
                                                    "tstat":  -4.463,
                                                    "pvalue":  0.0001,
                                                    "ci_lower":  -0.92,
                                                    "ci_upper":  -0.36,
                                                    "vif":  2.03
                                                },
                                                {
                                                    "feature":  "crim",
                                                    "coef":  -0.0824,
                                                    "stderr":  0.0346,
                                                    "tstat":  -2.38,
                                                    "pvalue":  0.0045,
                                                    "ci_lower":  -0.15,
                                                    "ci_upper":  -0.01,
                                                    "vif":  2.25
                                                }
                                            ],
                           "outliers":  [
                                            {
                                                "rank":  1,
                                                "index":  50,
                                                "actual":  21.9,
                                                "predicted":  38.06,
                                                "residual":  -16.16,
                                                "abs_error":  16.16,
                                                "pct_error":  73.78
                                            },
                                            {
                                                "rank":  2,
                                                "index":  46,
                                                "actual":  23.7,
                                                "predicted":  8.57,
                                                "residual":  15.13,
                                                "abs_error":  15.13,
                                                "pct_error":  63.85
                                            },
                                            {
                                                "rank":  3,
                                                "index":  44,
                                                "actual":  50,
                                                "predicted":  35.66,
                                                "residual":  14.34,
                                                "abs_error":  14.34,
                                                "pct_error":  28.67
                                            },
                                            {
                                                "rank":  4,
                                                "index":  14,
                                                "actual":  50,
                                                "predicted":  38.73,
                                                "residual":  11.27,
                                                "abs_error":  11.27,
                                                "pct_error":  22.55
                                            },
                                            {
                                                "rank":  5,
                                                "index":  33,
                                                "actual":  50,
                                                "predicted":  39.56,
                                                "residual":  10.44,
                                                "abs_error":  10.44,
                                                "pct_error":  20.88
                                            },
                                            {
                                                "rank":  6,
                                                "index":  19,
                                                "actual":  7.2,
                                                "predicted":  17.28,
                                                "residual":  -10.08,
                                                "abs_error":  10.08,
                                                "pct_error":  140
                                            },
                                            {
                                                "rank":  7,
                                                "index":  47,
                                                "actual":  50,
                                                "predicted":  40.11,
                                                "residual":  9.89,
                                                "abs_error":  9.89,
                                                "pct_error":  19.77
                                            },
                                            {
                                                "rank":  8,
                                                "index":  68,
                                                "actual":  27.9,
                                                "predicted":  19.4,
                                                "residual":  8.5,
                                                "abs_error":  8.5,
                                                "pct_error":  30.47
                                            },
                                            {
                                                "rank":  9,
                                                "index":  83,
                                                "actual":  43.8,
                                                "predicted":  35.81,
                                                "residual":  7.99,
                                                "abs_error":  7.99,
                                                "pct_error":  18.25
                                            },
                                            {
                                                "rank":  10,
                                                "index":  31,
                                                "actual":  20,
                                                "predicted":  12.03,
                                                "residual":  7.97,
                                                "abs_error":  7.97,
                                                "pct_error":  39.84
                                            }
                                        ]
                       }
                   ],
    "RFE":  [
                {
                    "k":  1,
                    "features":  [
                                     "lstat"
                                 ],
                    "rmse":  6.89,
                    "mae":  5,
                    "r2":  0.529,
                    "adj_r2":  0.5242,
                    "f_stat":  112.3,
                    "f_pvalue":  0.0001,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (b0)",
                                             "coef":  34.0466,
                                             "stderr":  0.6042,
                                             "tstat":  56.353,
                                             "pvalue":  0.0001,
                                             "ci_lower":  32.86,
                                             "ci_upper":  35.23,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "lstat",
                                             "coef":  -0.9234,
                                             "stderr":  0.0418,
                                             "tstat":  -22.071,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -1.01,
                                             "ci_upper":  -0.84,
                                             "vif":  1.37
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  47,
                                         "actual":  50,
                                         "predicted":  27.18,
                                         "residual":  22.82,
                                         "abs_error":  22.82,
                                         "pct_error":  45.65
                                     },
                                     {
                                         "rank":  2,
                                         "index":  45,
                                         "actual":  48.8,
                                         "predicted":  28.59,
                                         "residual":  20.21,
                                         "abs_error":  20.21,
                                         "pct_error":  41.42
                                     },
                                     {
                                         "rank":  3,
                                         "index":  44,
                                         "actual":  50,
                                         "predicted":  29.94,
                                         "residual":  20.06,
                                         "abs_error":  20.06,
                                         "pct_error":  40.13
                                     },
                                     {
                                         "rank":  4,
                                         "index":  33,
                                         "actual":  50,
                                         "predicted":  30.63,
                                         "residual":  19.37,
                                         "abs_error":  19.37,
                                         "pct_error":  38.74
                                     },
                                     {
                                         "rank":  5,
                                         "index":  14,
                                         "actual":  50,
                                         "predicted":  31.39,
                                         "residual":  18.61,
                                         "abs_error":  18.61,
                                         "pct_error":  37.23
                                     },
                                     {
                                         "rank":  6,
                                         "index":  46,
                                         "actual":  23.7,
                                         "predicted":  6.76,
                                         "residual":  16.94,
                                         "abs_error":  16.94,
                                         "pct_error":  71.48
                                     },
                                     {
                                         "rank":  7,
                                         "index":  34,
                                         "actual":  43.1,
                                         "predicted":  27.34,
                                         "residual":  15.76,
                                         "abs_error":  15.76,
                                         "pct_error":  36.56
                                     },
                                     {
                                         "rank":  8,
                                         "index":  83,
                                         "actual":  43.8,
                                         "predicted":  30.75,
                                         "residual":  13.05,
                                         "abs_error":  13.05,
                                         "pct_error":  29.79
                                     },
                                     {
                                         "rank":  9,
                                         "index":  40,
                                         "actual":  41.3,
                                         "predicted":  29.81,
                                         "residual":  11.49,
                                         "abs_error":  11.49,
                                         "pct_error":  27.83
                                     },
                                     {
                                         "rank":  10,
                                         "index":  69,
                                         "actual":  41.7,
                                         "predicted":  31.77,
                                         "residual":  9.93,
                                         "abs_error":  9.93,
                                         "pct_error":  23.82
                                     }
                                 ]
                },
                {
                    "k":  2,
                    "features":  [
                                     "lstat",
                                     "rm"
                                 ],
                    "rmse":  5.97,
                    "mae":  4.74,
                    "r2":  0.6459,
                    "adj_r2":  0.6388,
                    "f_stat":  90.3,
                    "f_pvalue":  0.0001,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (b0)",
                                             "coef":  -0.9049,
                                             "stderr":  3.5989,
                                             "tstat":  -0.251,
                                             "pvalue":  0.0045,
                                             "ci_lower":  -7.96,
                                             "ci_upper":  6.15,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "lstat",
                                             "coef":  -0.6232,
                                             "stderr":  0.0485,
                                             "tstat":  -12.861,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.72,
                                             "ci_upper":  -0.53,
                                             "vif":  1.37
                                         },
                                         {
                                             "feature":  "rm",
                                             "coef":  4.9839,
                                             "stderr":  0.5073,
                                             "tstat":  9.824,
                                             "pvalue":  0.0001,
                                             "ci_lower":  3.99,
                                             "ci_upper":  5.98,
                                             "vif":  1.59
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  50,
                                         "actual":  21.9,
                                         "predicted":  39.56,
                                         "residual":  -17.66,
                                         "abs_error":  17.66,
                                         "pct_error":  80.63
                                     },
                                     {
                                         "rank":  2,
                                         "index":  46,
                                         "actual":  23.7,
                                         "predicted":  7.65,
                                         "residual":  16.05,
                                         "abs_error":  16.05,
                                         "pct_error":  67.71
                                     },
                                     {
                                         "rank":  3,
                                         "index":  44,
                                         "actual":  50,
                                         "predicted":  35.35,
                                         "residual":  14.65,
                                         "abs_error":  14.65,
                                         "pct_error":  29.3
                                     },
                                     {
                                         "rank":  4,
                                         "index":  47,
                                         "actual":  50,
                                         "predicted":  35.81,
                                         "residual":  14.19,
                                         "abs_error":  14.19,
                                         "pct_error":  28.38
                                     },
                                     {
                                         "rank":  5,
                                         "index":  33,
                                         "actual":  50,
                                         "predicted":  36.31,
                                         "residual":  13.69,
                                         "abs_error":  13.69,
                                         "pct_error":  27.39
                                     },
                                     {
                                         "rank":  6,
                                         "index":  14,
                                         "actual":  50,
                                         "predicted":  37.34,
                                         "residual":  12.66,
                                         "abs_error":  12.66,
                                         "pct_error":  25.32
                                     },
                                     {
                                         "rank":  7,
                                         "index":  45,
                                         "actual":  48.8,
                                         "predicted":  37.27,
                                         "residual":  11.53,
                                         "abs_error":  11.53,
                                         "pct_error":  23.63
                                     },
                                     {
                                         "rank":  8,
                                         "index":  34,
                                         "actual":  43.1,
                                         "predicted":  32.05,
                                         "residual":  11.05,
                                         "abs_error":  11.05,
                                         "pct_error":  25.64
                                     },
                                     {
                                         "rank":  9,
                                         "index":  19,
                                         "actual":  7.2,
                                         "predicted":  18.04,
                                         "residual":  -10.84,
                                         "abs_error":  10.84,
                                         "pct_error":  150.61
                                     },
                                     {
                                         "rank":  10,
                                         "index":  40,
                                         "actual":  41.3,
                                         "predicted":  30.84,
                                         "residual":  10.46,
                                         "abs_error":  10.46,
                                         "pct_error":  25.33
                                     }
                                 ]
                },
                {
                    "k":  3,
                    "features":  [
                                     "lstat",
                                     "rm",
                                     "ptratio"
                                 ],
                    "rmse":  5.32,
                    "mae":  4.17,
                    "r2":  0.7192,
                    "adj_r2":  0.7106,
                    "f_stat":  83.6,
                    "f_pvalue":  0.0001,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (b0)",
                                             "coef":  15.0906,
                                             "stderr":  4.4383,
                                             "tstat":  3.4,
                                             "pvalue":  0.0045,
                                             "ci_lower":  6.39,
                                             "ci_upper":  23.79,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "lstat",
                                             "coef":  -0.5649,
                                             "stderr":  0.0477,
                                             "tstat":  -11.839,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.66,
                                             "ci_upper":  -0.47,
                                             "vif":  1.37
                                         },
                                         {
                                             "feature":  "rm",
                                             "coef":  4.5547,
                                             "stderr":  0.4938,
                                             "tstat":  9.225,
                                             "pvalue":  0.0001,
                                             "ci_lower":  3.59,
                                             "ci_upper":  5.52,
                                             "vif":  1.59
                                         },
                                         {
                                             "feature":  "ptratio",
                                             "coef":  -0.762,
                                             "stderr":  0.1323,
                                             "tstat":  -5.761,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -1.02,
                                             "ci_upper":  -0.5,
                                             "vif":  1.81
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  44,
                                         "actual":  50,
                                         "predicted":  34.68,
                                         "residual":  15.32,
                                         "abs_error":  15.32,
                                         "pct_error":  30.64
                                     },
                                     {
                                         "rank":  2,
                                         "index":  46,
                                         "actual":  23.7,
                                         "predicted":  8.88,
                                         "residual":  14.82,
                                         "abs_error":  14.82,
                                         "pct_error":  62.55
                                     },
                                     {
                                         "rank":  3,
                                         "index":  50,
                                         "actual":  21.9,
                                         "predicted":  36.7,
                                         "residual":  -14.8,
                                         "abs_error":  14.8,
                                         "pct_error":  67.58
                                     },
                                     {
                                         "rank":  4,
                                         "index":  33,
                                         "actual":  50,
                                         "predicted":  37.91,
                                         "residual":  12.09,
                                         "abs_error":  12.09,
                                         "pct_error":  24.17
                                     },
                                     {
                                         "rank":  5,
                                         "index":  47,
                                         "actual":  50,
                                         "predicted":  38.77,
                                         "residual":  11.23,
                                         "abs_error":  11.23,
                                         "pct_error":  22.46
                                     },
                                     {
                                         "rank":  6,
                                         "index":  14,
                                         "actual":  50,
                                         "predicted":  38.85,
                                         "residual":  11.15,
                                         "abs_error":  11.15,
                                         "pct_error":  22.29
                                     },
                                     {
                                         "rank":  7,
                                         "index":  19,
                                         "actual":  7.2,
                                         "predicted":  17.11,
                                         "residual":  -9.91,
                                         "abs_error":  9.91,
                                         "pct_error":  137.65
                                     },
                                     {
                                         "rank":  8,
                                         "index":  68,
                                         "actual":  27.9,
                                         "predicted":  18.39,
                                         "residual":  9.51,
                                         "abs_error":  9.51,
                                         "pct_error":  34.09
                                     },
                                     {
                                         "rank":  9,
                                         "index":  83,
                                         "actual":  43.8,
                                         "predicted":  34.98,
                                         "residual":  8.82,
                                         "abs_error":  8.82,
                                         "pct_error":  20.15
                                     },
                                     {
                                         "rank":  10,
                                         "index":  45,
                                         "actual":  48.8,
                                         "predicted":  40.1,
                                         "residual":  8.7,
                                         "abs_error":  8.7,
                                         "pct_error":  17.83
                                     }
                                 ]
                },
                {
                    "k":  4,
                    "features":  [
                                     "lstat",
                                     "rm",
                                     "ptratio",
                                     "dis"
                                 ],
                    "rmse":  5.25,
                    "mae":  4.07,
                    "r2":  0.7261,
                    "adj_r2":  0.7148,
                    "f_stat":  64.3,
                    "f_pvalue":  0.0001,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (b0)",
                                             "coef":  20.7594,
                                             "stderr":  4.5727,
                                             "tstat":  4.54,
                                             "pvalue":  0.0001,
                                             "ci_lower":  11.8,
                                             "ci_upper":  29.72,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "lstat",
                                             "coef":  -0.6512,
                                             "stderr":  0.0514,
                                             "tstat":  -12.667,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.75,
                                             "ci_upper":  -0.55,
                                             "vif":  1.37
                                         },
                                         {
                                             "feature":  "rm",
                                             "coef":  4.3603,
                                             "stderr":  0.4868,
                                             "tstat":  8.957,
                                             "pvalue":  0.0001,
                                             "ci_lower":  3.41,
                                             "ci_upper":  5.31,
                                             "vif":  1.59
                                         },
                                         {
                                             "feature":  "ptratio",
                                             "coef":  -0.8233,
                                             "stderr":  0.1306,
                                             "tstat":  -6.302,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -1.08,
                                             "ci_upper":  -0.57,
                                             "vif":  1.81
                                         },
                                         {
                                             "feature":  "dis",
                                             "coef":  -0.5767,
                                             "stderr":  0.142,
                                             "tstat":  -4.063,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.85,
                                             "ci_upper":  -0.3,
                                             "vif":  2.03
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  46,
                                         "actual":  23.7,
                                         "predicted":  7.73,
                                         "residual":  15.97,
                                         "abs_error":  15.97,
                                         "pct_error":  67.37
                                     },
                                     {
                                         "rank":  2,
                                         "index":  50,
                                         "actual":  21.9,
                                         "predicted":  37.87,
                                         "residual":  -15.97,
                                         "abs_error":  15.97,
                                         "pct_error":  72.92
                                     },
                                     {
                                         "rank":  3,
                                         "index":  44,
                                         "actual":  50,
                                         "predicted":  35.51,
                                         "residual":  14.49,
                                         "abs_error":  14.49,
                                         "pct_error":  28.98
                                     },
                                     {
                                         "rank":  4,
                                         "index":  14,
                                         "actual":  50,
                                         "predicted":  38.86,
                                         "residual":  11.14,
                                         "abs_error":  11.14,
                                         "pct_error":  22.28
                                     },
                                     {
                                         "rank":  5,
                                         "index":  19,
                                         "actual":  7.2,
                                         "predicted":  17.65,
                                         "residual":  -10.45,
                                         "abs_error":  10.45,
                                         "pct_error":  145.1
                                     },
                                     {
                                         "rank":  6,
                                         "index":  33,
                                         "actual":  50,
                                         "predicted":  39.64,
                                         "residual":  10.36,
                                         "abs_error":  10.36,
                                         "pct_error":  20.72
                                     },
                                     {
                                         "rank":  7,
                                         "index":  47,
                                         "actual":  50,
                                         "predicted":  39.99,
                                         "residual":  10.01,
                                         "abs_error":  10.01,
                                         "pct_error":  20.01
                                     },
                                     {
                                         "rank":  8,
                                         "index":  31,
                                         "actual":  20,
                                         "predicted":  11.48,
                                         "residual":  8.52,
                                         "abs_error":  8.52,
                                         "pct_error":  42.61
                                     },
                                     {
                                         "rank":  9,
                                         "index":  83,
                                         "actual":  43.8,
                                         "predicted":  35.7,
                                         "residual":  8.1,
                                         "abs_error":  8.1,
                                         "pct_error":  18.5
                                     },
                                     {
                                         "rank":  10,
                                         "index":  81,
                                         "actual":  19.3,
                                         "predicted":  11.28,
                                         "residual":  8.02,
                                         "abs_error":  8.02,
                                         "pct_error":  41.55
                                     }
                                 ]
                },
                {
                    "k":  5,
                    "features":  [
                                     "lstat",
                                     "rm",
                                     "ptratio",
                                     "dis",
                                     "crim"
                                 ],
                    "rmse":  5.17,
                    "mae":  3.99,
                    "r2":  0.7345,
                    "adj_r2":  0.7207,
                    "f_stat":  53.1,
                    "f_pvalue":  0.0001,
                    "coefficients":  [
                                         {
                                             "feature":  "Intercept (b0)",
                                             "coef":  19.4007,
                                             "stderr":  4.582,
                                             "tstat":  4.234,
                                             "pvalue":  0.0001,
                                             "ci_lower":  10.42,
                                             "ci_upper":  28.38,
                                             "vif":  null
                                         },
                                         {
                                             "feature":  "lstat",
                                             "coef":  -0.6137,
                                             "stderr":  0.0535,
                                             "tstat":  -11.474,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.72,
                                             "ci_upper":  -0.51,
                                             "vif":  1.37
                                         },
                                         {
                                             "feature":  "rm",
                                             "coef":  4.464,
                                             "stderr":  0.4859,
                                             "tstat":  9.186,
                                             "pvalue":  0.0001,
                                             "ci_lower":  3.51,
                                             "ci_upper":  5.42,
                                             "vif":  1.59
                                         },
                                         {
                                             "feature":  "ptratio",
                                             "coef":  -0.7814,
                                             "stderr":  0.1311,
                                             "tstat":  -5.961,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -1.04,
                                             "ci_upper":  -0.52,
                                             "vif":  1.81
                                         },
                                         {
                                             "feature":  "dis",
                                             "coef":  -0.6414,
                                             "stderr":  0.1437,
                                             "tstat":  -4.463,
                                             "pvalue":  0.0001,
                                             "ci_lower":  -0.92,
                                             "ci_upper":  -0.36,
                                             "vif":  2.03
                                         },
                                         {
                                             "feature":  "crim",
                                             "coef":  -0.0824,
                                             "stderr":  0.0346,
                                             "tstat":  -2.38,
                                             "pvalue":  0.0045,
                                             "ci_lower":  -0.15,
                                             "ci_upper":  -0.01,
                                             "vif":  2.25
                                         }
                                     ],
                    "outliers":  [
                                     {
                                         "rank":  1,
                                         "index":  50,
                                         "actual":  21.9,
                                         "predicted":  38.06,
                                         "residual":  -16.16,
                                         "abs_error":  16.16,
                                         "pct_error":  73.78
                                     },
                                     {
                                         "rank":  2,
                                         "index":  46,
                                         "actual":  23.7,
                                         "predicted":  8.57,
                                         "residual":  15.13,
                                         "abs_error":  15.13,
                                         "pct_error":  63.85
                                     },
                                     {
                                         "rank":  3,
                                         "index":  44,
                                         "actual":  50,
                                         "predicted":  35.66,
                                         "residual":  14.34,
                                         "abs_error":  14.34,
                                         "pct_error":  28.67
                                     },
                                     {
                                         "rank":  4,
                                         "index":  14,
                                         "actual":  50,
                                         "predicted":  38.73,
                                         "residual":  11.27,
                                         "abs_error":  11.27,
                                         "pct_error":  22.55
                                     },
                                     {
                                         "rank":  5,
                                         "index":  33,
                                         "actual":  50,
                                         "predicted":  39.56,
                                         "residual":  10.44,
                                         "abs_error":  10.44,
                                         "pct_error":  20.88
                                     },
                                     {
                                         "rank":  6,
                                         "index":  19,
                                         "actual":  7.2,
                                         "predicted":  17.28,
                                         "residual":  -10.08,
                                         "abs_error":  10.08,
                                         "pct_error":  140
                                     },
                                     {
                                         "rank":  7,
                                         "index":  47,
                                         "actual":  50,
                                         "predicted":  40.11,
                                         "residual":  9.89,
                                         "abs_error":  9.89,
                                         "pct_error":  19.77
                                     },
                                     {
                                         "rank":  8,
                                         "index":  68,
                                         "actual":  27.9,
                                         "predicted":  19.4,
                                         "residual":  8.5,
                                         "abs_error":  8.5,
                                         "pct_error":  30.47
                                     },
                                     {
                                         "rank":  9,
                                         "index":  83,
                                         "actual":  43.8,
                                         "predicted":  35.81,
                                         "residual":  7.99,
                                         "abs_error":  7.99,
                                         "pct_error":  18.25
                                     },
                                     {
                                         "rank":  10,
                                         "index":  31,
                                         "actual":  20,
                                         "predicted":  12.03,
                                         "residual":  7.97,
                                         "abs_error":  7.97,
                                         "pct_error":  39.84
                                     }
                                 ]
                }
            ],
    "Forward SFS":  [
                        {
                            "k":  1,
                            "features":  [
                                             "lstat"
                                         ],
                            "rmse":  6.89,
                            "mae":  5,
                            "r2":  0.529,
                            "adj_r2":  0.5242,
                            "f_stat":  112.3,
                            "f_pvalue":  0.0001,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (b0)",
                                                     "coef":  34.0466,
                                                     "stderr":  0.6042,
                                                     "tstat":  56.353,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  32.86,
                                                     "ci_upper":  35.23,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "lstat",
                                                     "coef":  -0.9234,
                                                     "stderr":  0.0418,
                                                     "tstat":  -22.071,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -1.01,
                                                     "ci_upper":  -0.84,
                                                     "vif":  1.37
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  47,
                                                 "actual":  50,
                                                 "predicted":  27.18,
                                                 "residual":  22.82,
                                                 "abs_error":  22.82,
                                                 "pct_error":  45.65
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  45,
                                                 "actual":  48.8,
                                                 "predicted":  28.59,
                                                 "residual":  20.21,
                                                 "abs_error":  20.21,
                                                 "pct_error":  41.42
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  44,
                                                 "actual":  50,
                                                 "predicted":  29.94,
                                                 "residual":  20.06,
                                                 "abs_error":  20.06,
                                                 "pct_error":  40.13
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  33,
                                                 "actual":  50,
                                                 "predicted":  30.63,
                                                 "residual":  19.37,
                                                 "abs_error":  19.37,
                                                 "pct_error":  38.74
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  14,
                                                 "actual":  50,
                                                 "predicted":  31.39,
                                                 "residual":  18.61,
                                                 "abs_error":  18.61,
                                                 "pct_error":  37.23
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  46,
                                                 "actual":  23.7,
                                                 "predicted":  6.76,
                                                 "residual":  16.94,
                                                 "abs_error":  16.94,
                                                 "pct_error":  71.48
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  34,
                                                 "actual":  43.1,
                                                 "predicted":  27.34,
                                                 "residual":  15.76,
                                                 "abs_error":  15.76,
                                                 "pct_error":  36.56
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  83,
                                                 "actual":  43.8,
                                                 "predicted":  30.75,
                                                 "residual":  13.05,
                                                 "abs_error":  13.05,
                                                 "pct_error":  29.79
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  40,
                                                 "actual":  41.3,
                                                 "predicted":  29.81,
                                                 "residual":  11.49,
                                                 "abs_error":  11.49,
                                                 "pct_error":  27.83
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  69,
                                                 "actual":  41.7,
                                                 "predicted":  31.77,
                                                 "residual":  9.93,
                                                 "abs_error":  9.93,
                                                 "pct_error":  23.82
                                             }
                                         ]
                        },
                        {
                            "k":  2,
                            "features":  [
                                             "lstat",
                                             "rm"
                                         ],
                            "rmse":  5.97,
                            "mae":  4.74,
                            "r2":  0.6459,
                            "adj_r2":  0.6388,
                            "f_stat":  90.3,
                            "f_pvalue":  0.0001,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (b0)",
                                                     "coef":  -0.9049,
                                                     "stderr":  3.5989,
                                                     "tstat":  -0.251,
                                                     "pvalue":  0.0045,
                                                     "ci_lower":  -7.96,
                                                     "ci_upper":  6.15,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "lstat",
                                                     "coef":  -0.6232,
                                                     "stderr":  0.0485,
                                                     "tstat":  -12.861,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.72,
                                                     "ci_upper":  -0.53,
                                                     "vif":  1.37
                                                 },
                                                 {
                                                     "feature":  "rm",
                                                     "coef":  4.9839,
                                                     "stderr":  0.5073,
                                                     "tstat":  9.824,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  3.99,
                                                     "ci_upper":  5.98,
                                                     "vif":  1.59
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  50,
                                                 "actual":  21.9,
                                                 "predicted":  39.56,
                                                 "residual":  -17.66,
                                                 "abs_error":  17.66,
                                                 "pct_error":  80.63
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  46,
                                                 "actual":  23.7,
                                                 "predicted":  7.65,
                                                 "residual":  16.05,
                                                 "abs_error":  16.05,
                                                 "pct_error":  67.71
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  44,
                                                 "actual":  50,
                                                 "predicted":  35.35,
                                                 "residual":  14.65,
                                                 "abs_error":  14.65,
                                                 "pct_error":  29.3
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  47,
                                                 "actual":  50,
                                                 "predicted":  35.81,
                                                 "residual":  14.19,
                                                 "abs_error":  14.19,
                                                 "pct_error":  28.38
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  33,
                                                 "actual":  50,
                                                 "predicted":  36.31,
                                                 "residual":  13.69,
                                                 "abs_error":  13.69,
                                                 "pct_error":  27.39
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  14,
                                                 "actual":  50,
                                                 "predicted":  37.34,
                                                 "residual":  12.66,
                                                 "abs_error":  12.66,
                                                 "pct_error":  25.32
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  45,
                                                 "actual":  48.8,
                                                 "predicted":  37.27,
                                                 "residual":  11.53,
                                                 "abs_error":  11.53,
                                                 "pct_error":  23.63
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  34,
                                                 "actual":  43.1,
                                                 "predicted":  32.05,
                                                 "residual":  11.05,
                                                 "abs_error":  11.05,
                                                 "pct_error":  25.64
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  19,
                                                 "actual":  7.2,
                                                 "predicted":  18.04,
                                                 "residual":  -10.84,
                                                 "abs_error":  10.84,
                                                 "pct_error":  150.61
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  40,
                                                 "actual":  41.3,
                                                 "predicted":  30.84,
                                                 "residual":  10.46,
                                                 "abs_error":  10.46,
                                                 "pct_error":  25.33
                                             }
                                         ]
                        },
                        {
                            "k":  3,
                            "features":  [
                                             "lstat",
                                             "rm",
                                             "ptratio"
                                         ],
                            "rmse":  5.32,
                            "mae":  4.17,
                            "r2":  0.7192,
                            "adj_r2":  0.7106,
                            "f_stat":  83.6,
                            "f_pvalue":  0.0001,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (b0)",
                                                     "coef":  15.0906,
                                                     "stderr":  4.4383,
                                                     "tstat":  3.4,
                                                     "pvalue":  0.0045,
                                                     "ci_lower":  6.39,
                                                     "ci_upper":  23.79,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "lstat",
                                                     "coef":  -0.5649,
                                                     "stderr":  0.0477,
                                                     "tstat":  -11.839,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.66,
                                                     "ci_upper":  -0.47,
                                                     "vif":  1.37
                                                 },
                                                 {
                                                     "feature":  "rm",
                                                     "coef":  4.5547,
                                                     "stderr":  0.4938,
                                                     "tstat":  9.225,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  3.59,
                                                     "ci_upper":  5.52,
                                                     "vif":  1.59
                                                 },
                                                 {
                                                     "feature":  "ptratio",
                                                     "coef":  -0.762,
                                                     "stderr":  0.1323,
                                                     "tstat":  -5.761,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -1.02,
                                                     "ci_upper":  -0.5,
                                                     "vif":  1.81
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  44,
                                                 "actual":  50,
                                                 "predicted":  34.68,
                                                 "residual":  15.32,
                                                 "abs_error":  15.32,
                                                 "pct_error":  30.64
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  46,
                                                 "actual":  23.7,
                                                 "predicted":  8.88,
                                                 "residual":  14.82,
                                                 "abs_error":  14.82,
                                                 "pct_error":  62.55
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  50,
                                                 "actual":  21.9,
                                                 "predicted":  36.7,
                                                 "residual":  -14.8,
                                                 "abs_error":  14.8,
                                                 "pct_error":  67.58
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  33,
                                                 "actual":  50,
                                                 "predicted":  37.91,
                                                 "residual":  12.09,
                                                 "abs_error":  12.09,
                                                 "pct_error":  24.17
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  47,
                                                 "actual":  50,
                                                 "predicted":  38.77,
                                                 "residual":  11.23,
                                                 "abs_error":  11.23,
                                                 "pct_error":  22.46
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  14,
                                                 "actual":  50,
                                                 "predicted":  38.85,
                                                 "residual":  11.15,
                                                 "abs_error":  11.15,
                                                 "pct_error":  22.29
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  19,
                                                 "actual":  7.2,
                                                 "predicted":  17.11,
                                                 "residual":  -9.91,
                                                 "abs_error":  9.91,
                                                 "pct_error":  137.65
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  68,
                                                 "actual":  27.9,
                                                 "predicted":  18.39,
                                                 "residual":  9.51,
                                                 "abs_error":  9.51,
                                                 "pct_error":  34.09
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  83,
                                                 "actual":  43.8,
                                                 "predicted":  34.98,
                                                 "residual":  8.82,
                                                 "abs_error":  8.82,
                                                 "pct_error":  20.15
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  45,
                                                 "actual":  48.8,
                                                 "predicted":  40.1,
                                                 "residual":  8.7,
                                                 "abs_error":  8.7,
                                                 "pct_error":  17.83
                                             }
                                         ]
                        },
                        {
                            "k":  4,
                            "features":  [
                                             "lstat",
                                             "rm",
                                             "ptratio",
                                             "dis"
                                         ],
                            "rmse":  5.25,
                            "mae":  4.07,
                            "r2":  0.7261,
                            "adj_r2":  0.7148,
                            "f_stat":  64.3,
                            "f_pvalue":  0.0001,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (b0)",
                                                     "coef":  20.7594,
                                                     "stderr":  4.5727,
                                                     "tstat":  4.54,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  11.8,
                                                     "ci_upper":  29.72,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "lstat",
                                                     "coef":  -0.6512,
                                                     "stderr":  0.0514,
                                                     "tstat":  -12.667,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.75,
                                                     "ci_upper":  -0.55,
                                                     "vif":  1.37
                                                 },
                                                 {
                                                     "feature":  "rm",
                                                     "coef":  4.3603,
                                                     "stderr":  0.4868,
                                                     "tstat":  8.957,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  3.41,
                                                     "ci_upper":  5.31,
                                                     "vif":  1.59
                                                 },
                                                 {
                                                     "feature":  "ptratio",
                                                     "coef":  -0.8233,
                                                     "stderr":  0.1306,
                                                     "tstat":  -6.302,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -1.08,
                                                     "ci_upper":  -0.57,
                                                     "vif":  1.81
                                                 },
                                                 {
                                                     "feature":  "dis",
                                                     "coef":  -0.5767,
                                                     "stderr":  0.142,
                                                     "tstat":  -4.063,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.85,
                                                     "ci_upper":  -0.3,
                                                     "vif":  2.03
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  46,
                                                 "actual":  23.7,
                                                 "predicted":  7.73,
                                                 "residual":  15.97,
                                                 "abs_error":  15.97,
                                                 "pct_error":  67.37
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  50,
                                                 "actual":  21.9,
                                                 "predicted":  37.87,
                                                 "residual":  -15.97,
                                                 "abs_error":  15.97,
                                                 "pct_error":  72.92
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  44,
                                                 "actual":  50,
                                                 "predicted":  35.51,
                                                 "residual":  14.49,
                                                 "abs_error":  14.49,
                                                 "pct_error":  28.98
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  14,
                                                 "actual":  50,
                                                 "predicted":  38.86,
                                                 "residual":  11.14,
                                                 "abs_error":  11.14,
                                                 "pct_error":  22.28
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  19,
                                                 "actual":  7.2,
                                                 "predicted":  17.65,
                                                 "residual":  -10.45,
                                                 "abs_error":  10.45,
                                                 "pct_error":  145.1
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  33,
                                                 "actual":  50,
                                                 "predicted":  39.64,
                                                 "residual":  10.36,
                                                 "abs_error":  10.36,
                                                 "pct_error":  20.72
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  47,
                                                 "actual":  50,
                                                 "predicted":  39.99,
                                                 "residual":  10.01,
                                                 "abs_error":  10.01,
                                                 "pct_error":  20.01
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  31,
                                                 "actual":  20,
                                                 "predicted":  11.48,
                                                 "residual":  8.52,
                                                 "abs_error":  8.52,
                                                 "pct_error":  42.61
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  83,
                                                 "actual":  43.8,
                                                 "predicted":  35.7,
                                                 "residual":  8.1,
                                                 "abs_error":  8.1,
                                                 "pct_error":  18.5
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  81,
                                                 "actual":  19.3,
                                                 "predicted":  11.28,
                                                 "residual":  8.02,
                                                 "abs_error":  8.02,
                                                 "pct_error":  41.55
                                             }
                                         ]
                        },
                        {
                            "k":  5,
                            "features":  [
                                             "lstat",
                                             "rm",
                                             "ptratio",
                                             "dis",
                                             "crim"
                                         ],
                            "rmse":  5.17,
                            "mae":  3.99,
                            "r2":  0.7345,
                            "adj_r2":  0.7207,
                            "f_stat":  53.1,
                            "f_pvalue":  0.0001,
                            "coefficients":  [
                                                 {
                                                     "feature":  "Intercept (b0)",
                                                     "coef":  19.4007,
                                                     "stderr":  4.582,
                                                     "tstat":  4.234,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  10.42,
                                                     "ci_upper":  28.38,
                                                     "vif":  null
                                                 },
                                                 {
                                                     "feature":  "lstat",
                                                     "coef":  -0.6137,
                                                     "stderr":  0.0535,
                                                     "tstat":  -11.474,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.72,
                                                     "ci_upper":  -0.51,
                                                     "vif":  1.37
                                                 },
                                                 {
                                                     "feature":  "rm",
                                                     "coef":  4.464,
                                                     "stderr":  0.4859,
                                                     "tstat":  9.186,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  3.51,
                                                     "ci_upper":  5.42,
                                                     "vif":  1.59
                                                 },
                                                 {
                                                     "feature":  "ptratio",
                                                     "coef":  -0.7814,
                                                     "stderr":  0.1311,
                                                     "tstat":  -5.961,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -1.04,
                                                     "ci_upper":  -0.52,
                                                     "vif":  1.81
                                                 },
                                                 {
                                                     "feature":  "dis",
                                                     "coef":  -0.6414,
                                                     "stderr":  0.1437,
                                                     "tstat":  -4.463,
                                                     "pvalue":  0.0001,
                                                     "ci_lower":  -0.92,
                                                     "ci_upper":  -0.36,
                                                     "vif":  2.03
                                                 },
                                                 {
                                                     "feature":  "crim",
                                                     "coef":  -0.0824,
                                                     "stderr":  0.0346,
                                                     "tstat":  -2.38,
                                                     "pvalue":  0.0045,
                                                     "ci_lower":  -0.15,
                                                     "ci_upper":  -0.01,
                                                     "vif":  2.25
                                                 }
                                             ],
                            "outliers":  [
                                             {
                                                 "rank":  1,
                                                 "index":  50,
                                                 "actual":  21.9,
                                                 "predicted":  38.06,
                                                 "residual":  -16.16,
                                                 "abs_error":  16.16,
                                                 "pct_error":  73.78
                                             },
                                             {
                                                 "rank":  2,
                                                 "index":  46,
                                                 "actual":  23.7,
                                                 "predicted":  8.57,
                                                 "residual":  15.13,
                                                 "abs_error":  15.13,
                                                 "pct_error":  63.85
                                             },
                                             {
                                                 "rank":  3,
                                                 "index":  44,
                                                 "actual":  50,
                                                 "predicted":  35.66,
                                                 "residual":  14.34,
                                                 "abs_error":  14.34,
                                                 "pct_error":  28.67
                                             },
                                             {
                                                 "rank":  4,
                                                 "index":  14,
                                                 "actual":  50,
                                                 "predicted":  38.73,
                                                 "residual":  11.27,
                                                 "abs_error":  11.27,
                                                 "pct_error":  22.55
                                             },
                                             {
                                                 "rank":  5,
                                                 "index":  33,
                                                 "actual":  50,
                                                 "predicted":  39.56,
                                                 "residual":  10.44,
                                                 "abs_error":  10.44,
                                                 "pct_error":  20.88
                                             },
                                             {
                                                 "rank":  6,
                                                 "index":  19,
                                                 "actual":  7.2,
                                                 "predicted":  17.28,
                                                 "residual":  -10.08,
                                                 "abs_error":  10.08,
                                                 "pct_error":  140
                                             },
                                             {
                                                 "rank":  7,
                                                 "index":  47,
                                                 "actual":  50,
                                                 "predicted":  40.11,
                                                 "residual":  9.89,
                                                 "abs_error":  9.89,
                                                 "pct_error":  19.77
                                             },
                                             {
                                                 "rank":  8,
                                                 "index":  68,
                                                 "actual":  27.9,
                                                 "predicted":  19.4,
                                                 "residual":  8.5,
                                                 "abs_error":  8.5,
                                                 "pct_error":  30.47
                                             },
                                             {
                                                 "rank":  9,
                                                 "index":  83,
                                                 "actual":  43.8,
                                                 "predicted":  35.81,
                                                 "residual":  7.99,
                                                 "abs_error":  7.99,
                                                 "pct_error":  18.25
                                             },
                                             {
                                                 "rank":  10,
                                                 "index":  31,
                                                 "actual":  20,
                                                 "predicted":  12.03,
                                                 "residual":  7.97,
                                                 "abs_error":  7.97,
                                                 "pct_error":  39.84
                                             }
                                         ]
                        }
                    ]
};
