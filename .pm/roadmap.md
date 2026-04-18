---
version: 2
project: nexvideo
updatedAt: 2026-04-15
---

## Objetivo

Criar uma plataforma de produção automatizada de conteúdo dark (sem aparição pessoal) para YouTube, TikTok, Instagram Reels e Shorts — reduzindo o tempo de criação de um vídeo de 4–6 horas para menos de 30 minutos. Evoluir de uso próprio para um SaaS com planos pagos, multitenancy e integrações com plataformas de distribuição.

---

## Status Atual — 15 de abril de 2026

| Sprint | Foco | Status | Entrega principal |
|--------|------|--------|-------------------|
| Sprint 1 | Fundação técnica | ✅ Concluído | Monorepo, auth, domínio core, BullMQ, CI/CD |
| Sprint 2 | Auth + domínio + UI | ✅ Concluído | Fluxo registro → canal → projeto funcionando |
| Sprint 3 | Trends + Scoring 4D | ✅ Concluído | Usuário descobre temas com score real (YouTube + Google Trends) |
| Sprint 4 | Script Generator + TTS | ✅ Concluído | Roteiro + narração (ElevenLabs) ponta a ponta |
| Sprint 5 | Mídia + Título/Tags + Export | ✅ Concluído | MVP completo: exportação ZIP com todos os assets |
| Sprint 6 | SaaS: Multiusuário + Billing | ✅ Concluído | Planos, Stripe, onboarding, tenant isolation, emails |
| **Sprint 7-PRE** | **Production Readiness Gate** | **🔴 Blocker** | **Pré-requisitos para testes reais — ver abaixo** |
| Sprint 7 | Analytics + YouTube | 🏗️ Em andamento | Dashboard de analytics + integração YouTube Data/Analytics API |
| Sprint 8 | Thumbnail IA + Qualidade | 📋 Planejada | — |

---

## ⛔ Sprint 7-PRE — Production Readiness Gate (BLOCKER)

> **Este gate deve ser 100% concluído antes de qualquer teste real com usuários ou APIs de produção.**
> Estimativa: 2–3 dias. Não iniciar Sprint 7 até que todos os itens estejam ✅.

### P0 — Infraestrutura mínima para testes reais

- [ ] **Staging com paridade de produção** — variáveis de ambiente, Postgres, Redis e BullMQ configurados no ambiente de staging idênticos ao prod (sem mocks)
- [ ] **Error tracking ativo** — Sentry (ou equivalente) integrado em api, workers e web; alertas de erro crítico configurados
- [ ] **Logs estruturados** — Winston/Pino com níveis corretos (info/warn/error); nenhum `console.log` em produção
- [ ] **Health check endpoints** — `GET /health` e `GET /health/deep` respondendo para api e workers
- [ ] **Uptime monitoring** — Better Uptime / UptimeRobot monitorando endpoints críticos com alerta por email

### P0 — Stripe: validação completa antes de modo live

