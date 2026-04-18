FROM node:18-slim AS base
RUN corepack enable && corepack prepare pnpm@10.19.0 --activate

# ── Build stage ──────────────────────────────────────────────────────────────
FROM base AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml turbo.json ./
COPY apps/web/package.json ./apps/web/
COPY packages/shared/package.json ./packages/shared/
COPY packages/ui/package.json ./packages/ui/
COPY packages/tailwind-config/package.json ./packages/tailwind-config/
COPY packages/typescript-config/package.json ./packages/typescript-config/
COPY packages/eslint-config/package.json ./packages/eslint-config/

RUN pnpm install --frozen-lockfile --filter web...

COPY apps/web ./apps/web
COPY packages ./packages

ARG NEXT_PUBLIC_API_URL
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

RUN pnpm --filter @nexvideo/shared build && \
    pnpm --filter @nexvideo/ui build && \
    pnpm --filter web build

# ── Runtime stage ─────────────────────────────────────────────────────────────
FROM node:18-slim AS runner
WORKDIR /app
ENV NODE_ENV=production

# standalone output bundles server + necessary node_modules
COPY --from=builder /app/apps/web/.next/standalone ./
COPY --from=builder /app/apps/web/.next/static ./apps/web/.next/static
COPY --from=builder /app/apps/web/public ./apps/web/public

EXPOSE 3001
ENV PORT=3001
CMD ["node", "apps/web/server.js"]
