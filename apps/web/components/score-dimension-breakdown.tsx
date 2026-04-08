"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ChevronDown, ChevronUp } from "lucide-react";
import { getApiClient } from "@/lib/api-client";
import type { TrendAnalysis } from "@/lib/trends-client";

interface DimensionScore {
  label: string;
  value: number;
  key: "demand" | "saturation" | "monetization" | "qualityGap";
}

function getScoreColor(score: number): string {
  if (score >= 75) return "bg-[var(--tertiary)]";
  if (score >= 50) return "bg-[var(--secondary)]";
  return "bg-[var(--error)]";
}

function getScoreLabelColor(score: number): string {
  if (score >= 75) return "text-[var(--tertiary)]";
  if (score >= 50) return "text-[var(--secondary)]";
  return "text-[var(--error)]";
}

function DimensionBar({
  label,
  score,
  icon,
}: {
  label: string;
  score: number;
  icon: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-base">{icon}</span>
          <span className="text-sm font-medium text-neutral-300">{label}</span>
        </div>
        <span className={`text-sm font-bold ${getScoreLabelColor(score)}`}>
          {Math.round(score)}
        </span>
      </div>
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-neutral-700">
        <div
          className={`h-full transition-all duration-500 ${getScoreColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

export function ScoreDimensionBreakdown({
  analysis,
  projectId,
}: {
  analysis: TrendAnalysis;
  projectId: string;
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const router = useRouter();
  const apiClient = getApiClient();

  // Handle "Usar este tema" button click
  const handleUseTheme = () => {
    // If projectId is valid (not temp-project), redirect to wizard
    if (projectId && projectId !== "temp-project") {
      router.push(
        `/projects/${projectId}/scripts/new?trendAnalysisId=${analysis.id}`,
      );
    } else {
      // Fallback: update project with keyword for temp-project
      updateProjectMutation.mutate();
    }
  };

  const updateProjectMutation = useMutation({
    mutationFn: async () => {
      await apiClient.patch(`/projects/${projectId}`, {
        keyword: analysis.keyword,
      });
    },
  });

  const dimensions: DimensionScore[] = [
    { label: "Demanda", value: analysis.data.scores.demand, key: "demand" },
    {
      label: "Saturação",
      value: analysis.data.scores.saturation,
      key: "saturation",
    },
    {
      label: "Monetização",
      value: analysis.data.scores.monetization,
      key: "monetization",
    },
    {
      label: "Quality Gap",
      value: analysis.data.scores.qualityGap,
      key: "qualityGap",
    },
  ];

  const icons = ["📊", "📈", "💰", "✨"];

  return (
    <div className="space-y-4 rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="font-headline text-lg font-semibold text-white">
            {analysis.keyword}
          </h3>
          <p className="mt-1 text-xs text-neutral-500">
            Analisado em{" "}
            {new Date(analysis.analyzedAt).toLocaleDateString("pt-BR")}
          </p>
        </div>

        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <div
              className={`text-3xl font-bold font-headline ${getScoreLabelColor(analysis.data.finalScore)}`}
            >
              {Math.round(analysis.data.finalScore)}
            </div>
            <div className="text-xs text-neutral-400">Score Final</div>
          </div>
        </div>
      </div>

      {/* Classification Badge */}
      <div className="flex items-center justify-between border-t border-neutral-700 pt-4">
        <div>
          {analysis.data.classification === "PUBLISH" && (
            <span className="inline-flex rounded-full bg-[var(--tertiary)]/20 px-3 py-1 text-xs font-semibold text-[var(--tertiary)]">
              ✨ Publicar
            </span>
          )}
          {analysis.data.classification === "EVALUATE" && (
            <span className="inline-flex rounded-full bg-[var(--secondary)]/20 px-3 py-1 text-xs font-semibold text-[var(--secondary)]">
              📊 Avaliar
            </span>
          )}
          {analysis.data.classification === "AVOID" && (
            <span className="inline-flex rounded-full bg-[var(--error)]/20 px-3 py-1 text-xs font-semibold text-[var(--error)]">
              ⚠️ Evitar
            </span>
          )}
        </div>

        <button
          onClick={handleUseTheme}
          disabled={updateProjectMutation.isPending}
          className="rounded-lg bg-[var(--primary)] px-4 py-2 text-xs font-bold text-[var(--on-primary)] transition-all hover:shadow-lg hover:shadow-[var(--primary)]/30 disabled:opacity-50"
        >
          {updateProjectMutation.isPending ? "Carregando..." : "Usar este tema"}
        </button>
      </div>

      {/* Expandable Dimensions */}
      <div className="border-t border-neutral-700 pt-4">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between rounded-lg bg-neutral-700/30 px-4 py-3 transition-colors hover:bg-neutral-700/50"
        >
          <span className="text-sm font-semibold text-white">
            Detalhes das Dimensões
          </span>
          {isExpanded ? (
            <ChevronUp className="h-4 w-4 text-neutral-400" />
          ) : (
            <ChevronDown className="h-4 w-4 text-neutral-400" />
          )}
        </button>

        {isExpanded && (
          <div className="space-y-4 pt-4">
            {dimensions.map((dim, idx) => (
              <DimensionBar
                key={dim.key}
                label={dim.label}
                score={dim.value}
                icon={icons[idx] || "📊"}
              />
            ))}

            {/* Weights Info */}
            <div className="rounded-lg bg-neutral-700/20 p-3 text-xs text-neutral-400">
              <p className="mb-2 font-medium text-neutral-300">
                Pesos Utilizados
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  Demanda: {Math.round(analysis.data.weights.dimension1 * 100)}%
                </div>
                <div>
                  Saturação:{" "}
                  {Math.round(analysis.data.weights.dimension2 * 100)}%
                </div>
                <div>
                  Monetização:{" "}
                  {Math.round(analysis.data.weights.dimension3 * 100)}%
                </div>
                <div>
                  Gap: {Math.round(analysis.data.weights.dimension4 * 100)}%
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Error State */}
      {updateProjectMutation.isError && (
        <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-3 text-xs text-red-300">
          Erro ao atualizar projeto. Tente novamente.
        </div>
      )}

      {/* Success State */}
      {updateProjectMutation.isSuccess && (
        <div className="rounded-lg border border-green-500/50 bg-green-500/10 p-3 text-xs text-green-300">
          ✓ Projeto atualizado com sucesso!
        </div>
      )}
    </div>
  );
}
