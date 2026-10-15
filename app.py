import os
import json
from flask import Flask, render_template, request, jsonify, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DATA_PATH = os.path.join(BASE_DIR, "model_data.json")

try:
    with open(MODEL_DATA_PATH, "r", encoding="utf-8") as f:
        MODEL_DATA = json.load(f)
except Exception as e:
    print(f"Warning: Could not load model_data.json: {e}")
    MODEL_DATA = {}


@app.route("/")
def index():
    """Serve the main interactive regression explorer dashboard."""
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/api/models", methods=["GET"])
def get_models():
    """Return the complete 5-algorithm feature selection evaluation data."""
    algo = request.args.get("algo")
    if algo and algo in MODEL_DATA:
        return jsonify({algo: MODEL_DATA[algo]})
    return jsonify(MODEL_DATA)


@app.route("/api/predict", methods=["POST"])
def predict():
    """
    Live prediction endpoint: Calculates startup profit based on user inputs
    and the selected algorithm/k-feature subset.
    """
    try:
        data = request.get_json(force=True) or {}
        problem = data.get("problem", "startups")
        algo = data.get("algo", "Lasso")
        k = int(data.get("k", 2))

        if algo not in MODEL_DATA or k < 1 or k > len(MODEL_DATA[algo]):
            return jsonify({"error": "Invalid algorithm or k parameter"}), 400

        model_spec = MODEL_DATA[algo][k - 1]
        coefficients = model_spec["coefficients"]

        if problem == "insurance":
            age = float(data.get("age", 35))
            bmi = float(data.get("bmi", 28.5))
            children = float(data.get("children", 1))
            smoker = data.get("smoker", "no")
            region = data.get("region", "northeast")

            pred = 0.0
            breakdown = []
            for c in coefficients:
                fn = c["feature"]
                coef = c["coef"]
                if "Intercept" in fn:
                    pred += coef
                    breakdown.append({"feature": "Intercept", "contribution": coef})
                elif fn == "age":
                    contrib = coef * age
                    pred += contrib
                    breakdown.append({"feature": "Age", "contribution": contrib})
                elif fn == "bmi":
                    contrib = coef * bmi
                    pred += contrib
                    breakdown.append({"feature": "BMI", "contribution": contrib})
                elif fn == "children":
                    contrib = coef * children
                    pred += contrib
                    breakdown.append({"feature": "Children", "contribution": contrib})
                elif fn == "smoker_yes":
                    val = 1.0 if smoker == "yes" else 0.0
                    contrib = coef * val
                    pred += contrib
                    breakdown.append({"feature": "Smoker", "contribution": contrib})
                elif fn == "region_southeast":
                    val = 1.0 if region == "southeast" else 0.0
                    contrib = coef * val
                    pred += contrib
                    breakdown.append({"feature": "Region SE", "contribution": contrib})

            return jsonify({
                "problem": "insurance",
                "predicted_charges": round(pred, 2),
                "breakdown": breakdown
            })

        else:
            rd_spend = float(data.get("rd_spend", 100000))
            marketing_spend = float(data.get("marketing_spend", 150000))
            admin_spend = float(data.get("admin_spend", 120000))
            state = data.get("state", "California")

            predicted_profit = 0.0
            breakdown = []

            for c in coefficients:
                feat_name = c["feature"]
                coef_val = c["coef"]

                if "Intercept" in feat_name:
                    predicted_profit += coef_val
                    breakdown.append({
                        "feature": "Intercept",
                        "value": 1.0,
                        "coef": coef_val,
                        "contribution": coef_val
                    })
                elif feat_name == "R&D Spend":
                    contrib = coef_val * rd_spend
                    predicted_profit += contrib
                    breakdown.append({
                        "feature": "R&D Spend",
                        "value": rd_spend,
                        "coef": coef_val,
                        "contribution": contrib
                    })
                elif feat_name == "Marketing Spend":
                    contrib = coef_val * marketing_spend
                    predicted_profit += contrib
                    breakdown.append({
                        "feature": "Marketing Spend",
                        "value": marketing_spend,
                        "coef": coef_val,
                        "contribution": contrib
                    })
                elif feat_name == "Administration":
                    contrib = coef_val * admin_spend
                    predicted_profit += contrib
                    breakdown.append({
                        "feature": "Administration",
                        "value": admin_spend,
                        "coef": coef_val,
                        "contribution": contrib
                    })
                elif feat_name == "State_Florida":
                    val = 1.0 if state == "Florida" else 0.0
                    contrib = coef_val * val
                    predicted_profit += contrib
                    breakdown.append({
                        "feature": "State_Florida",
                        "value": val,
                        "coef": coef_val,
                        "contribution": contrib
                    })
                elif feat_name == "State_New York":
                    val = 1.0 if state == "New York" else 0.0
                    contrib = coef_val * val
                    predicted_profit += contrib
                    breakdown.append({
                        "feature": "State_New York",
                        "value": val,
                        "coef": coef_val,
                        "contribution": contrib
                    })

            return jsonify({
                "problem": "startups",
                "algo": algo,
                "k": k,
                "predicted_profit": round(predicted_profit, 2),
                "breakdown": breakdown
            })

    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/summary", methods=["GET"])
def get_summary():
    """Return summary comparisons across models."""
    summary = {}
    for algo, models in MODEL_DATA.items():
        summary[algo] = [
            {
                "k": m["k"],
                "features": m["features"],
                "rmse": m["rmse"],
                "r2": m["r2"],
                "adj_r2": m.get("adj_r2")
            }
            for m in models
        ]
    return jsonify(summary)


if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    print(f"Server running at http://localhost:{port}/")
    app.run(host="0.0.0.0", port=port, debug=True)
