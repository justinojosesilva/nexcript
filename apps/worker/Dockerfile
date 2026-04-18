FROM node:18-slim AS base
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate

# ── Build stage ──────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/worker/package.json ./apps/worker/
COPY packages/database/package.json ./packages/database/
COPY packages/shared/package.json ./packages/shared/
COPY packages/prompts/package.json ./packages/prompts/
COPY packages/typescript-config/package.json ./packages/typescript-config/

RUN pnpm install --frozen-lockfile --filter worker...

COPY apps/worker ./apps/worker
COPY packages ./packages

RUN pnpm --filter @nexvideo/shared build && \
    pnpm --filter @nexvideo/prompts build && \
    pnpm --filter @nexvideo/database generate && \
    pnpm --filter @nexvideo/database build && \
    pnpm --filter worker build

RUN pnpm deploy --filter worker --prod /app/deploy

# ── Runtime stage ─────────────────────────────────────────────────────────────
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/deploy .

CMD ["node", "dist/index.js"]
