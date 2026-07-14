# Python Image
FROM python:3.12-slim

# Working Directory
WORKDIR /app

# requirements.txt Copy ചെയ്യുക
COPY requirements.txt .

# Python Packages Install ചെയ്യുക
RUN pip install --no-cache-dir -r requirements.txt

# Project Files Copy ചെയ്യുക
COPY . .

# Port തുറക്കുക
EXPOSE 8001

# FastAPI Start ചെയ്യുക
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
