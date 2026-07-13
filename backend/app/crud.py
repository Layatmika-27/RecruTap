from sqlalchemy.orm import Session
from .models import Job


def create_job(db: Session, job_data: dict):

    job = Job(
        company=job_data["company"],
        job_title=job_data["jobTitle"],
        job_url=job_data["jobUrl"],
        description=job_data["description"],
        risk_score=job_data["risk_score"],
        recommendation=job_data["recommendation"],
        warning_signs=(job_data["warning_signs"])
    )

    db.add(job)
    db.commit()
    db.refresh(job)

    return job