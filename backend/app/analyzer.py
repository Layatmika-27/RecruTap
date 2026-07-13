from datetime import datetime

from app.ml.predictor import predict_job


def analyze_job(job):
    """
    Analyze a job posting using the trained ML model
    and generate user-friendly insights.
    """

    # Combine relevant text fields for prediction
    text = " ".join([
        job.company or "",
        job.jobTitle or "",
        job.jobUrl or "",
        job.description or ""
    ])

    # ML Prediction
    prediction, probability = predict_job(text)

    # Convert probability to percentage
    risk = round(probability * 100)

    # Determine risk level and recommendation
    if risk >= 70:
        risk_level = "High"
        recommendation = "Avoid this job posting. It contains multiple indicators commonly associated with fraudulent job postings."

    elif risk >= 40:
        risk_level = "Medium"
        recommendation = "Proceed with caution. Verify the employer, company website, and job details before applying."

    else:
        risk_level = "Low"
        recommendation = "This job posting appears legitimate. However, always verify company details before sharing personal information."

    # Detect warning signs
    warning_signs = []

    description = (job.description or "").lower()

    if "registration fee" in description:
        warning_signs.append("Registration fee detected.")

    if "security deposit" in description:
        warning_signs.append("Security deposit detected.")

    if "whatsapp" in description:
        warning_signs.append("Communication shifted to WhatsApp.")

    if "urgent hiring" in description:
        warning_signs.append("Urgent hiring language detected.")

    if "work from home" in description:
        warning_signs.append("Work-from-home offer detected. Verify employer legitimacy.")

    if "earn" in description and "per day" in description:
        warning_signs.append("Unrealistic earning claims detected.")

    # Fallback explanations
    if prediction == 1 and not warning_signs:
        warning_signs.append(
            "The machine learning model detected patterns commonly associated with fraudulent job postings."
        )

    if prediction == 0 and not warning_signs:
        warning_signs.append(
            "No major fraud indicators were detected."
        )

    # Timestamp
    analysis_time = datetime.now().strftime("%Y-%m-%d %H:%M")

    # Return API response
    return {
        "company": job.company,
        "prediction": "Fraudulent" if prediction == 1 else "Legitimate",
        "risk_score": risk,
        "confidence": round(probability * 100, 2),
        "risk_level": risk_level,
        "recommendation": recommendation,
        "warning_signs": warning_signs,
        "analysis_time": analysis_time
    }