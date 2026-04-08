'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { useQuery, useMutation } from '@tanstack/react-query';
import {
  ChevronDown,
  Zap,
  AlertCircle,
  Wand2,
} from 'lucide-react';
import {
  fetchScriptsByProject,
  updateScript,
  type ScriptBlockData,
  type ScriptData,
} from '@/lib/scripts-client';

// Script block type icons and labels
const BLOCK_TYPES = {
  HOOK: {
    icon: '🎯',
    label: 'GANCHO',
    description: 'Primeira impressão do vídeo',
  },
  INTRO: {
    icon: '👋',
    label: 'INTRODUÇÃO',
    description: 'Apresentação do tema',
  },
  DEVELOPMENT: {
    icon: '📚',
    label: 'DESENVOLVIMENTO',
    description: 'Conteúdo principal',
  },
  RETENTION_CTA: {
    icon: '📌',
    label: 'CTA RETENÇÃO',
    description: 'Call-to-action para retenção',
  },
  CONCLUSION: {
    icon: '✨',
    label: 'CONCLUSÃO',
    description: 'Encerramento do vídeo',
  },
} as const;

type BlockType = keyof typeof BLOCK_TYPES;

interface ScriptEditorProps {
  projectId: string;
  onNarrationGenerate?: (scriptId: string) => void;
}

