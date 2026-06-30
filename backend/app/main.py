from fastapi import FastAPI
from app.schemas import JobRequest
from app.analyzer import analyze_job

app = FastAPI(
    title="RecruTap API",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "message": "Welcome to RecruTap API"
    }

@app.post("/analyze")
def analyze(request: JobRequest):
    result = analyze_job(request)
    return result