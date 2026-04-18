---
title: Substituir console.log por logger estruturado (Pino)
type: chore
priority: HIGH
impact: 7
confidence: 9
effort: 4
tags:
  - logging
  - backend
  - observability
acceptanceCriteria:
  - Pino configurado na API e workers com níveis info/warn/error
  - Nenhum console.log remanescente em src de produção (ESLint rule)
  - Logs em formato JSON em produção e pretty em dev
  - Request ID e tenant ID incluídos em cada log
status: IN_PROGRESS
body: |
  ## Objetivo

  Substituir console.log por logger estruturado (Pino)

  ## Critérios de Aceite

  - [ ] Pino configurado na API e workers com níveis info/warn/error
  - [ ] Nenhum console.log remanescente em src de produção (ESLint rule)
  - [ ] Logs em formato JSON em produção e pretty em dev
  - [ ] Request ID e tenant ID incluídos em cada log
id: TASK-005
score: 16
createdAt: '2026-04-17T16:16:26.552Z'
updatedAt: '2026-04-17T18:02:46.325Z'
filePath: /projects/nexvideo/.pm/tasks/TASK-005.md
---
## Objetivo

Substituir console.log por logger estruturado (Pino)

## Critérios de Aceite

- [ ] Pino configurado na API e workers com níveis info/warn/error
- [ ] Nenhum console.log remanescente em src de produção (ESLint rule)
- [ ] Logs em formato JSON em produção e pretty em dev
- [ ] Request ID e tenant ID incluídos em cada log