// Skeleton Loading Component
function ScriptEditorSkeleton() {
  return (
    <div className="space-y-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <div
          key={i}
          className="rounded-lg border border-surface-container-high bg-surface-container-low p-6 animate-pulse"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-surface-container-high" />
              <div className="h-6 w-32 rounded bg-surface-container-high" />
            </div>
            <div className="h-5 w-5 rounded bg-surface-container-high" />
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded bg-surface-container-high" />
            <div className="flex gap-4">
              <div className="h-4 w-24 rounded bg-surface-container-high" />
              <div className="h-4 w-28 rounded bg-surface-container-high" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

// Script block component with edit capabilities
interface EditableBlockProps {
  block: ScriptBlockData;
  type: BlockType;
  onBlockUpdate: (updatedBlock: ScriptBlockData) => void;
}

function EditableBlock({ block, type, onBlockUpdate }: EditableBlockProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [content, setContent] = useState(block.content);
  const [duration, setDuration] = useState(block.duration);

  const blockConfig = BLOCK_TYPES[type];

  // Calculate word count
  const wordCount = content.trim().split(/\s+/).length;

  // Calculate estimated duration in seconds (assuming ~140 words per minute)
  const estimatedDurationFromWords = Math.round((wordCount / 140) * 60);

  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    onBlockUpdate({
      ...block,
      content: newContent,
      duration: estimatedDurationFromWords,
    });
  };

  const handleDurationChange = (newDuration: number) => {
    setDuration(newDuration);
    onBlockUpdate({
      ...block,
      duration: newDuration,
    });
  };

  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container p-6 transition-all duration-200 hover:border-primary/30">
      {/* Block header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 flex w-full items-center justify-between text-left"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{blockConfig.icon}</span>
          <div>
            <h3 className="font-headline text-sm font-semibold text-primary">
              {blockConfig.label}
            </h3>
            <p className="text-xs text-on-surface-variant">
              {blockConfig.description}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-on-surface-variant transition-transform duration-200 ${
            isExpanded ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Block content - expandable */}
      {isExpanded && (
        <div className="space-y-4">
          {/* Editable textarea */}
          <textarea
            value={content}
            onChange={(e) => handleContentChange(e.target.value)}
            className="input-field min-h-[120px] resize-none font-body text-sm placeholder-on-surface-variant/40"
            placeholder={`Digite o conteúdo de ${blockConfig.label.toLowerCase()}...`}
          />

          {/* Metrics row */}
          <div className="flex flex-wrap gap-6 rounded-lg bg-surface-container-low p-4 text-sm">
            {/* Word count */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
                Palavras
              </p>
              <p className="mt-1 font-headline text-lg font-semibold text-primary">
                {wordCount}
              </p>
            </div>

            {/* Estimated duration */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
                Duração estimada
              </p>
              <div className="mt-1 flex items-center gap-2">
                <input
                  type="number"
                  min="1"
                  max="300"
                  value={Math.round(duration)}
                  onChange={(e) =>
                    handleDurationChange(parseInt(e.target.value, 10))
                  }
                  className="input-field w-20 px-2 py-1 text-sm"
                />
                <span className="text-sm text-on-surface-variant">seg</span>
              </div>
            </div>

            {/* Duration from word count (read-only reference) */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
                Duração (por palavras)
              </p>
              <p className="mt-1 font-headline text-lg font-semibold text-on-surface-variant">
                ~{estimatedDurationFromWords}s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ScriptEditor({ projectId, onNarrationGenerate }: ScriptEditorProps) {
  const [currentScript, setCurrentScript] = useState<ScriptData | null>(null);

  // Debounce timer
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch scripts
  const { data: fetchedScripts, isLoading, error } = useQuery({
    queryKey: ['scripts', projectId],
    queryFn: () => fetchScriptsByProject(projectId),
  });

  // Mutation for updating script
  const updateMutation = useMutation({
    mutationFn: (data: { scriptId: string; blocks: ScriptBlockData[] }) =>
      updateScript(data.scriptId, { blocks: data.blocks }),
    onSuccess: (updatedScript) => {
      setCurrentScript(updatedScript);
    },
  });

  // Initialize scripts on fetch
  useEffect(() => {
    if (fetchedScripts && fetchedScripts.length > 0) {
      const firstScript = fetchedScripts[0];
      if (firstScript) {
        setCurrentScript(firstScript);
      }
    }
  }, [fetchedScripts]);

  // Handle block update with debounced save
  const handleBlockUpdate = useCallback(
    (updatedBlock: ScriptBlockData) => {
      if (!currentScript) return;

      // Update local state immediately
      const updatedBlocks = currentScript.blocks.map((block) =>
        block.id === updatedBlock.id ? updatedBlock : block,
      );

      const updatedScript: ScriptData = {
        ...currentScript,
        blocks: updatedBlocks,
        wordCount: updatedBlocks.reduce(
          (total, block) => total + block.content.trim().split(/\s+/).length,
          0,
        ),
        estimatedDurationSec: updatedBlocks.reduce(
          (total, block) => total + block.duration,
          0,
        ),
      };

      setCurrentScript(updatedScript);

      // Debounced save to server
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }

      debounceTimerRef.current = setTimeout(() => {
        updateMutation.mutate({
          scriptId: currentScript.id,
          blocks: updatedBlocks,
        });
      }, 800);
    },
    [currentScript, updateMutation],
  );

  // Determine if narration button should be enabled
  const isNarrationEnabled =
    currentScript?.status === 'approved' ||
    currentScript?.status === 'published';

  const narrationTooltip = !isNarrationEnabled
    ? 'O roteiro precisa estar aprovado para gerar narração'
    : 'Gerar narração com IA';

  if (error) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-error bg-error/10 p-4 text-error">
        <AlertCircle className="h-5 w-5" />
        <p>Erro ao carregar os roteiros. Tente novamente.</p>
      </div>
    );
  }

  if (isLoading) {
    return <ScriptEditorSkeleton />;
  }

  if (!currentScript) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-outline-variant bg-surface-container p-12 text-center">
        <Wand2 className="mb-4 h-12 w-12 text-on-surface-variant/50" />
        <h3 className="font-headline text-lg font-semibold text-on-surface">
          Nenhum roteiro disponível
        </h3>
        <p className="mt-2 text-sm text-on-surface-variant">
          Gere um roteiro para este projeto para começar a editar.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Script header info */}
      <div className="rounded-lg border border-outline-variant bg-surface-container p-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline text-lg font-semibold text-on-surface">
              Editor de Roteiro
            </h2>
            <p className="mt-1 text-sm text-on-surface-variant">
              Edite os blocos de conteúdo em tempo real. As alterações são
              salvas automaticamente.
            </p>
          </div>
          <div className="text-right text-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
              Status
            </p>
            <p className="mt-1 font-headline font-semibold text-primary">
              {currentScript.status.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Script blocks */}
      <div className="space-y-4">
        {currentScript.blocks.map((block) => {
          // Determine block type from label
          const blockType = (
            Object.keys(BLOCK_TYPES) as BlockType[]
          ).find(
            (type) => BLOCK_TYPES[type].label === block.label,
          ) || ('HOOK' as BlockType);

          return (
            <EditableBlock
              key={block.id}
              block={block}
              type={blockType}
              onBlockUpdate={handleBlockUpdate}
            />
          );
        })}
      </div>

      {/* Summary metrics */}
      <div className="rounded-lg border border-outline-variant bg-surface-container-low p-6">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
              Total de palavras
            </p>
            <p className="mt-2 font-headline text-2xl font-bold text-primary">
              {currentScript.wordCount || 0}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
              Duração total
            </p>
            <p className="mt-2 font-headline text-2xl font-bold text-primary">
              {Math.round((currentScript.estimatedDurationSec || 0) / 60)}:
              {String((currentScript.estimatedDurationSec || 0) % 60).padStart(
                2,
                '0',
              )}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-on-surface-variant">
              Status de salvamento
            </p>
            <p className="mt-2 text-sm text-tertiary">
              {updateMutation.isPending ? 'Salvando...' : 'Salvo'}
            </p>
          </div>
        </div>
      </div>

      {/* Generate narration button */}
      <button
        disabled={!isNarrationEnabled || updateMutation.isPending}
        onClick={() => onNarrationGenerate?.(currentScript.id)}
        className="group relative w-full rounded-lg bg-gradient-to-r from-primary to-primary-container px-6 py-4 font-headline font-semibold text-on-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-primary/30"
        title={narrationTooltip}
      >
        <div className="flex items-center justify-center gap-2">
          <Zap className="h-5 w-5" />
          Gerar Narração
        </div>

        {/* Tooltip */}
        {!isNarrationEnabled && (
          <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-surface-container px-3 py-2 text-xs text-on-surface opacity-0 transition-opacity group-hover:opacity-100">
            {narrationTooltip}
          </div>
        )}
      </button>
    </div>
  );
}
