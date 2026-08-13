# ==========================================
# BACKEND DOCKERFILE FOR HUGGING FACE SPACES / CLOUD
# ==========================================
FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json bun.lock* ./
RUN npm ci || npm install

COPY . .
RUN npm run build:backend

# Production Stage
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
# Hugging Face Spaces listens on port 7860 by default
ENV PORT=7860

COPY package*.json ./
RUN npm ci --only=production || npm install --omit=dev

COPY --from=builder /app/dist/server-backend.cjs ./dist/server-backend.cjs

EXPOSE 7860

CMD ["node", "dist/server-backend.cjs"]
