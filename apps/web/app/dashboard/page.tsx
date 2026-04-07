'use client';

import type { ContentProjectWithChannelProfile } from '@/lib/projects-client';
import { useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { removeToken } from '@/lib/auth-client';
import { fetchProjects } from '@/lib/projects-client';
import { Plus, Zap } from 'lucide-react';

function ProjectSkeleton() {
  return (
    <div className="animate-pulse rounded-lg border border-neutral-700 bg-neutral-800 p-6">
      <div className="mb-4 h-6 w-2/3 rounded bg-neutral-700" />
      <div className="mb-2 h-4 w-1/2 rounded bg-neutral-700" />
      <div className="mb-4 h-4 w-1/3 rounded bg-neutral-700" />
      <div className="flex gap-2">
        <div className="h-6 w-20 rounded-full bg-neutral-700" />
        <div className="h-6 w-20 rounded-full bg-neutral-700" />
      </div>
    </div>
  );
}

function EmptyState() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center rounded-lg border-2 border-dashed border-neutral-700 px-12 py-20 text-center">
      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-purple-500/20 to-purple-900/20">
        <Zap className="h-8 w-8 text-purple-400" />
      </div>
      <h3 className="mb-2 text-xl font-semibold text-white">
        Nenhum projeto criado
      </h3>
      <p className="mb-6 max-w-sm text-neutral-400">
        Crie seu primeiro projeto de conteúdo com IA e comece a produzir scripts,
        títulos e roteiros automaticamente.
      </p>
      <button
        onClick={() => router.push('/projects/new')}
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
    planning: 'bg-blue-500/20 text-blue-300',
    in_development: 'bg-yellow-500/20 text-yellow-300',
    in_review: 'bg-purple-500/20 text-purple-300',
    active: 'bg-green-500/20 text-green-300',
  };

  const statusLabels: Record<string, string> = {
    planning: 'Planejamento',
    in_development: 'Em Desenvolvimento',
    in_review: 'Em Revisão',
    active: 'Ativo',
  };

  const statusColor = statusColors[project.status] || statusColors.planning;
  const statusLabel = statusLabels[project.status] || project.status;

  const createdAt = new Date(project.createdAt).toLocaleDateString('pt-BR', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="group rounded-lg border border-neutral-700 bg-gradient-to-br from-neutral-800 to-neutral-900 p-6 transition-all duration-300 hover:border-purple-500/50 hover:shadow-lg hover:shadow-purple-500/20">
      <div className="mb-3 flex items-start justify-between">
        <h3 className="flex-1 font-display text-lg font-semibold text-white transition-colors group-hover:text-purple-300">
          {project.title}
        </h3>
      </div>

      <div className="mb-4 space-y-2 text-sm text-neutral-400">
        <p>
          <span className="text-neutral-500">Canal:</span>{' '}
          {project.channelProfile.name}
        </p>
        <p>
          <span className="text-neutral-500">Palavra-chave:</span>{' '}
          {project.keyword}
        </p>
        <p>
          <span className="text-neutral-500">Duração:</span>{' '}
          {project.durationMinutes ? `${project.durationMinutes} min` : '—'}
        </p>
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${statusColor}`}
        >
          {statusLabel}
        </span>
        <span className="inline-flex rounded-full bg-neutral-700/50 px-3 py-1 text-xs font-medium text-neutral-300">
          {project.format.replace(/_/g, ' ')}
        </span>
        <span className="inline-flex rounded-full bg-neutral-700/50 px-3 py-1 text-xs font-medium text-neutral-300">
          {project.niche}
        </span>
      </div>

      <div className="flex items-center justify-between border-t border-neutral-700 pt-4">
        <span className="text-xs text-neutral-500">{createdAt}</span>
        <button className="text-xs font-medium text-purple-400 transition-colors hover:text-purple-300">
          Ver Detalhes →
        </button>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const router = useRouter();
  const { data: projects = [], isLoading, error } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjects,
  });

  const handleLogout = () => {
    removeToken();
    router.push('/login');
  };

  const hasProjects = projects && projects.length > 0;

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/50 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-6 sm:py-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-3xl font-bold text-white sm:text-4xl">
                Projetos
              </h1>
              <p className="mt-2 text-neutral-400">
                Gerencia seus projetos de conteúdo com IA
              </p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/projects/new')}
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
          <div className="rounded-lg border border-red-500/50 bg-red-500/10 p-4">
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
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
