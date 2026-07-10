from app.ml.predictor import predict_job


def analyze_job(job):

    # Combine the fields that contain useful information
    text = " ".join([
        job.company,
        job.jobTitle,
        job.description
    ])

    # ML Prediction
    prediction, probability = predict_job(text)

    # Convert probability to percentage
    risk = round(probability * 100)

    reasons = []

    description = job.description.lower()

    # Rule-based explanations
    if "registration fee" in description:
        reasons.append("Registration fee detected.")

    if "security deposit" in description:
        reasons.append("Security deposit detected.")

    if "whatsapp" in description:
        reasons.append("Communication shifted to WhatsApp.")

    if "urgent hiring" in description:
        reasons.append("Urgent hiring language detected.")

    # Recommendation based on ML probability
    if risk >= 70:
        recommendation = "High Risk – Avoid this job posting."

    elif risk >= 40:
        recommendation = "Medium Risk – Verify the employer before applying."

    else:
        recommendation = "Low Risk – No major warning signs detected."

    # If the model predicts fraud but no rule matched,
    # still provide an explanation.
    if prediction == 1 and not reasons:
        reasons.append(
            "The machine learning model detected patterns commonly associated with fraudulent job postings."
        )

    if prediction == 0 and not reasons:
        reasons.append(
            "No major fraud indicators were detected."
        )

    return {
        "company": job.company,
        "risk_score": risk,
        "prediction": "Fraudulent" if prediction == 1 else "Genuine",
        "recommendation": recommendation,
        "confidence": round(probability * 100, 2),
        "reasons": reasons
    }