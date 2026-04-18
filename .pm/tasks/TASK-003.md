---
title: Integrar Sentry nos workers BullMQ
type: feature
priority: CRITICAL
impact: 8
confidence: 9
effort: 3
tags:
  - observability
  - workers
  - sentry
acceptanceCriteria:
  - Sentry inicializado no entrypoint dos workers
  - Falhas de job capturadas com job name e payload redigido
  - Tags de queue e jobId adicionadas aos eventos
  - Alerta de erro crítico configurado no Sentry
status: IN_REVIEW
body: |
  ## Objetivo

  Integrar Sentry nos workers BullMQ

  ## Critérios de Aceite

  - [x] Sentry inicializado no entrypoint dos workers
  - [x] Falhas de job capturadas com job name e payload redigido
  - [x] Tags de queue e jobId adicionadas aos eventos
  - [ ] Alerta de erro crítico configurado no Sentry (requer configuração no dashboard — ver instruções abaixo)
id: TASK-003
score: 24
createdAt: '2026-04-17T16:16:26.544Z'
updatedAt: '2026-04-17T21:00:00.000Z'
filePath: /projects/nexvideo/.pm/tasks/TASK-003.md
---
## Objetivo

Integrar Sentry nos workers BullMQ

## Critérios de Aceite

- [x] Sentry inicializado no entrypoint dos workers
- [x] Falhas de job capturadas com job name e payload redigido
- [x] Tags de queue e jobId adicionadas aos eventos
- [ ] Alerta de erro crítico configurado no Sentry (requer configuração no dashboard — ver instruções abaixo)

## Implementação

### Pacote instalado

```
@sentry/node  (apps/worker)
```

### Arquivo modificado: `apps/worker/src/index.ts`

**1. Inicialização (`Sentry.init`)** — primeira linha executável, antes de Redis/Queue/Worker:
```typescript
Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV || "development",
  enabled: !!process.env.SENTRY_DSN,  // desabilitado sem DSN (dev local silencioso)
  tracesSampleRate: 1.0,
});
```

**2. Redação de payload** — `redactJobPayload()` remove chaves sensíveis e trunca strings longas:
- Chaves completamente removidas: `scriptBlocks`, `apiKey`, `token`, `password`, `secret`
- Strings > 200 chars truncadas com `...[truncated]`
- UUIDs e metadata de job preservados para debugging

**3. Captura estruturada no `catch` do processador principal:**
```typescript
Sentry.withScope((scope) => {
  scope.setTag("queue", QUEUE_NAME);          // nexvideo-jobs
  scope.setTag("job.id", job.id);
  scope.setTag("job.name", job.name);         // analyze-trends, generate-script, etc.
  scope.setTag("job.attempts_made", ...);
  scope.setContext("job", {
    id, name, attemptsMade,
    payload: redactJobPayload(job.data),       // payload redigido
  });
  Sentry.captureException(error);
});
```

**4. Captura de erros de infraestrutura:**
- `worker.on("error")` — falhas de conexão Redis/BullMQ → captura com tag `error.type: worker_infrastructure`
- `process.on("uncaughtException")` — captura + shutdown gracioso
- `process.on("unhandledRejection")` — captura (novo handler adicionado)

**5. Flush no shutdown:** `await Sentry.close(2000)` antes de `process.exit()` garante que eventos em buffer sejam enviados ao Sentry antes do processo encerrar.

### Outros arquivos modificados

- **`apps/worker/.env.example`** — adicionado `SENTRY_DSN=""`
- **`render.yaml`** — adicionado `SENTRY_DSN: sync: false` no serviço worker

### Validação

- Build: `tsup` compila limpo (`dist/index.js` 14.5 KB, `dist/index.mjs` 13 KB)
- Type-check: zero erros de tipo em `src/index.ts` (2 warnings pré-existentes no `tsconfig.json` sobre opções depreciadas do TS6, não relacionados)

### Configurar alerta no Sentry (passo manual)

Após criar o projeto no Sentry e fazer o primeiro deploy em staging:

1. Sentry → **Alerts → Create Alert Rule**
2. **Tipo:** Issue Alert (Error)
3. **Condições:**
   - `A new issue is created` com tag `queue = nexvideo-jobs`
   - OU `An issue occurs more than 3 times in 1 hour`
4. **Ação:** Send email / Slack notification
5. **Filtro recomendado:** apenas erros com tag `job.name` presente (exclui erros de infraestrutura de autenticação)

Alternativamente, usando a API do Sentry ou Terraform para IaC de alertas.
