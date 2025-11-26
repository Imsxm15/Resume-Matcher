# apps/backend/Dockerfile
FROM python:3.12-slim

WORKDIR /app

# Installation des dépendances système nécessaires pour la compilation de certains paquets Python
RUN apt-get update && apt-get install -y \
    build-essential \
    libssl-dev \
    libffi-dev \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Installation des dépendances Python
COPY requirements.txt .
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt && \
    # Installation spécifique pour la gestion DOCX (mentionnée dans tes fichiers)
    pip install --no-cache-dir "markitdown[all]==0.1.2"

# Copie du code source
COPY . .

# Exposition du port (informatif)
EXPOSE 8000

# Commande de lancement
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
