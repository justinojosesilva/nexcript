---
id: SPRINT-07
goal: Analytics + Integração YouTube — fechar o ciclo com métricas reais e publicação
status: PLANNED
startDate: 2026-04-18
endDate: 2026-04-28
capacity: 60
taskIds:
  - TASK-024
  - TASK-025
  - TASK-026
  - TASK-027
  - TASK-028
  - TASK-029
  - TASK-030
  - TASK-031
  - TASK-032
  - TASK-033
---

## Goal

Dashboard de analytics mostra métricas reais do YouTube em menos de 10 segundos
após o sync. Usuário consegue ver performance dos projetos exportados diretamente
na plataforma.

**Pré-requisito: SPRINT-07-PRE 100% concluído.**

## Tasks

### Débitos herdados (resolver nos 2 primeiros dias)
- TASK-024 — [D1] Notificação de uso ao atingir 80% do limite
- TASK-025 — [D2] Remoção de membros e edição de role

### Entregas principais
- TASK-026 — [A1] YouTube OAuth 2.0 — fluxo completo com armazenamento de tokens
- TASK-027 — [A1] Schema Prisma: YouTubeCredential e VideoPerformance
- TASK-028 — [A2] YouTubeAnalyticsAdapter
- TASK-029 — [A2] YouTubeDataAdapter com gestão de quota
- TASK-030 — [A3] Sync job BullMQ com backoff exponencial
- TASK-031 — [A4] packages/ui — KPICard, LineChart, PerformanceTable
- TASK-032 — [A5] Dashboard de Analytics UI
- TASK-033 — [A6] QA e E2E — OAuth mock + sync + exibição
