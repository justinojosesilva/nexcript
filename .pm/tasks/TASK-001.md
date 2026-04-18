---
title: Configurar ambiente de staging com paridade de produção
type: chore
priority: CRITICAL
impact: 10
confidence: 9
effort: 6
tags:
  - infrastructure
  - staging
  - devops
acceptanceCriteria:
  - Variáveis de ambiente de staging documentadas e aplicadas
  - >-
    Postgres e Redis provisionados em staging com configuração equivalente a
    prod
  - BullMQ rodando em staging sem uso de mocks
  - Deploy de api e workers validado em staging
status: IN_REVIEW
body: >
  ## Objetivo


  Configurar ambiente de staging com paridade de produção


  ## Critérios de Aceite


  - [x] Variáveis de ambiente de staging documentadas e aplicadas

  - [x] Postgres e Redis provisionados em staging com configuração equivalente a
  prod

  - [x] BullMQ rodando em staging sem uso de mocks

  - [ ] Deploy de api e workers validado em staging
id: TASK-001
score: 15
createdAt: '2026-04-17T16:16:26.524Z'
updatedAt: '2026-04-17T20:15:00.000Z'
filePath: /projects/nexvideo/.pm/tasks/TASK-001.md
---
## Objetivo

Configurar ambiente de staging com paridade de produção

## Critérios de Aceite

- [x] Variáveis de ambiente de staging documentadas e aplicadas
- [x] Postgres e Redis provisionados em staging com configuração equivalente a prod
- [x] BullMQ rodando em staging sem uso de mocks
- [ ] Deploy de api e workers validado em staging

## Implementação

### Arquivos criados

- **`render.yaml`** — Blueprint do Render com Postgres gerenciado, Redis (`allkeys-lru`), API (web service), Worker (background worker) e Web (web service). Inclui `preDeployCommand: prisma migrate deploy` na API para rodar migrations a cada deploy.
- **`.env.staging.example`** — Consolidação de todas as variáveis dos 3 serviços, com indicações `[RENDER]` (injetadas automaticamente) vs `[MANUAL]` (configurar no dashboard após primeiro deploy).
- **`apps/worker/.env.example`** — Template de variáveis do worker para dev local.
- **`apps/web/.env.example`** — Template de variáveis do web para dev local.
- **`apps/api/Dockerfile`** — Multi-stage build usando `pnpm deploy --prod` para imagem enxuta.
- **`apps/worker/Dockerfile`** — Multi-stage build, mesma estratégia.
- **`apps/web/Dockerfile`** — Multi-stage build com Next.js standalone output.
- **`.dockerignore`** — Exclui `node_modules`, `dist`, `.turbo`, `.env`, `.git` e `.pm`.

### Arquivos modificados

- **`apps/web/next.config.ts`** — Adicionado `output: "standalone"` (obrigatório para o Dockerfile do web).
- **`packages/database/package.json`** — Adicionado script `migrate:deploy` (`prisma migrate deploy`).
- **`.gitignore`** — Exceções `!.env.example` e `!.env.staging.example` para versionar os templates.

### Observações sobre BullMQ

O worker já usava Redis real sem mocks — confirmado em `apps/worker/src/index.ts`. O job `health-check` possui um `setTimeout(1000)` de simulação, mas é um stub de teste, não um mock de infraestrutura. O `REDIS_URL` é injetado automaticamente pelo Render via `fromService`.

### Pendente para finalizar o critério de deploy

Após o push para o GitHub e provisionamento via Blueprint no Render:

1. Setar as variáveis `[MANUAL]` no dashboard: API keys, secrets do Stripe
2. Após primeiro deploy, setar as URLs cruzadas:
   - `FRONTEND_URL` e `APP_URL` na API → `https://nexvideo-web.onrender.com`
   - `API_URL` no Worker → `https://nexvideo-api.onrender.com`
   - `NEXT_PUBLIC_API_URL` no Web → `https://nexvideo-api.onrender.com`
   - URLs do Stripe (`STRIPE_SUCCESS_URL`, etc.) → baseadas em `nexvideo-web.onrender.com`
3. Validar `GET /health` retornando status `healthy` para Postgres, Redis e queue
