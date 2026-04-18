---
title: Criar serviço de criptografia para tokens OAuth
type: feature
priority: HIGH
impact: 9
confidence: 9
effort: 3
tags:
  - security
  - backend
  - crypto
acceptanceCriteria:
  - Tokens criptografados com AES-256 antes de persistir
  - Chave mestre armazenada em secret manager
  - Funções encrypt/decrypt testadas unitariamente
  - Rotação de chave documentada
status: TODO
body: |
  ## Objetivo

  Criar serviço de criptografia para tokens OAuth

  ## Critérios de Aceite

  - [ ] Tokens criptografados com AES-256 antes de persistir
  - [ ] Chave mestre armazenada em secret manager
  - [ ] Funções encrypt/decrypt testadas unitariamente
  - [ ] Rotação de chave documentada
id: TASK-030
score: 27
createdAt: '2026-04-17T16:16:26.655Z'
updatedAt: '2026-04-17T16:26:47.388Z'
filePath: /projects/nexvideo/.pm/tasks/TASK-030.md
---
## Objetivo

Criar serviço de criptografia para tokens OAuth

## Critérios de Aceite

- [ ] Tokens criptografados com AES-256 antes de persistir
- [ ] Chave mestre armazenada em secret manager
- [ ] Funções encrypt/decrypt testadas unitariamente
- [ ] Rotação de chave documentada
