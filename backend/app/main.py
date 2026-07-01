from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.schemas import JobRequest
from app.analyzer import analyze_job

app = FastAPI(
    title="RecruTap API",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
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