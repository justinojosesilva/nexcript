---
title: Implementar endpoint GET /health e /health/deep
type: feature
priority: CRITICAL
impact: 8
confidence: 10
effort: 3
tags:
  - backend
  - health-check
  - observability
acceptanceCriteria:
  - /health retorna 200 com status básico do serviço
  - '/health/deep verifica Postgres, Redis e BullMQ'
  - Workers expõem health check equivalente
  - Endpoints documentados e cobertos por teste de integração
status: TODO
body: |
  ## Objetivo

  Implementar endpoint GET /health e /health/deep

  ## Critérios de Aceite

  - [ ] /health retorna 200 com status básico do serviço
  - [ ] /health/deep verifica Postgres, Redis e BullMQ
  - [ ] Workers expõem health check equivalente
  - [ ] Endpoints documentados e cobertos por teste de integração
id: TASK-006
score: 27
createdAt: '2026-04-17T16:16:26.555Z'
updatedAt: '2026-04-17T16:16:26.555Z'
---
## Objetivo

Implementar endpoint GET /health e /health/deep

## Critérios de Aceite

- [ ] /health retorna 200 com status básico do serviço
- [ ] /health/deep verifica Postgres, Redis e BullMQ
- [ ] Workers expõem health check equivalente
- [ ] Endpoints documentados e cobertos por teste de integração
