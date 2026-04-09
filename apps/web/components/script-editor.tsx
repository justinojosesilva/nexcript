"use client";

import { useState, useCallback, useEffect, useRef } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import {
  ChevronDown,
  Zap,
  AlertCircle,
  Wand2,
  Target,
  Hand,
  BookOpen,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import {
  fetchScriptsByProject,
  updateScript,
  type ScriptBlockData,
  type ScriptData,
} from "@/lib/scripts-client";

// Script block type icons and labels - NEXCRIPT BRAND
const BLOCK_TYPES = {
  HOOK: {
    icon: Target,
    label: "GANCHO",
    description: "Primeira impressão do vídeo",
  },
  INTRO: {
    icon: Hand,
    label: "INTRODUÇÃO",
    description: "Apresentação do tema",
  },
  DEVELOPMENT: {
    icon: BookOpen,
    label: "DESENVOLVIMENTO",
    description: "Conteúdo principal",
  },
  RETENTION_CTA: {
    icon: MessageSquare,
    label: "CTA RETENÇÃO",
    description: "Call-to-action para retenção",
  },
  CONCLUSION: {
    icon: Sparkles,
    label: "CONCLUSÃO",
    description: "Encerramento do vídeo",
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
          className="rounded-xl border border-gray-800/30 bg-gray-900/50 p-6 animate-pulse"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded bg-gray-800" />
              <div className="h-6 w-32 rounded bg-gray-800" />
            </div>
            <div className="h-5 w-5 rounded bg-gray-800" />
          </div>
          <div className="space-y-3">
            <div className="h-24 rounded bg-gray-800" />
            <div className="flex gap-4">
              <div className="h-4 w-24 rounded bg-gray-800" />
              <div className="h-4 w-28 rounded bg-gray-800" />
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
  const IconComponent = blockConfig.icon;

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
    <div className="card">
      {/* Block header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mb-4 flex w-full items-center justify-between text-left cursor-pointer"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#7C3AED]/20">
            <IconComponent className="h-5 w-5 text-[#7C3AED]" />
          </div>
          <div>
            <h3 className="font-headline text-sm font-semibold text-white">
              {blockConfig.label}
            </h3>
            <p className="text-xs text-gray-400">
              {blockConfig.description}
            </p>
          </div>
        </div>
        <ChevronDown
          className={`h-5 w-5 text-gray-400 transition-transform duration-200 ${
            isExpanded ? "rotate-180" : ""
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
            className="input-field min-h-[120px] resize-none font-body text-sm"
            placeholder={`Digite o conteúdo de ${blockConfig.label.toLowerCase()}...`}
          />

          {/* Metrics row */}
          <div className="flex flex-wrap gap-6 rounded-lg bg-gray-900/50 p-4 text-sm border border-gray-800/30">
            {/* Word count */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Palavras
              </p>
              <p className="mt-1 font-headline text-lg font-semibold text-[#7C3AED]">
                {wordCount}
              </p>
            </div>

            {/* Estimated duration */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
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
                <span className="text-sm text-gray-400">seg</span>
              </div>
            </div>

            {/* Duration from word count (read-only reference) */}
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Duração (por palavras)
              </p>
              <p className="mt-1 font-headline text-lg font-semibold text-gray-400">
                ~{estimatedDurationFromWords}s
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export function ScriptEditor({
  projectId,
  onNarrationGenerate,
}: ScriptEditorProps) {
  const [currentScript, setCurrentScript] = useState<ScriptData | null>(null);

  // Debounce timer
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch scripts
  const {
    data: fetchedScripts,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["scripts", projectId],
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
    currentScript?.status === "approved" ||
    currentScript?.status === "published";

  const narrationTooltip = !isNarrationEnabled
    ? "O roteiro precisa estar aprovado para gerar narração"
    : "Gerar narração com IA";

  if (error) {
    return (
      <div className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-red-400">
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
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-800/30 bg-gray-900/50 p-12 text-center card">
        <Wand2 className="mb-4 h-12 w-12 text-gray-500" />
        <h3 className="font-headline text-lg font-semibold text-white">
          Nenhum roteiro disponível
        </h3>
        <p className="mt-2 text-sm text-gray-400">
          Gere um roteiro para este projeto para começar a editar.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Script header info */}
      <div className="card">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-headline text-lg font-semibold text-white">
              Editor de Roteiro
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Edite os blocos de conteúdo em tempo real. As alterações são
              salvas automaticamente.
            </p>
          </div>
          <div className="text-right text-sm">
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Status
            </p>
            <p className="mt-1 font-headline font-semibold text-[#7C3AED]">
              {currentScript.status.toUpperCase()}
            </p>
          </div>
        </div>
      </div>

      {/* Script blocks */}
      <div className="space-y-4">
        {currentScript.blocks.map((block) => {
          // Determine block type from label
          const blockType =
            (Object.keys(BLOCK_TYPES) as BlockType[]).find(
              (type) => BLOCK_TYPES[type].label === block.label,
            ) || ("HOOK" as BlockType);

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
      <div className="card">
        <div className="grid gap-6 sm:grid-cols-3">
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Total de palavras
            </p>
            <p className="mt-2 font-headline text-2xl font-bold text-[#7C3AED]">
              {currentScript.wordCount || 0}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Duração total
            </p>
            <p className="mt-2 font-headline text-2xl font-bold text-[#7C3AED]">
              {Math.round((currentScript.estimatedDurationSec || 0) / 60)}:
              {String((currentScript.estimatedDurationSec || 0) % 60).padStart(
                2,
                "0",
              )}
            </p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
              Status de salvamento
            </p>
            <p className="mt-2 text-sm text-[#4EDEA3]">
              {updateMutation.isPending ? "Salvando..." : "Salvo"}
            </p>
          </div>
        </div>
      </div>

      {/* Generate narration button */}
      <button
        disabled={!isNarrationEnabled || updateMutation.isPending}
        onClick={() => onNarrationGenerate?.(currentScript.id)}
        className="group relative w-full rounded-lg bg-gradient-to-r from-[#7C3AED] to-[#6D28D9] px-6 py-4 font-headline font-semibold text-white transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-lg hover:shadow-[#7C3AED]/30 cursor-pointer"
        title={narrationTooltip}
      >
        <div className="flex items-center justify-center gap-2">
          <Zap className="h-5 w-5" />
          Gerar Narração
        </div>

        {/* Tooltip */}
        {!isNarrationEnabled && (
          <div className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-gray-900 px-3 py-2 text-xs text-white border border-gray-800 opacity-0 transition-opacity group-hover:opacity-100">
            {narrationTooltip}
          </div>
        )}
      </button>
    </div>
  );
}
