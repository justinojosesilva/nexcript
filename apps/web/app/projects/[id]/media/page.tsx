"use client";

import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Search,
  ImageIcon,
  VideoIcon,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { fetchProject } from "@/lib/projects-client";
import {
  fetchScriptsByProject,
  type ScriptData,
} from "@/lib/scripts-client";
import {
  searchMedia,
  selectMedia,
  type SearchMediaPayload,
} from "@/lib/media-client";
import { type MediaAsset } from "@nexcript/shared";

interface BlockMediaState {
  blockId: string;
  assets: MediaAsset[];
  isLoading: boolean;
  selectedAssetId: string | null;
}

export default function MediaPage() {
  const { id: projectId } = useParams<{ id: string }>();
  const router = useRouter();
  const queryClient = useQueryClient();
  const [blockMediaMap, setBlockMediaMap] = useState<
    Map<string, BlockMediaState>
  >(new Map());

  // Fetch project
  const {
    data: project,
    isLoading: isLoadingProject,
    error: projectError,
  } = useQuery({
    queryKey: ["project", projectId],
    queryFn: () => fetchProject(projectId),
  });

  // Fetch scripts for this project
  const {
    data: scripts,
    isLoading: isLoadingScripts,
    error: scriptsError,
  } = useQuery({
    queryKey: ["scripts", projectId],
    queryFn: () => fetchScriptsByProject(projectId),
    enabled: !!projectId,
  });

  // Search media mutation
  const searchMediaMutation = useMutation({
    mutationFn: (payload: SearchMediaPayload) => searchMedia(payload),
    onSuccess: (assets, payload) => {
      const currentState = blockMediaMap.get(payload.blockId) || {
        blockId: payload.blockId,
        assets: [],
        isLoading: false,
        selectedAssetId: null,
      };
      blockMediaMap.set(payload.blockId, {
        ...currentState,
        assets,
        isLoading: false,
      });
      setBlockMediaMap(new Map(blockMediaMap));
    },
    onError: () => {
      // Error handling
    },
  });

  // Select media mutation
  const selectMediaMutation = useMutation({
    mutationFn: ({
      mediaSuggestionId,
      blockId,
    }: {
      mediaSuggestionId: string;
      blockId: string;
    }) => selectMedia(mediaSuggestionId, { blockId }),
    onSuccess: (_, { blockId, mediaSuggestionId }) => {
      const currentState = blockMediaMap.get(blockId);
      if (currentState) {
        blockMediaMap.set(blockId, {
          ...currentState,
          selectedAssetId: mediaSuggestionId,
        });
        setBlockMediaMap(new Map(blockMediaMap));
      }
      // Invalidate compliance query to trigger badge update
      queryClient.invalidateQueries({
        queryKey: ["compliance", projectId],
      });
    },
  });

  const handleSearchMedia = (
    blockId: string,
    type: "image" | "video",
    script: ScriptData,
  ) => {
    const currentState = blockMediaMap.get(blockId) || {
      blockId,
      assets: [],
      isLoading: true,
      selectedAssetId: null,
    };
    blockMediaMap.set(blockId, { ...currentState, isLoading: true });
    setBlockMediaMap(new Map(blockMediaMap));

    searchMediaMutation.mutate({
      scriptId: script.id,
      blockId,
      type,
    });
  };

  const handleSelectMedia = (blockId: string, assetId: string) => {
    selectMediaMutation.mutate({ mediaSuggestionId: assetId, blockId });
  };

  if (isLoadingProject || isLoadingScripts) {
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
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 h-8 w-48 animate-pulse rounded bg-neutral-800" />
          <div className="space-y-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="mb-4 h-6 w-32 rounded bg-neutral-800" />
                <div className="grid gap-4 sm:grid-cols-4">
                  {[...Array(4)].map((_, j) => (
                    <div key={j} className="h-48 rounded-lg bg-neutral-800" />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (projectError || !project || scriptsError || !scripts || scripts.length === 0) {
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
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-8 text-center">
            <p className="text-neutral-400">
              Nenhum script encontrado. Crie um script primeiro para buscar mídia.
            </p>
            <button
              onClick={() => router.push(`/projects/${projectId}`)}
              className="btn-secondary mt-4"
            >
              Voltar ao Projeto
            </button>
          </div>
        </div>
      </div>
    );
  }

  const script = scripts[0]!;
  const blocks = script.blocks || [];

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
      <div className="mx-auto max-w-6xl px-6 py-10">
        {/* Page Title */}
        <div className="mb-12">
          <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Sugestões de Mídia
          </h1>
          <p className="mt-2 text-neutral-400">
            Busque e selecione imagens e vídeos para cada bloco do seu roteiro
          </p>
        </div>

        {/* Blocks */}
        <div className="space-y-8">
          {blocks.length === 0 ? (
            <div className="rounded-lg border border-dashed border-neutral-700 bg-neutral-800/30 p-12 text-center">
              <Sparkles className="mx-auto mb-3 h-8 w-8 text-neutral-400" />
              <p className="text-neutral-400">
                O roteiro não possui blocos. Crie um roteiro com blocos para
                buscar mídia.
              </p>
            </div>
          ) : (
            blocks.map((block) => {
              const blockState = blockMediaMap.get(block.id) || {
                blockId: block.id,
                assets: [],
                isLoading: false,
                selectedAssetId: null,
              };

              return (
                <div key={block.id} className="card">
                  {/* Block Header */}
                  <div className="mb-6 border-b border-neutral-700 pb-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h2 className="font-display text-lg font-semibold text-white">
                          {block.label}
                        </h2>
                        <p className="mt-2 text-sm text-neutral-300">
                          {block.content}
                        </p>
                        <div className="mt-3 flex gap-2 text-xs text-neutral-400">
                          <span>Duração: {block.duration}s</span>
                          <span>•</span>
                          <span>Início: {block.startTime}s</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Search Buttons */}
                  <div className="mb-6 flex gap-3">
                    <button
                      onClick={() => handleSearchMedia(block.id, "image", script)}
                      disabled={blockState.isLoading}
                      className="btn-secondary flex items-center gap-2 disabled:opacity-50"
                    >
                      <ImageIcon className="h-4 w-4" />
                      {blockState.isLoading ? "Buscando..." : "Buscar Imagens"}
                    </button>
                    <button
                      onClick={() => handleSearchMedia(block.id, "video", script)}
                      disabled={blockState.isLoading}
                      className="btn-secondary flex items-center gap-2 disabled:opacity-50"
                    >
                      <VideoIcon className="h-4 w-4" />
                      {blockState.isLoading ? "Buscando..." : "Buscar Vídeos"}
                    </button>
                  </div>

                  {/* Assets Grid or Empty State */}
                  {blockState.isLoading ? (
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {[...Array(4)].map((_, i) => (
                        <div
                          key={i}
                          className="aspect-square animate-pulse rounded-lg bg-neutral-700"
                        />
                      ))}
                    </div>
                  ) : blockState.assets.length > 0 ? (
                    <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                      {blockState.assets.map((asset) => {
                        const isSelected =
                          blockState.selectedAssetId === asset.id;
                        return (
                          <button
                            key={asset.id}
                            onClick={() => handleSelectMedia(block.id, asset.id)}
                            className={`group relative overflow-hidden rounded-lg transition-all ${
                              isSelected
                                ? "ring-2 ring-emerald-500 shadow-lg shadow-emerald-500/20"
                                : "ring-1 ring-neutral-700 hover:ring-purple-500/50"
                            }`}
                          >
                            {/* Thumbnail */}
                            <Image
                              src={asset.thumbnailUrl}
                              alt={asset.id}
                              width={300}
                              height={300}
                              className="aspect-square h-full w-full object-cover"
                            />

                            {/* Overlay */}
                            <div
                              className={`absolute inset-0 flex items-center justify-center transition-all ${
                                isSelected
                                  ? "bg-emerald-500/10"
                                  : "bg-black/40 group-hover:bg-black/50"
                              }`}
                            >
                              {/* Selection Indicator */}
                              {isSelected ? (
                                <div className="flex flex-col items-center gap-2">
                                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500">
                                    <svg
                                      className="h-5 w-5 text-white"
                                      fill="currentColor"
                                      viewBox="0 0 20 20"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </div>
                                  <span className="text-xs font-medium text-emerald-300">
                                    Selecionado
                                  </span>
                                </div>
                              ) : (
                                <div className="text-center">
                                  <Search className="mx-auto mb-2 h-5 w-5 text-white opacity-0 transition-opacity group-hover:opacity-100" />
                                  <span className="text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
                                    Clique para selecionar
                                  </span>
                                </div>
                              )}
                            </div>

                            {/* Metadata */}
                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent px-2 py-2">
                              <div className="flex gap-1 text-xs">
                                <span className="rounded bg-neutral-900/80 px-1.5 py-0.5 text-neutral-300">
                                  {asset.provider}
                                </span>
                                <span className="rounded bg-neutral-900/80 px-1.5 py-0.5 text-neutral-300">
                                  {asset.type === "video" ? "Vídeo" : "Imagem"}
                                </span>
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="rounded-lg border border-dashed border-neutral-700 bg-neutral-800/30 py-8 text-center">
                      <Sparkles className="mx-auto mb-2 h-6 w-6 text-neutral-500" />
                      <p className="text-sm text-neutral-400">
                        Clique em &quot;Buscar Imagens&quot; ou &quot;Buscar Vídeos&quot;
                        {" "}
                        para encontrar mídia para este bloco
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
