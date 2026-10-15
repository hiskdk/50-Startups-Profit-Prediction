import os
import json
from flask import Flask, render_template, request, jsonify, send_from_directory

app = Flask(__name__, static_folder=".", static_url_path="")

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_DATA_PATH = os.path.join(BASE_DIR, "model_data.json")
BOSTON_DATA_PATH = os.path.join(BASE_DIR, "boston_data.json")

try:
    with open(MODEL_DATA_PATH, "r", encoding="utf-8") as f:
        MODEL_DATA = json.load(f)
except Exception as e:
    print(f"Warning: Could not load model_data.json: {e}")
    MODEL_DATA = {}

try:
    with open(BOSTON_DATA_PATH, "r", encoding="utf-8") as f:
        BOSTON_DATA = json.load(f)
except Exception as e:
    print(f"Warning: Could not load boston_data.json: {e}")
    BOSTON_DATA = {}


@app.route("/")
def index():
    """Serve the main interactive regression explorer dashboard."""
    return send_from_directory(BASE_DIR, "index.html")


@app.route("/api/models", methods=["GET"])
def get_models():
    """Return the complete 5-algorithm feature selection evaluation data for startups or boston."""
    problem = request.args.get("problem", "startups")
    dataset = BOSTON_DATA if problem == "boston" else MODEL_DATA
    algo = request.args.get("algo")
    if algo and algo in dataset:
        return jsonify({algo: dataset[algo]})
    return jsonify(dataset)


@app.route("/api/predict", methods=["POST"])
def predict():
    """
    Live prediction endpoint: Calculates target prediction based on user inputs
    and the selected algorithm/k-feature subset for either 50 Startups or Boston Housing.
    """
    try:
        data = request.get_json(force=True) or {}
        problem = data.get("problem", "startups")
        algo = data.get("algo", "Lasso")
        k = int(data.get("k", 2))

        dataset = BOSTON_DATA if problem == "boston" else MODEL_DATA

        if algo not in dataset or k < 1 or k > len(dataset[algo]):
            return jsonify({"error": "Invalid algorithm or k parameter"}), 400

        model_spec = dataset[algo][k - 1]
        coefficients = model_spec["coefficients"]

        if problem == "boston":
            lstat = float(data.get("lstat", 12.5))
            rm = float(data.get("rm", 6.2))
            ptratio = float(data.get("ptratio", 18.0))
            dis = float(data.get("dis", 3.8))
            crim = float(data.get("crim", 0.25))

            feat_map = {
                "lstat": lstat,
                "rm": rm,
                "ptratio": ptratio,
                "dis": dis,
                "crim": crim
            }

            pred = 0.0
            breakdown = []
            for c in coefficients:
                fn = c["feature"]
                coef = c["coef"]
                if "Intercept" in fn:
                    pred += coef
                    breakdown.append({"feature": "Intercept", "contribution": coef})
                elif fn in feat_map:
                    contrib = coef * feat_map[fn]
                    pred += contrib
                    breakdown.append({"feature": fn, "contribution": round(contrib, 4)})

            return jsonify({
                "problem": "boston",
                "algo": algo,
                "k": k,
                "predicted_medv": round(pred, 2),
                "predicted_price_usd": round(pred * 1000, 2),
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
    problem = request.args.get("problem", "startups")
    dataset = BOSTON_DATA if problem == "boston" else MODEL_DATA
    summary = {}
    for algo, models in dataset.items():
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
