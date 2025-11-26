# apps/frontend/Dockerfile
FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances
COPY package.json package-lock.json ./
# Utilisation de npm ci pour une installation propre et rapide
RUN npm ci

# Copie du reste des fichiers sources
COPY . .

# ARG pour passer l'URL de l'API au moment du build
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build de l'application Next.js
RUN npm run build

# --- Étape de production (Runner) ---
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Copie des fichiers nécessaires depuis l'étape de build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
