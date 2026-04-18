---
title: Configurar Stripe live mode em produção
type: chore
priority: CRITICAL
impact: 10
confidence: 9
effort: 3
tags:
  - stripe
  - billing
  - production
acceptanceCriteria:
  - STRIPE_SECRET_KEY e STRIPE_PUBLISHABLE_KEY de live configuradas em .env.prod
  - Chaves não commitadas no repositório
  - Produtos e preços replicados em live mode
  - Checklist stripe.com/docs/go-live revisado e assinado
status: TODO
body: >
  ## Objetivo


  Configurar Stripe live mode em produção


  ## Critérios de Aceite


  - [ ] STRIPE_SECRET_KEY e STRIPE_PUBLISHABLE_KEY de live configuradas em
  .env.prod

  - [ ] Chaves não commitadas no repositório

  - [ ] Produtos e preços replicados em live mode

  - [ ] Checklist stripe.com/docs/go-live revisado e assinado
id: TASK-011
score: 30
createdAt: '2026-04-17T16:16:26.581Z'
updatedAt: '2026-04-17T16:16:26.581Z'
---
## Objetivo

Configurar Stripe live mode em produção

## Critérios de Aceite

- [ ] STRIPE_SECRET_KEY e STRIPE_PUBLISHABLE_KEY de live configuradas em .env.prod
- [ ] Chaves não commitadas no repositório
- [ ] Produtos e preços replicados em live mode
- [ ] Checklist stripe.com/docs/go-live revisado e assinado
