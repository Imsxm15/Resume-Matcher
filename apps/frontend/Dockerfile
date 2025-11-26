FROM node:18-alpine AS builder

WORKDIR /app

# Installation des dépendances
COPY package.json package-lock.json ./
RUN npm ci

# Copie du code source
COPY . .

# ARGUMENT CRITIQUE : L'URL de l'API Backend doit être connue au moment du BUILD
# Sur Hostinger, cela sera ton IP ou domaine : http://<TON_IP>:8000
ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Désactiver la télémétrie Next.js pour économiser des ressources
ENV NEXT_TELEMETRY_DISABLED=1

# Build
RUN npm run build

# --- Étape de production (Runner) ---
FROM node:18-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Copie des fichiers nécessaires depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

CMD ["node", "server.js"]
