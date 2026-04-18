---
title: Integrar Sentry na API NestJS
type: feature
priority: CRITICAL
impact: 9
confidence: 9
effort: 3
tags:
  - observability
  - backend
  - sentry
acceptanceCriteria:
  - SDK do Sentry instalado e inicializado no bootstrap da API
  - DSN configurado via variável de ambiente por ambiente
  - Erros não tratados enviados automaticamente ao Sentry
  - Contexto de usuário e organização anexado aos eventos
status: DONE
body: >
  ## Objetivo


  Integrar Sentry na API NestJS


  ## Critérios de Aceite


  - [x] SDK do Sentry instalado e inicializado no bootstrap da API

  - [x] DSN configurado via variável de ambiente por ambiente

  - [x] Erros não tratados enviados automaticamente ao Sentry

  - [x] Contexto de usuário e organização anexado aos eventos


  ## Implementação


  ### Pacote instalado


  ```

  @sentry/nestjs  (apps/api)

  ```


  ### Arquivos criados


  - **`src/common/interceptors/sentry-user-context.interceptor.ts`**
    Interceptor global (`APP_INTERCEPTOR`) que roda após os guards (JWT já validado).
    Extrai `request.user` (JwtPayload) e configura o scope do Sentry com:
    - `Sentry.setUser({ id: sub, email })` — identidade do usuário
    - `Sentry.setTag('organization_id', organizationId)` — contexto de tenant
    - `Sentry.setTag('user_role', role)` — papel do usuário

  ### Arquivos modificados


  - **`src/main.ts`**
    Chama `Sentry.init()` no início do `bootstrap()`, antes do `NestFactory.create()`.
    - `dsn: process.env.SENTRY_DSN`
    - `environment: process.env.NODE_ENV` (diferencia dev/staging/prod automaticamente)
    - `enabled: !!process.env.SENTRY_DSN` (desabilitado quando DSN não definido — sem ruído em dev local)
    - `tracesSampleRate: 1.0`

  - **`src/app.module.ts`**
    - Adicionado `SentryModule.forRoot()` como primeiro import (ativa request scope tracking)
    - Adicionado `APP_FILTER` com `SentryGlobalFilter` (captura exceções não tratadas — filtra 4xx automaticamente, envia apenas erros reais)
    - Adicionado `APP_INTERCEPTOR` com `SentryUserContextInterceptor`
    - `APP_FILTER` registrado antes dos `APP_GUARD` para garantir que erros de guards também sejam capturados

  - **`src/config/env.validation.ts`**
    Adicionado `SENTRY_DSN: Joi.string().uri().optional()` — variável opcional para não quebrar deploys sem Sentry.

  - **`apps/api/.env.example`**
    Adicionado `SENTRY_DSN=""` com instrução de deixar vazio para desabilitar em dev.

  - **`.env.staging.example`** e **`render.yaml`**
    Adicionado `SENTRY_DSN` como variável `[MANUAL]` no staging (obter no painel do Sentry → Project Settings → DSN).

  ### Fluxo de captura por request


  ```

  Request → JwtAuthGuard → TenantGuard → PlanLimitsGuard
               ↓ (user autenticado)
         SentryUserContextInterceptor → Sentry.setUser() + setTag()
               ↓
         Controller / Service
               ↓ (se exceção 5xx)
         SentryGlobalFilter → Sentry.captureException() com contexto já definido
  ```


  ### Validação


  - Lint: sem erros nos arquivos criados/modificados (`eslint` passou com 0
  warnings)

  - Type-check: sem erros nos arquivos novos (8 falhas pré-existentes em spec
  files de `jobs` e `scripts`, não relacionadas)

  - Testes: 582 testes passam; 8 suites com falha pré-existente (type errors em
  `jobs.controller.spec.ts`, `get-job-status`, `media-search`,
  `generate-script`, `get-budget-summary`, `scripts.controller`) — nenhum
  introduzido por esta task


  ### Próximo passo para ativar


  1. Criar projeto no Sentry (sentry.io → New Project → Node.js/NestJS)

  2. Copiar o DSN gerado

  3. Setar `SENTRY_DSN=https://...@sentry.io/xxxxx` nas env vars do Render
  (staging) e no `.env` local quando quiser testar
