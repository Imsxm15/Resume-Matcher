# apps/backend/Dockerfile
# Utilisation d'une image Python légère et récente
FROM python:3.12-slim-bookworm

# Installation des dépendances système minimales
RUN apt-get update && apt-get install -y --no-install-recommends \
    curl \
    ca-certificates \
    && rm -rf /var/lib/apt/lists/*

# Installation de uv (gestionnaire de paquets rapide)
COPY --from=ghcr.io/astral-sh/uv:latest /uv /bin/uv

# Configuration de l'environnement de travail
WORKDIR /app

# Variables pour optimiser Python et uv
ENV PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    UV_COMPILE_BYTECODE=1 \
    UV_SYSTEM_PYTHON=1

# Copie des fichiers de définition des dépendances
COPY pyproject.toml uv.lock* ./

# Installation des dépendances via uv (sans créer de venv, on utilise le python système)
# Si uv.lock n'existe pas encore, uv le générera à partir de pyproject.toml
RUN uv pip install --system -e .

# Copie du code source du backend
COPY . .

# Exposition du port API
EXPOSE 8000

# Commande de démarrage
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
