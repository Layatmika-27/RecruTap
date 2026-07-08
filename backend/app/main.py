from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from app.schemas import JobRequest
from app.analyzer import analyze_job

from app.database import engine, get_db
from app.models import Base, Job
from app.crud import create_job

app = FastAPI(
    title="RecruTap API",
    version="1.0.0"
)

Base.metadata.create_all(bind=engine)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/jobs")
def get_jobs(
    db: Session = Depends(get_db)
):
    jobs = db.query(Job).all()
    return jobs

@app.post("/analyze")
def analyze(
    request: JobRequest,
    db: Session = Depends(get_db)
):
    result = analyze_job(request)

    job_data = {
        **request.model_dump(),
        **result
    }

    create_job(db, job_data)

    return result