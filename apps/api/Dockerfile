FROM node:18-slim AS base
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate

# ── Build stage ──────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

# Copy workspace manifests first for better layer caching
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/api/package.json ./apps/api/
COPY packages/database/package.json ./packages/database/
COPY packages/shared/package.json ./packages/shared/
COPY packages/prompts/package.json ./packages/prompts/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN pnpm install --frozen-lockfile --filter api...

# Copy all source needed to build
COPY apps/api ./apps/api
COPY packages ./packages

RUN pnpm --filter @nexvideo/shared build && \
    pnpm --filter @nexvideo/prompts build && \
    pnpm --filter @nexvideo/database generate && \
    pnpm --filter @nexvideo/database build && \
    pnpm --filter api build

# Create a flat deployment directory (no workspace symlinks)
RUN pnpm deploy --filter api --prod /app/deploy

# ── Runtime stage ─────────────────────────────────────────────────────────────
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/deploy .

EXPOSE 3002
CMD ["node", "dist/main"]
