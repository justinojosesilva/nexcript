"use client";

import type { ContentProjectWithChannelProfile } from "@/lib/projects-client";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { removeToken } from "@/lib/auth-client";
import { fetchProjects } from "@/lib/projects-client";
import { Plus, Zap } from "lucide-react";

function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-xl border border-gray-700/30 bg-gray-900/50 p-6">
      <div className="mb-4 h-6 w-2/3 rounded bg-gray-800" />
      <div className="mb-2 h-4 w-1/2 rounded bg-gray-800" />
      <div className="mb-4 h-4 w-1/3 rounded bg-gray-800" />
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded-full bg-gray-800" />
        <div className="h-6 w-20 rounded-full bg-gray-800" />
      </div>
    </div>
  );
}

function EmptyState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-purple-500/30 px-12 py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/20 to-[#7C3AED]/10">
        <Zap className="h-8 w-8 text-[#7C3AED]" />
      </div>
      <h3 className="mb-2 text-xl font-headline font-bold text-white">
        Nenhum projeto criado
      </h3>
      <p className="mb-6 max-w-sm text-gray-400">
        Crie seu primeiro projeto de conteúdo com IA e comece a produzir
        scripts, títulos e roteiros automaticamente.
      </p>
      <button
        onClick={() => router.push("/projects/new")}
        className="btn-primary flex items-center gap-2"
      >
        <Plus className="h-4 w-4" />
        Novo Projeto
      </button>
    </div>
  );
}

function ProjectCard({
  project,
}: {
  project: ContentProjectWithChannelProfile;
}) {
  const statusColors: Record<string, string> = {
    planning: "bg-blue-500/20 text-blue-300",
    in_development: "bg-orange-500/20 text-orange-300",
    in_review: "bg-[#7C3AED]/20 text-[#A78BFA]",
    active: "bg-[#4EDEA3]/20 text-[#4EDEA3]",
  };

  const statusLabels: Record<string, string> = {
    planning: "Planejamento",
    in_development: "Em Desenvolvimento",
    in_review: "Em Revisão",
    active: "Ativo",
  };

  const statusColor = statusColors[project.status] || statusColors.planning;
  const statusLabel = statusLabels[project.status] || project.status;

  const createdAt = new Date(project.createdAt).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="group card cursor-pointer">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="flex-1 font-headline text-lg font-semibold text-white transition-colors group-hover:text-[#7C3AED]">
          {project.title}
        </h3>
      </div>

      <div className="mb-4 space-y-2 text-sm text-gray-400">
        <p>
          <span className="text-gray-500">Canal:</span>{" "}
          {project.channelProfile.name}
        </p>
        <p>
          <span className="text-gray-500">Palavra-chave:</span>{" "}
          {project.keyword}
        </p>
        <p>
          <span className="text-gray-500">Duração:</span>{" "}
          {project.durationMinutes ? `${project.durationMinutes} min` : "—"}
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
        >
          {statusLabel}
        </span>
        <span className="inline-flex rounded-full bg-gray-700/50 px-3 py-1 text-xs font-medium text-gray-300">
          {project.format.replace(/_/g, " ")}
        </span>
        <span className="inline-flex rounded-full bg-gray-700/50 px-3 py-1 text-xs font-medium text-gray-300">
          {project.niche}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-gray-700/50 pt-4">
        <span className="text-xs text-gray-500">{createdAt}</span>
        <button className="text-xs font-medium text-[#7C3AED] transition-colors hover:text-[#A78BFA] cursor-pointer">
          Ver Detalhes →
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const {
    data: projects = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["projects"],
    queryFn: fetchProjects,
  });

  const handleLogout = () => {
    removeToken();
    router.push("/login");
  };

  const hasProjects = projects && projects.length > 0;

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Header */}
      <div className="border-b border-gray-800/50 bg-[#0E0E0E]/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-headline text-3xl font-bold text-white sm:text-4xl">
                Projetos
              </h1>
              <p className="mt-2 text-gray-400">
                Gerencia seus projetos de conteúdo com IA
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push("/projects/new")}
                className="btn-primary flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Novo Projeto
              </button>
              <button onClick={handleLogout} className="btn-secondary">
                Sair
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
        {error ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-red-300">
              Erro ao carregar projetos. Por favor, tente novamente.
            </p>
          </div>
        ) : isLoading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <ProjectSkeleton key={i} />
            ))}
          </div>
        ) : !hasProjects ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
            {projects.map((project) => (
              <div key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
