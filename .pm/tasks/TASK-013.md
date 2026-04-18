---
title: Restringir CORS a domínios conhecidos em produção
type: chore
priority: CRITICAL
impact: 8
confidence: 10
effort: 2
tags:
  - security
  - backend
  - cors
acceptanceCriteria:
  - Lista de origins permitidos por ambiente via env
  - Wildcard * removido em produção
  - Requisições de origem não autorizada retornam erro
  - Documentação de whitelist publicada
status: TODO
body: |
  ## Objetivo

  Restringir CORS a domínios conhecidos em produção

  ## Critérios de Aceite

  - [ ] Lista de origins permitidos por ambiente via env
  - [ ] Wildcard * removido em produção
  - [ ] Requisições de origem não autorizada retornam erro
  - [ ] Documentação de whitelist publicada
id: TASK-013
score: 40
createdAt: '2026-04-17T16:16:26.588Z'
updatedAt: '2026-04-17T16:16:26.588Z'
---
## Objetivo

Restringir CORS a domínios conhecidos em produção

## Critérios de Aceite

- [ ] Lista de origins permitidos por ambiente via env
- [ ] Wildcard * removido em produção
- [ ] Requisições de origem não autorizada retornam erro
- [ ] Documentação de whitelist publicada
