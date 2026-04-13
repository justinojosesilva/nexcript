"use client";

import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ChevronDown } from "lucide-react";
import { fetchCompliance } from "@/lib/compliance-client";

interface ComplianceBadgeProps {
  projectId: string;
}

export function ComplianceBadge({ projectId }: ComplianceBadgeProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const {
    data: compliance,
    isLoading,
    error,
    refetch,
  } = useQuery({
    queryKey: ["compliance", projectId],
    queryFn: () => fetchCompliance(projectId),
  });

  if (isLoading) {
    return (
      <div className="h-20 w-full animate-pulse rounded-lg bg-neutral-800" />
    );
  }

  if (error) {
    return (
      <div className="rounded-lg border border-red-500/20 bg-red-500/10 p-4">
        <p className="text-sm text-red-300">
          Erro ao carregar dados de compliance
        </p>
      </div>
    );
  }

  // Determine color based on compliance score
  const getScoreColor = (score: number | null) => {
    if (score === null) return "bg-neutral-700/30 text-neutral-300";
    if (score >= 70) return "bg-green-500/20 text-green-300";
    if (score >= 50) return "bg-amber-500/20 text-amber-300";
    return "bg-red-500/20 text-red-300";
  };

  const getScoreLabel = (score: number | null) => {
    if (score === null) return "Não calculado";
    if (score >= 70) return "Adequado";
    if (score >= 50) return "Atenção";
    return "Crítico";
  };

  const scoreColor = getScoreColor(compliance?.complianceScore ?? null);
  const scoreLabel = getScoreLabel(compliance?.complianceScore ?? null);

  return (
    <div className="space-y-4">
      {/* Main Badge */}
      <div className={`rounded-lg border border-neutral-700 p-4 ${scoreColor}`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-neutral-400">
                Compliance
              </p>
              <p className="mt-1 text-2xl font-bold">
                {compliance?.complianceScore ?? "—"}
              </p>
            </div>
            <div className="text-sm font-medium">{scoreLabel}</div>
          </div>

          {compliance?.complianceScore !== null && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="flex items-center gap-1 rounded-md p-2 transition-colors hover:bg-neutral-700/30"
            >
              <ChevronDown
                className={`h-4 w-4 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>
          )}

          {compliance?.complianceScore === null && (
            <button
              onClick={() => refetch()}
              className="rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium transition-colors hover:bg-white/20"
            >
              Verificar Compliance
            </button>
          )}
        </div>
      </div>

      {/* Expanded Breakdown */}
      {isExpanded && compliance && compliance.complianceScore !== null && (
        <div className="space-y-3 rounded-lg border border-neutral-700 bg-neutral-800/50 p-4">
          {/* Score Breakdown */}
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-white">
              Detalhamento de Scores
            </h3>

            {/* Originality Score */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-neutral-300">Originalidade</span>
                <span className="text-sm font-medium text-white">
                  {compliance.originalityScore ?? "—"}
                </span>
              </div>
              {compliance.originalityScore !== null && (
                <div className="h-2 w-full rounded-full bg-neutral-700">
                  <div
                    className={`h-full rounded-full ${
                      compliance.originalityScore >= 70
                        ? "bg-green-500"
                        : compliance.originalityScore >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min(compliance.originalityScore, 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Copyright Score */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-neutral-300">Direitos Autorais</span>
                <span className="text-sm font-medium text-white">
                  {compliance.copyrightScore ?? "—"}
                </span>
              </div>
              {compliance.copyrightScore !== null && (
                <div className="h-2 w-full rounded-full bg-neutral-700">
                  <div
                    className={`h-full rounded-full ${
                      compliance.copyrightScore >= 70
                        ? "bg-green-500"
                        : compliance.copyrightScore >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min(compliance.copyrightScore, 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>

            {/* Monetization Score */}
            <div>
              <div className="mb-1 flex items-center justify-between">
                <span className="text-sm text-neutral-300">Monetização</span>
                <span className="text-sm font-medium text-white">
                  {compliance.monetizationScore ?? "—"}
                </span>
              </div>
              {compliance.monetizationScore !== null && (
                <div className="h-2 w-full rounded-full bg-neutral-700">
                  <div
                    className={`h-full rounded-full ${
                      compliance.monetizationScore >= 70
                        ? "bg-green-500"
                        : compliance.monetizationScore >= 50
                          ? "bg-amber-500"
                          : "bg-red-500"
                    }`}
                    style={{
                      width: `${Math.min(compliance.monetizationScore, 100)}%`,
                    }}
                  />
                </div>
              )}
            </div>
          </div>

          {/* Warnings */}
          {compliance.warnings.length > 0 && (
            <div className="border-t border-neutral-700 pt-4">
              <h3 className="mb-3 text-sm font-medium text-white">Avisos</h3>
              <div className="space-y-2">
                {compliance.warnings.map((warning, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 rounded-md bg-amber-500/10 p-3 text-sm text-amber-200"
                  >
                    <span className="shrink-0">⚠️</span>
                    <span>{warning}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
