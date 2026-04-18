#!/usr/bin/env bash
# Inicializa a pasta .pm do nexvideo com a estrutura do PM.md.
# Uso: bash scripts/pm-init.sh
# Executar na raiz do repositório nexvideo.

set -euo pipefail

GREEN='\033[0;32m'; CYAN='\033[0;36m'; RESET='\033[0m'

echo -e "${CYAN}nexvideo — Inicializando PM.md${RESET}"
echo ""

# ── Estrutura de diretórios ───────────────────────────────────────────────────
mkdir -p .pm/tasks .pm/sprints .pm/hooks

# ── roadmap.md ────────────────────────────────────────────────────────────────
# Já existe — copiar o nexvideo_ROADMAP_V2.md gerado para cá:
# cp /caminho/para/nexvideo_ROADMAP_V2.md .pm/roadmap.md
echo -e "${GREEN}  ✓ Diretórios criados${RESET}"

# ── current-task (não versionado) ────────────────────────────────────────────
echo "" > .pm/current-task
echo "  .pm/current-task" >> .gitignore
echo -e "${GREEN}  ✓ current-task criado e adicionado ao .gitignore${RESET}"

# ── Copiar arquivos gerados ───────────────────────────────────────────────────
# Substitua os caminhos abaixo pelos arquivos baixados:
# cp nexvideo_ROADMAP_V2.md      .pm/roadmap.md
# cp backlog.md                  .pm/backlog.md
# cp SPRINT-07-PRE.md            .pm/sprints/SPRINT-07-PRE.md
# cp SPRINT-07.md                .pm/sprints/SPRINT-07.md
echo -e "${GREEN}  ✓ Estrutura pronta — copie os arquivos .md para .pm/${RESET}"

# ── Hooks do PM.md ────────────────────────────────────────────────────────────
# Se você tiver os hooks do PM.md, instale:
# bash /caminho/para/pmmd/scripts/install-hooks.sh
echo ""
echo -e "${GREEN}Pronto! Próximos passos:${RESET}"
echo ""
echo "  1. Copie roadmap.md, backlog.md e os arquivos de sprint para .pm/"
echo "  2. Inicie a API do PM.md: pnpm dev:api"
echo "  3. Gere as tasks automaticamente:"
echo "     POST /ai/generate-tasks { projectPath: '$(pwd)' }"
echo ""
echo "  Para ativar uma task:"
echo "     echo 'TASK-001' > .pm/current-task"
