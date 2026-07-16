import os
from fastapi import FastAPI, Depends
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from sqlalchemy.orm import Session

from database import Base, engine, SessionLocal
from models import User


Base.metadata.create_all(bind=engine)


app = FastAPI()

PORT = int(os.getenv("PORT", "8001"))

allowed_origins = [
    origin.strip()
    for origin in os.getenv(
        "ALLOWED_ORIGINS",
        "http://localhost:5173,http://127.0.0.1:5173"
    ).split(",")
    if origin.strip()
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=allowed_origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


class LoginRequest(BaseModel):
    username: str
    password: str


def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


@app.get("/health")
async def health():
    return {"status": "ok"}


@app.post("/login")
async def login(
    user: LoginRequest,
    db: Session = Depends(get_db)
):

    db_user = db.query(User).filter(
        User.username == user.username,
        User.password == user.password
    ).first()


    if db_user:
        return {"message": "Login Successful"}

    return {"message": "Invalid Credentials"}
