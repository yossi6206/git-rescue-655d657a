# syntax=docker/dockerfile:1.7

# ---- Build stage ----
FROM oven/bun:1.2-alpine AS builder
WORKDIR /app

# Install deps (cached when lockfile unchanged)
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile

# Build app
COPY . .
RUN bun run build

# ---- Runtime stage ----
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOST=0.0.0.0

# Copy built artifacts and production deps
COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.output ./.output
# Some TanStack Start setups also emit dist/ — copy if present
COPY --from=builder /app/dist ./dist

EXPOSE 3000

# TanStack Start node-server entry
CMD ["node", ".output/server/index.mjs"]
