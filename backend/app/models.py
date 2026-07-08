from sqlalchemy import Column, Integer, String, Text, DateTime
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

    reasons = Column(Text)

    created_at = Column(DateTime, default=datetime.utcnow)