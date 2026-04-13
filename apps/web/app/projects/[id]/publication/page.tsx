"use client";

import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { ArrowLeft, Copy, CheckCircle2, Sparkles } from "lucide-react";
import { useState } from "react";
import { fetchProject } from "@/lib/projects-client";
import {
  fetchPublicationMetadata,
  selectTitle,
  type TitleVariant,
} from "@/lib/publication-client";

const TAG_CATEGORY_LABELS: Record<string, string> = {
  primary: "Primárias",
  secondary: "Secundárias",
  niche: "Nicho",
  trend: "Tendência",
};

const TAG_CATEGORY_COLORS: Record<string, string> = {
  primary: "bg-purple-500/20 text-purple-200 border-purple-500/30",
  secondary: "bg-blue-500/20 text-blue-200 border-blue-500/30",
  niche: "bg-amber-500/20 text-amber-200 border-amber-500/30",
  trend: "bg-pink-500/20 text-pink-200 border-pink-500/30",
};

export default function PublicationPage() {
  const { id: projectId } = useParams<{ id: string }>();
  const router = useRouter();
  const [selectedTitleText, setSelectedTitleText] = useState<string | null>(null);
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);

  // Fetch project
  const {
    data: project,
    isLoading: isLoadingProject,
    error: projectError,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => fetchProject(projectId),
  });

  // Fetch publication metadata
  const {
    data: publication,
    isLoading: isLoadingPublication,
    refetch: refetchPublication,
  } = useQuery({
    queryKey: ["publication", projectId],
    queryFn: () => fetchPublicationMetadata(projectId),
    enabled: !!projectId,
  });

  // Select title mutation
  const selectTitleMutation = useMutation({
    mutationFn: (title: string) => selectTitle(projectId, title),
    onSuccess: () => {
      refetchPublication();
    },
  });

  const handleSelectTitle = (title: string) => {
    setSelectedTitleText(title);
    selectTitleMutation.mutate(title);
  };

  const handleCopyTags = async () => {
    if (!publication?.tags || publication.tags.length === 0) return;

    const tagText = publication.tags.join(", ");
    try {
      await navigator.clipboard.writeText(tagText);
      setCopiedToClipboard(true);
      setTimeout(() => setCopiedToClipboard(false), 2000);
    } catch (err) {
      console.error("Failed to copy tags:", err);
    }
  };

  if (isLoadingProject || isLoadingPublication) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <div className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
          <div className="mx-auto max-w-6xl px-6 py-5">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
          </div>
        </div>
        <div className="mx-auto max-w-4xl px-6 py-12">
          <div className="mb-8 h-8 w-48 animate-pulse rounded bg-neutral-800" />
          <div className="space-y-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-24 animate-pulse rounded-lg bg-neutral-800" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (projectError || !project) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-900">
        <div className="text-center">
          <p className="text-red-400">Projeto não encontrado.</p>
          <button
            onClick={() => router.push("/dashboard")}
            className="btn-secondary mt-4"
          >
            Voltar ao Dashboard
          </button>
        </div>
      </div>
    );
  }

  const titleVariants = publication?.titleVariants || [];
  const tags = publication?.tags || [];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push(`/projects/${projectId}`)}
              className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              {project.title}
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-4xl px-6 py-10">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Título e Tags
          </h1>
          <p className="mt-2 text-neutral-400">
            Selecione o melhor título para sua publicação e gerencie as tags
          </p>
        </div>

        {/* No Data State */}
        {!publication || (titleVariants.length === 0 && tags.length === 0) ? (
          <div className="rounded-lg border border-dashed border-neutral-700 bg-neutral-800/30 p-12 text-center">
            <Sparkles className="mx-auto mb-3 h-8 w-8 text-neutral-400" />
            <p className="text-neutral-400">
              Nenhum título ou tag gerado ainda. Crie um roteiro para gerar sugestões.
            </p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Title Variants Section */}
            {titleVariants.length > 0 && (
              <section>
                <h2 className="mb-4 font-display text-xl font-semibold text-white">
                  Variações de Título
                </h2>
                <div className="space-y-3">
                  {titleVariants.map((variant: TitleVariant, idx: number) => {
                    const isSelected =
                      publication?.title === variant.title ||
                      selectedTitleText === variant.title;

                    return (
                      <button
                        key={`${variant.title}-${idx}`}
                        onClick={() => handleSelectTitle(variant.title)}
                        disabled={selectTitleMutation.isPending}
                        className={`group w-full transition-all ${
                          isSelected
                            ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20"
                            : "ring-1 ring-neutral-700 hover:ring-purple-500/50"
                        }`}
                      >
                        <div className="card relative !cursor-pointer p-4 text-left">
                          {/* Selected Indicator */}
                          {isSelected && (
                            <div className="absolute right-4 top-4 flex items-center gap-2">
                              <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                              <span className="text-xs font-medium text-emerald-300">
                                Selecionado
                              </span>
                            </div>
                          )}

                          {/* Title Content */}
                          <div className="pr-32">
                            <h3 className="font-display text-lg font-semibold text-white">
                              {variant.title}
                            </h3>
                            <p className="mt-2 text-sm text-neutral-400">
                              {variant.ctReason}
                            </p>
                          </div>

                          {/* Score Badge */}
                          <div className="mt-3 flex items-center justify-between">
                            <div className="inline-flex items-center gap-2 rounded-full bg-purple-500/20 px-3 py-1.5">
                              <span className="text-xs font-medium text-purple-200">
                                CTR Score
                              </span>
                              <div className="h-6 w-12 rounded-full bg-neutral-900 flex items-center justify-center">
                                <span className="font-display text-sm font-bold text-purple-300">
                                  {variant.score}%
                                </span>
                              </div>
                            </div>

                            {/* Character Count */}
                            <span className="text-xs text-neutral-500">
                              {variant.title.length} caracteres
                            </span>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Tags Section */}
            {tags.length > 0 && (
              <section>
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="font-display text-xl font-semibold text-white">
                    Tags
                  </h2>
                  <button
                    onClick={handleCopyTags}
                    className="btn-secondary flex items-center gap-2 px-3 py-2 text-sm"
                  >
                    {copiedToClipboard ? (
                      <>
                        <CheckCircle2 className="h-4 w-4" />
                        Copiadas!
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copiar todas
                      </>
                    )}
                  </button>
                </div>

                {/* Tags by Category */}
                <div className="space-y-4">
                  {Object.entries(TAG_CATEGORY_LABELS).map(([category, label]) => {
                    // For now, distribute tags evenly among categories
                    // In production, this would come from the backend
                    const tagsPerCategory = Math.ceil(tags.length / 4);
                    const startIdx =
                      Object.keys(TAG_CATEGORY_LABELS).indexOf(category) *
                      tagsPerCategory;
                    const categoryTags = tags.slice(
                      startIdx,
                      startIdx + tagsPerCategory,
                    );

                    if (categoryTags.length === 0) return null;

                    return (
                      <div key={category}>
                        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-400">
                          {label}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {categoryTags.map((tag: string) => (
                            <span
                              key={tag}
                              className={`inline-flex rounded-full px-3 py-1.5 text-xs font-medium border transition-all ${
                                TAG_CATEGORY_COLORS[category]
                              }`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* All Tags Info */}
                <div className="mt-6 rounded-lg border border-neutral-700 bg-neutral-800/50 p-3">
                  <p className="text-xs text-neutral-400">
                    {tags.length} tag{tags.length !== 1 ? "s" : ""} gerada
                    {tags.length !== 1 ? "s" : ""}
                  </p>
                </div>
              </section>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
