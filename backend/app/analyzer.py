def analyze_job(job):

    description = job.description.lower()

    risk = 20

    reasons = []

    if "registration fee" in description:
        risk += 30
        reasons.append("Registration fee detected.")

    if "security deposit" in description:
        risk += 30
        reasons.append("Security deposit detected.")

    if "whatsapp" in description:
        risk += 15
        reasons.append("Communication shifted to WhatsApp.")

    if "urgent hiring" in description:
        risk += 10
        reasons.append("Urgent hiring language detected.")

    if risk > 100:
        risk = 100

    if risk >= 70:
        recommendation = "Avoid"

    elif risk >= 40:
        recommendation = "Proceed with Caution"

    else:
        recommendation = "Looks Safe"

    return {
        "company": job.company,
        "risk_score": risk,
        "recommendation": recommendation,
        "reasons": reasons
    }