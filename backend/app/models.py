from sqlalchemy import Column, Integer, String, Text, DateTime, JSON
from datetime import datetime

from .database import Base


class Job(Base):
    __tablename__ = "jobs"

    id = Column(Integer, primary_key=True, index=True)

    company = Column(String, nullable=False)

    job_title = Column(String, nullable=False)

    job_url = Column(Text)

    description = Column(Text)

    risk_score = Column(Integer)

    recommendation = Column(String)

    warning_signs = Column(JSON)

    created_at = Column(DateTime, default=datetime.utcnow)