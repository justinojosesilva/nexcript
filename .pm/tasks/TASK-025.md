---
title: Adicionar remoção de membros em /settings/members
type: feature
priority: MEDIUM
impact: 6
confidence: 9
effort: 3
tags:
  - members
  - frontend
  - backend
acceptanceCriteria:
  - 'Endpoint DELETE /members/:id respeita TenantGuard'
  - UI confirma ação com modal
  - Último admin não pode ser removido
  - Teste E2E valida fluxo completo
status: TODO
body: |
  ## Objetivo

  Adicionar remoção de membros em /settings/members

  ## Critérios de Aceite

  - [ ] Endpoint DELETE /members/:id respeita TenantGuard
  - [ ] UI confirma ação com modal
  - [ ] Último admin não pode ser removido
  - [ ] Teste E2E valida fluxo completo
id: TASK-025
score: 18
createdAt: '2026-04-17T16:16:26.634Z'
updatedAt: '2026-04-17T16:16:26.634Z'
---
## Objetivo

Adicionar remoção de membros em /settings/members

## Critérios de Aceite

- [ ] Endpoint DELETE /members/:id respeita TenantGuard
- [ ] UI confirma ação com modal
- [ ] Último admin não pode ser removido
- [ ] Teste E2E valida fluxo completo
