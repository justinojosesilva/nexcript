"use client";

import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { Plus, Zap } from "lucide-react";
import { fetchScriptsByProject, type ScriptData } from "@/lib/scripts-client";

// Status color mapping
const STATUS_COLORS: Record<string, string> = {
  draft: "bg-neutral-600/30 text-neutral-300",
  reviewing: "bg-yellow-500/20 text-yellow-300",
  approved: "bg-green-500/20 text-green-300",
  published: "bg-purple-500/20 text-purple-300",
};

const STATUS_LABELS: Record<string, string> = {
  draft: "Rascunho",
  reviewing: "Em Revisão",
  approved: "Aprovado",
  published: "Publicado",
};

const FORMAT_LABELS: Record<string, string> = {
  short_form: "Short Form",
  medium_form: "Medium Form",
  long_form: "Long Form",
  carousel: "Carousel",
  podcast: "Podcast",
};

// Loading skeleton
function ScriptSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-neutral-700 bg-neutral-800 p-6">
      <div className="mb-4 flex items-start justify-between">
        <div className="flex-1">
          <div className="mb-3 h-6 w-2/3 rounded bg-neutral-700" />
          <div className="h-4 w-1/2 rounded bg-neutral-700" />
        </div>
      </div>
      <div className="mb-4 flex gap-2">
        <div className="h-6 w-20 rounded-full bg-neutral-700" />
        <div className="h-6 w-24 rounded-full bg-neutral-700" />
      </div>
      <div className="flex items-center justify-between border-t border-neutral-700 pt-4">
        <div className="h-4 w-24 rounded bg-neutral-700" />
        <div className="h-4 w-16 rounded bg-neutral-700" />
      </div>
    </div>
  );
}

// Empty state
function EmptyState({ onGenerateClick }: { onGenerateClick: () => void }) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-700 px-12 py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20">
        <Zap className="h-8 w-8 text-purple-400" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">
        Nenhum roteiro criado
      </h3>
      <p className="mb-6 max-w-sm text-neutral-400">
        Gere seu primeiro roteiro com IA e comece a editar, revisar e publicar
        conteúdo de alta qualidade.
      </p>
      <button
        onClick={onGenerateClick}
        className="btn-primary flex items-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Gerar Primeiro Roteiro
      </button>
    </div>
  );
}

// Script card
function ScriptCard({ script }: { script: ScriptData }) {
  const router = useRouter();

  const statusColor = STATUS_COLORS[script.status] || STATUS_COLORS.draft;
  const statusLabel = STATUS_LABELS[script.status] || script.status;
  const formatLabel = FORMAT_LABELS[script.formatType] || script.formatType;

  const createdAt = new Date(script.createdAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  const durationMinutes = script.estimatedDurationSec
    ? Math.round(script.estimatedDurationSec / 60)
    : 0;

  return (
    <div
      onClick={() => router.push(`/scripts/${script.id}`)}
      className="group cursor-pointer rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20"
    >
      <div className="mb-3 flex items-start justify-between">
        <div className="flex-1">
          <h3 className="font-display text-lg font-semibold text-white transition-colors group-hover:text-purple-300">
            Roteiro #{script.id.slice(-6).toUpperCase()}
          </h3>
          <p className="mt-1 text-sm text-neutral-400">
            {script.wordCount ? `${script.wordCount} palavras` : "Roteiro novo"}
          </p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
        >
          {statusLabel}
        </span>
        <span className="inline-flex rounded-full bg-neutral-700/50 px-3 py-1 text-xs font-medium text-neutral-300">
          {formatLabel}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-700 pt-4">
        <span className="text-xs text-neutral-500">{createdAt}</span>
        <span className="text-xs font-medium text-purple-400">
          {durationMinutes > 0 ? `${durationMinutes} min` : "—"} →
        </span>
      </div>
    </div>
  );
}

interface ScriptsListProps {
  projectId: string;
  onGenerateClick?: () => void;
}

export function ScriptsList({ projectId, onGenerateClick }: ScriptsListProps) {
  const {
    data: scripts = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["scripts", projectId],
    queryFn: () => fetchScriptsByProject(projectId),
  });

  const handleGenerateClick = () => {
    onGenerateClick?.();
  };

  if (error) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-red-500/50 bg-red-500/10 p-4">
        <p className="text-red-300">
          Erro ao carregar roteiros. Por favor, tente novamente.
        </p>
      </div>
    );
  }

  const hasScripts = scripts && scripts.length > 0;

  return (
    <div className="space-y-6">
      {/* Header with title */}
      <div>
        <h2 className="font-display text-2xl font-bold text-white">Roteiros</h2>
        <p className="mt-1 text-sm text-neutral-400">
          Gerencie e edite todos os roteiros deste projeto
        </p>
      </div>

      {/* Content */}
      {isLoading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <ScriptSkeleton key={i} />
          ))}
        </div>
      ) : !hasScripts ? (
        <EmptyState onGenerateClick={handleGenerateClick} />
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {scripts.map((script) => (
            <ScriptCard key={script.id} script={script} />
          ))}
        </div>
      )}
    </div>
  );
}