id: TASK-002
score: 27
createdAt: '2026-04-17T16:16:26.541Z'
updatedAt: '2026-04-17T18:30:12.420Z'
filePath: /projects/nexvideo/.pm/tasks/TASK-002.md
---
## Objetivo

Integrar Sentry na API NestJS

## Critérios de Aceite

- [x] SDK do Sentry instalado e inicializado no bootstrap da API
- [x] DSN configurado via variável de ambiente por ambiente
- [x] Erros não tratados enviados automaticamente ao Sentry
- [x] Contexto de usuário e organização anexado aos eventos

## Implementação

### Pacote instalado

```
@sentry/nestjs  (apps/api)
```

### Arquivos criados

- **`src/common/interceptors/sentry-user-context.interceptor.ts`**
  Interceptor global (`APP_INTERCEPTOR`) que roda após os guards (JWT já validado).
  Extrai `request.user` (JwtPayload) e configura o scope do Sentry com:
  - `Sentry.setUser({ id: sub, email })` — identidade do usuário
  - `Sentry.setTag('organization_id', organizationId)` — contexto de tenant
  - `Sentry.setTag('user_role', role)` — papel do usuário

### Arquivos modificados

- **`src/main.ts`**
  Chama `Sentry.init()` no início do `bootstrap()`, antes do `NestFactory.create()`.
  - `dsn: process.env.SENTRY_DSN`
  - `environment: process.env.NODE_ENV` (diferencia dev/staging/prod automaticamente)
  - `enabled: !!process.env.SENTRY_DSN` (desabilitado quando DSN não definido — sem ruído em dev local)
  - `tracesSampleRate: 1.0`

- **`src/app.module.ts`**
  - Adicionado `SentryModule.forRoot()` como primeiro import (ativa request scope tracking)
  - Adicionado `APP_FILTER` com `SentryGlobalFilter` (captura exceções não tratadas — filtra 4xx automaticamente, envia apenas erros reais)
  - Adicionado `APP_INTERCEPTOR` com `SentryUserContextInterceptor`
  - `APP_FILTER` registrado antes dos `APP_GUARD` para garantir que erros de guards também sejam capturados

- **`src/config/env.validation.ts`**
  Adicionado `SENTRY_DSN: Joi.string().uri().optional()` — variável opcional para não quebrar deploys sem Sentry.

- **`apps/api/.env.example`**
  Adicionado `SENTRY_DSN=""` com instrução de deixar vazio para desabilitar em dev.

- **`.env.staging.example`** e **`render.yaml`**
  Adicionado `SENTRY_DSN` como variável `[MANUAL]` no staging (obter no painel do Sentry → Project Settings → DSN).

### Fluxo de captura por request

```
Request → JwtAuthGuard → TenantGuard → PlanLimitsGuard
             ↓ (user autenticado)
       SentryUserContextInterceptor → Sentry.setUser() + setTag()
             ↓
       Controller / Service
             ↓ (se exceção 5xx)
       SentryGlobalFilter → Sentry.captureException() com contexto já definido
```

### Validação

- Lint: sem erros nos arquivos criados/modificados (`eslint` passou com 0 warnings)
- Type-check: sem erros nos arquivos novos (8 falhas pré-existentes em spec files de `jobs` e `scripts`, não relacionadas)
- Testes: 582 testes passam; 8 suites com falha pré-existente (type errors em `jobs.controller.spec.ts`, `get-job-status`, `media-search`, `generate-script`, `get-budget-summary`, `scripts.controller`) — nenhum introduzido por esta task

### Próximo passo para ativar

1. Criar projeto no Sentry (sentry.io → New Project → Node.js/NestJS)
2. Copiar o DSN gerado
3. Setar `SENTRY_DSN=https://...@sentry.io/xxxxx` nas env vars do Render (staging) e no `.env` local quando quiser testar
