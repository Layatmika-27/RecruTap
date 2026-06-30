from pydantic import BaseModel

class JobRequest(BaseModel):
    company: str
    jobTitle: str
    jobUrl: str
    description: str