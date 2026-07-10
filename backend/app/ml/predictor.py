from pathlib import Path

import joblib

from app.ml.preprocess import clean_text


BASE_DIR = Path(__file__).resolve().parents[2]

MODEL_PATH = BASE_DIR / "models" / "fraud_detector.pkl"

VECTORIZER_PATH = BASE_DIR / "models" / "tfidf_vectorizer.pkl"


model = joblib.load(MODEL_PATH)

vectorizer = joblib.load(VECTORIZER_PATH)


def predict_job(description: str):
    """
    Predict whether a job posting is fraudulent.
    """

    cleaned = clean_text(description)

    vector = vectorizer.transform([cleaned])

    prediction = model.predict(vector)[0]

    probability = model.predict_proba(vector)[0][1]

    return prediction, probability