---
id: SPRINT-07-PRE
goal: Production Readiness Gate — pré-requisitos obrigatórios antes de testes reais
status: ACTIVE
startDate: 2026-04-15
endDate: 2026-04-17
capacity: 46
taskIds:
  - TASK-001
  - TASK-002
  - TASK-003
  - TASK-004
  - TASK-005
  - TASK-006
  - TASK-007
  - TASK-008
  - TASK-009
  - TASK-010
  - TASK-011
  - TASK-012
  - TASK-013
  - TASK-014
  - TASK-015
  - TASK-016
  - TASK-017
  - TASK-018
  - TASK-019
  - TASK-020
  - TASK-021
  - TASK-022
  - TASK-023
---

## Goal

Garantir que a base técnica, legal e de segurança está pronta para receber
usuários reais e APIs de produção (Stripe live, YouTube OAuth real).

**Este sprint é um gate — 100% concluído antes de iniciar o Sprint 7.**

## Tasks

### Infra (TASK-001 a TASK-005)
- TASK-001 — Staging com paridade de produção
- TASK-002 — Error tracking (Sentry)
- TASK-003 — Logs estruturados sem console.log
- TASK-004 — Health check endpoints
- TASK-005 — Uptime monitoring

### Stripe (TASK-006 a TASK-010)
- TASK-006 — Stripe test mode em staging validado (fluxo completo)
- TASK-007 — Webhooks idempotentes verificados com reenvio
- TASK-008 — STRIPE_WEBHOOK_SECRET diferente por ambiente
- TASK-009 — Stripe live mode configurado
- TASK-010 — Checklist Stripe go-live revisado

### Segurança (TASK-011 a TASK-015)
- TASK-011 — Rate limiting em endpoints críticos
- TASK-012 — CORS restrito a domínios conhecidos
- TASK-013 — Helmet + CSRF ativo em produção
- TASK-014 — Auditoria de secrets no repositório
- TASK-015 — Backup automático do banco configurado

### YouTube (TASK-016 a TASK-020)
- TASK-016 — Google Cloud Console: APIs habilitadas
- TASK-017 — OAuth Consent Screen configurado
- TASK-018 — Credenciais OAuth criadas (staging + prod)
- TASK-019 — Scopes documentados e aprovados
- TASK-020 — Quota de API verificada e ajuste solicitado se necessário

### Legal (TASK-021 a TASK-023)
- TASK-021 — Terms of Service publicados em /terms
- TASK-022 — Privacy Policy publicada em /privacy
- TASK-023 — Aceite de ToS registrado no banco (acceptedTermsAt)
