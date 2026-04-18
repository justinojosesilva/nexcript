---
title: Implementar rate limiting em endpoints de auth e geração
type: feature
priority: CRITICAL
impact: 9
confidence: 9
effort: 3
tags:
  - security
  - backend
  - throttler
acceptanceCriteria:
  - '@nestjs/throttler configurado em /auth/login, /auth/register e geração'
  - Webhook do Stripe protegido com rate limit adequado
  - Respostas 429 retornam mensagem clara
  - Testes de integração cobrindo os limites
status: TODO
body: |
  ## Objetivo

  Implementar rate limiting em endpoints de auth e geração

  ## Critérios de Aceite

  - [ ] @nestjs/throttler configurado em /auth/login, /auth/register e geração
  - [ ] Webhook do Stripe protegido com rate limit adequado
  - [ ] Respostas 429 retornam mensagem clara
  - [ ] Testes de integração cobrindo os limites
id: TASK-012
score: 27
createdAt: '2026-04-17T16:16:26.585Z'
updatedAt: '2026-04-17T16:16:26.585Z'
---
## Objetivo

Implementar rate limiting em endpoints de auth e geração

## Critérios de Aceite

- [ ] @nestjs/throttler configurado em /auth/login, /auth/register e geração
- [ ] Webhook do Stripe protegido com rate limit adequado
- [ ] Respostas 429 retornam mensagem clara
- [ ] Testes de integração cobrindo os limites
