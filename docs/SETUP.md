# RecruTap Setup Guide

## Frontend

```bash
cd frontend
npm install
npm run dev
```

Runs on:

http://localhost:5173

---

## Backend

```bash
cd backend

python -m venv venv

venv\Scripts\activate

pip install -r requirements.txt

uvicorn app.main:app --reload
```

Runs on:

http://127.0.0.1:8000

Swagger:

http://127.0.0.1:8000/docs