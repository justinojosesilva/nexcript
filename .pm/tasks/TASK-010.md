---
title: Separar STRIPE_WEBHOOK_SECRET por ambiente
type: chore
priority: CRITICAL
impact: 8
confidence: 10
effort: 1
tags:
  - stripe
  - security
  - config
acceptanceCriteria:
  - Chave distinta configurada em staging e prod
  - .env.example atualizado sem valores reais
  - Documentação de rotação da chave publicada
  - Deploy validado com chaves corretas
status: TODO
body: |
  ## Objetivo

  Separar STRIPE_WEBHOOK_SECRET por ambiente

  ## Critérios de Aceite

  - [ ] Chave distinta configurada em staging e prod
  - [ ] .env.example atualizado sem valores reais
  - [ ] Documentação de rotação da chave publicada
  - [ ] Deploy validado com chaves corretas
id: TASK-010
score: 80
createdAt: '2026-04-17T16:16:26.577Z'
updatedAt: '2026-04-17T16:16:26.577Z'
---
## Objetivo

Separar STRIPE_WEBHOOK_SECRET por ambiente

## Critérios de Aceite

- [ ] Chave distinta configurada em staging e prod
- [ ] .env.example atualizado sem valores reais
- [ ] Documentação de rotação da chave publicada
- [ ] Deploy validado com chaves corretas
