# RecruTap API Documentation

## Base URL

http://127.0.0.1:8000

---

## GET /

Returns the API status.

Example Response

```json
{
    "message": "Welcome to RecruTap API"
}
```

---

## POST /analyze

Analyzes a job posting and returns a trust report.

### Request

```json
{
    "company": "Google",
    "jobTitle": "Data Analyst Intern",
    "jobUrl": "https://...",
    "description": "Urgent hiring..."
}
```

### Response

```json
{
    "company": "Google",
    "risk_score": 75,
    "recommendation": "Avoid",
    "reasons": [
        "Registration fee detected",
        "WhatsApp communication detected"
    ]
}
```