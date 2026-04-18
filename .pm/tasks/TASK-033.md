---
title: Criar sync job BullMQ de métricas do YouTube
type: feature
priority: HIGH
impact: 8
confidence: 8
effort: 5
tags:
  - workers
  - bullmq
  - youtube
acceptanceCriteria:
  - Job agendado periodicamente por organização
  - Backoff exponencial ao receber erro de quota
  - Persistência incremental em VideoPerformance
  - 'Observabilidade: logs estruturados e métricas Sentry'
status: TODO
body: |
  ## Objetivo

  Criar sync job BullMQ de métricas do YouTube

  ## Critérios de Aceite

  - [ ] Job agendado periodicamente por organização
  - [ ] Backoff exponencial ao receber erro de quota
  - [ ] Persistência incremental em VideoPerformance
  - [ ] Observabilidade: logs estruturados e métricas Sentry
id: TASK-033
score: 13
createdAt: '2026-04-17T16:16:26.666Z'
updatedAt: '2026-04-17T16:16:26.666Z'
---
## Objetivo

Criar sync job BullMQ de métricas do YouTube

## Critérios de Aceite

- [ ] Job agendado periodicamente por organização
- [ ] Backoff exponencial ao receber erro de quota
- [ ] Persistência incremental em VideoPerformance
- [ ] Observabilidade: logs estruturados e métricas Sentry
