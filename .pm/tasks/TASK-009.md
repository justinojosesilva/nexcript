---
title: Adicionar testes de idempotência de webhooks Stripe
type: feature
priority: CRITICAL
impact: 9
confidence: 9
effort: 4
tags:
  - stripe
  - backend
  - tests
acceptanceCriteria:
  - Reenvio do mesmo evento Stripe não duplica subscription nem cobrança
  - Teste E2E com mock de webhook cobre duplicidade
  - Tabela de event IDs processados registrada no banco
  - Documentação do mecanismo de idempotência publicada
status: TODO
body: |
  ## Objetivo

  Adicionar testes de idempotência de webhooks Stripe

  ## Critérios de Aceite

  - [ ] Reenvio do mesmo evento Stripe não duplica subscription nem cobrança
  - [ ] Teste E2E com mock de webhook cobre duplicidade
  - [ ] Tabela de event IDs processados registrada no banco
  - [ ] Documentação do mecanismo de idempotência publicada
id: TASK-009
score: 20
createdAt: '2026-04-17T16:16:26.575Z'
updatedAt: '2026-04-17T16:16:26.575Z'
---
## Objetivo

Adicionar testes de idempotência de webhooks Stripe

## Critérios de Aceite

- [ ] Reenvio do mesmo evento Stripe não duplica subscription nem cobrança
- [ ] Teste E2E com mock de webhook cobre duplicidade
- [ ] Tabela de event IDs processados registrada no banco
- [ ] Documentação do mecanismo de idempotência publicada
