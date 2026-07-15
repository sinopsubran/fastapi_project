# Python Image
FROM python:3.12-slim

# Working Directory
WORKDIR /app

# requirements.txt Copy 
COPY requirements.txt .

# Python Packages Install 
RUN pip install --no-cache-dir -r requirements.txt

# Project Files Copy 
COPY . .

# Port 
EXPOSE 8001

# FastAPI Start 
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8001"]
