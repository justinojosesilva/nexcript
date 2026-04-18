---
title: Implementar fluxo OAuth 2.0 do YouTube (autorização e callback)
type: feature
priority: HIGH
impact: 9
confidence: 8
effort: 6
tags:
  - youtube
  - oauth
  - backend
acceptanceCriteria:
  - Endpoint /youtube/oauth/start redireciona para consent Google
  - Callback troca código por tokens e persiste em YouTubeCredential
  - State anti-CSRF validado
  - Refresh token automatizado ao expirar access token
status: TODO
body: |
  ## Objetivo

  Implementar fluxo OAuth 2.0 do YouTube (autorização e callback)

  ## Critérios de Aceite

  - [ ] Endpoint /youtube/oauth/start redireciona para consent Google
  - [ ] Callback troca código por tokens e persiste em YouTubeCredential
  - [ ] State anti-CSRF validado
  - [ ] Refresh token automatizado ao expirar access token
id: TASK-029
score: 12
createdAt: '2026-04-17T16:16:26.650Z'
updatedAt: '2026-04-17T16:16:26.650Z'
---
## Objetivo

Implementar fluxo OAuth 2.0 do YouTube (autorização e callback)

## Critérios de Aceite

- [ ] Endpoint /youtube/oauth/start redireciona para consent Google
- [ ] Callback troca código por tokens e persiste em YouTubeCredential
- [ ] State anti-CSRF validado
- [ ] Refresh token automatizado ao expirar access token