- [ ] **Stripe test mode em staging validado** — fluxo completo: cadastro → plano → checkout → webhook → portal → cancelamento com cartões de teste Stripe
- [ ] **Webhooks idempotentes verificados** — reenvio do mesmo evento não duplica subscription nem cobrança
- [ ] **`STRIPE_WEBHOOK_SECRET` diferente por ambiente** — staging não usa a mesma chave de prod
- [ ] **Stripe live mode configurado** — chaves `STRIPE_SECRET_KEY` e `STRIPE_PUBLISHABLE_KEY` de produção em `.env.prod` (não commitadas)
- [ ] **Checklist Stripe go-live** — [stripe.com/docs/go-live](https://stripe.com/docs/go-live) revisado e itens aplicáveis marcados

### P0 — Segurança mínima para SaaS real

- [ ] **Rate limiting nos endpoints críticos** — auth (`/auth/login`, `/auth/register`), geração e webhook com `@nestjs/throttler` ou nginx
- [ ] **CORS restrito** — `origin` apenas para domínios conhecidos (não `*`) em produção
- [ ] **Helmet + CSRF** — `@fastify/helmet` ou `helmet` ativo; CSRF configurado para rotas de formulário
- [ ] **Secrets não expostos** — auditoria de `.env.example`: nenhuma chave real, nenhum token hardcoded no repo
- [ ] **Backup automático do banco** — pg_dump agendado ou snapshot automático do provider configurado

### P1 — YouTube API: setup com antecedência

- [ ] **Google Cloud Console** — projeto criado, YouTube Data API v3 e YouTube Analytics API habilitadas
- [ ] **OAuth Consent Screen configurado** — em modo "Testing" com emails de teste autorizados; produção requer verificação do Google (pode levar 4–6 semanas se sensível)
- [ ] **Credenciais OAuth criadas** — Client ID e Secret para Web Application com redirect URIs corretos (staging + prod)
- [ ] **Scopes mapeados** — `youtube.readonly`, `youtube.upload`, `yt-analytics.readonly` documentados e aprovados no consent screen
- [ ] **Quota de API verificada** — YouTube Data API tem limite de 10.000 units/dia por projeto; estimar consumo esperado e solicitar aumento se necessário

### P1 — Legal e compliance mínimo

- [ ] **Terms of Service publicados** — página `/terms` com versão datada e aceite no cadastro registrado no banco
- [ ] **Privacy Policy publicada** — página `/privacy` cobrindo coleta de dados, cookies, retenção e direitos do usuário (LGPD/GDPR conforme mercado-alvo)
- [ ] **Aceite de ToS no onboarding** — campo `acceptedTermsAt` e `termsVersion` em `User` registrando aceite explícito

---

## Fase 1 — MVP de Uso Próprio (Sprints 1–5) ✅ CONCLUÍDA

- [x] Monorepo pnpm + Turborepo com packages compartilhados (shared, database, prompts, ui)
- [x] Autenticação JWT com isolamento por organização (multitenancy desde o início)
- [x] CRUD de ChannelProfile e ContentProject com 98%+ cobertura de testes
- [x] BullMQ + worker assíncrono para jobs de geração
- [x] CI/CD via GitHub Actions (lint + check-types)
- [x] Módulo Trends com Scoring 4D (Demand + Saturation + QualityGap + Monetization)
- [x] Cache Redis com TTL para APIs externas (YouTube, Google Trends, OpenAI)
- [x] Script Generator com prompts tipados + controle de budget por geração
- [x] TTS via ElevenLabs com fallback OpenAI + preview de áudio
- [x] Editor de roteiro com refine/regenerate por seção
- [x] Sugestão de mídia via Pexels + Pixabay (organizada por bloco do roteiro)
- [x] Geração de título e tags SEO-otimizados com variações rankeadas
- [x] ComplianceScorer — score de originalidade + validação de licenças
- [x] ExportJob — pacote ZIP com roteiro, áudio, assets e metadados
- [x] Fluxo E2E validado: Trends → Script → Narração → Mídia → Título/Tags → Export

---

## Fase 2 — SaaS e Monetização (Sprint 6) ✅ CONCLUÍDA

- [x] TenantGuard reutilizável via `@TenantResource()` em todos os controllers
- [x] Auditoria de tenant isolation — org A não acessa dados de org B (E2E validado)
- [x] Schema Prisma: models `Plan` e `Subscription` + seed (Free, Starter, Creator)
- [x] `PlanLimitsGuard` com cotas mensais e retorno `402 Payment Required`
- [x] Stripe Checkout — criação de sessão de pagamento
- [x] Stripe Webhooks idempotentes (checkout, subscription updated/deleted, invoice failed)
- [x] Stripe Portal — upgrade, downgrade e cancelamento de self-service
- [x] Wizard de onboarding 3 steps (Boas-vindas → Canal → Primeiro projeto)
- [x] Tela `/plans` com cards comparativos e integração direta ao Stripe Checkout
- [x] Email transacional via Resend (confirmação de conta, boas-vindas, alertas de billing)
- [x] Dashboard com widget de uso (barras semânticas verde/âmbar/vermelho)
- [x] Invite de membros por organização com limite por plano
- [x] UI `/settings/members` com convite por email
- [x] Admin API com dupla proteção (JWT + `X-Admin-Key`)
- [x] Testes E2E SaaS (`saas.e2e-spec.ts`) cobrindo cadastro, plano, uso e isolamento

---

## Fase 3 — Analytics e Distribuição (Sprints 7–8) 🏗️ EM ANDAMENTO

### Sprint 7 — Analytics + Integração YouTube

> Pré-requisito: Sprint 7-PRE 100% concluído.

**Débitos herdados — resolver nos 2 primeiros dias da sprint:**

- [ ] **[D1]** Notificação de uso ao atingir 80% do limite (email via Resend + banner in-app) — P2
- [ ] **[D2]** Remoção de membros e edição de role na organização (`/settings/members`) — P2

**Entregas principais:**

- [ ] **[A1]** YouTube OAuth 2.0 — fluxo de autorização, callback, armazenamento criptografado de `access_token` e `refresh_token` em `YouTubeCredential`
- [ ] **[A1]** Schema Prisma: models `YouTubeCredential` e `VideoPerformance` com migrations
- [ ] **[A2]** `YouTubeAnalyticsAdapter` — busca de views, watch time, CTR e impressões via YouTube Analytics API
- [ ] **[A2]** `YouTubeDataAdapter` — upload de metadados e thumbnails via YouTube Data API v3; gestão de quota (units/dia)
- [ ] **[A3]** Sync job BullMQ — atualização periódica de métricas com backoff exponencial em caso de quota excedida
- [ ] **[A4]** `packages/ui` — componentes reutilizáveis: `<KPICard>`, `<LineChart>`, `<PerformanceTable>`
- [ ] **[A5]** Dashboard de Analytics UI — views, CTR, watch time por projeto com filtro de período
- [ ] **[A6]** QA e E2E — OAuth flow mock + sync job + exibição de métricas (com YouTube API em modo sandbox)

### Sprint 8 — Thumbnail IA + Qualidade Pré-publicação (planejada)

- [ ] Gerador de thumbnail com IA (composição de imagem + texto + estilo do canal)
- [ ] Preview de thumbnail antes da exportação
- [ ] Validação pré-publicação (checklist: compliance, score mínimo, thumbnail, tags)
- [ ] Testes de carga no endpoint de webhook do Stripe — P2
- [ ] Histórico de uso mensal por organização — P3
- [ ] UI de histórico de projetos com filtros e ordenação

---

## Fase 4 — Growth e Escala (Sprints 9+) 📋 PLANEJADA

- [ ] Integração com TikTok API (upload e métricas)
- [ ] Integração com Instagram Graph API (Reels)
- [ ] Publicação agendada com calendário de conteúdo
- [ ] Marketplace de templates de roteiro por nicho
- [ ] API pública para integrações de terceiros
- [ ] White label para agências
- [ ] Trial period e coupons/descontos
- [ ] Multi-idioma (EN, ES)
- [ ] Editor de vídeo semi-automatizado (timeline + assets + narração sincronizados)

---

## Débitos Técnicos Abertos

| Item | Prioridade | Sprint alvo | Observação |
|------|-----------|-------------|------------|
| Validação Stripe test mode em staging | **P0** | **Sprint 7-PRE** | ~~P1~~ → elevado para blocker |
| Rate limiting nos endpoints críticos | **P0** | **Sprint 7-PRE** | Novo item — obrigatório antes de usuários reais |
| Error tracking (Sentry) | **P0** | **Sprint 7-PRE** | Novo item — sem isso testes reais são no escuro |
| Terms of Service + Privacy Policy | **P0** | **Sprint 7-PRE** | Novo item — obrigatório antes de usuários reais |
| YouTube OAuth consent screen | **P0** | **Sprint 7-PRE** | Novo item — aprovação Google pode levar semanas |
| Notificação de uso a 80% do limite | P2 | Sprint 7 — início | |
| Remoção de membros e edição de role | P2 | Sprint 7 — início | |
| Testes de carga no endpoint de webhook | P2 | Sprint 8 | |
| Histórico de uso mensal por organização | P3 | Sprint 8 | |

---

## Métricas North Star por Fase

| Fase | Métrica |
|------|---------|
| MVP (Fase 1) | Usuário exporta pacote completo em < 30 min após tema |
| SaaS (Fase 2) | Primeiro usuário externo cadastrado, plano escolhido e projeto criado em < 5 min |
| Analytics (Fase 3) | Dashboard mostra métricas reais do YouTube em < 10s após sync |
| Growth (Fase 4) | Taxa de conversão Free → pago > 5% ao mês |