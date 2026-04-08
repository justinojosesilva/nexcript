'use client';

import { useParams, useRouter } from 'next/navigation';
import { useQuery } from '@tanstack/react-query';
import { ArrowLeft } from 'lucide-react';
import { fetchScript } from '@/lib/scripts-client';
import { ScriptEditor } from '@/components/script-editor';

export default function ScriptEditorPage() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();

  const { data: script, isLoading, error } = useQuery({
    queryKey: ['script', id],
    queryFn: () => fetchScript(id),
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-neutral-900">
        <div className="mx-auto max-w-4xl animate-pulse px-6 py-12">
          <div className="mb-8 h-8 w-48 rounded bg-neutral-800" />
          <div className="rounded-lg border border-neutral-700 bg-neutral-800 p-8">
            <div className="mb-4 h-8 w-2/3 rounded bg-neutral-700" />
            <div className="h-4 w-1/3 rounded bg-neutral-700" />
          </div>
        </div>
      </div>
    );
  }

  if (error || !script) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-neutral-900">
        <div className="text-center">
          <p className="text-red-400">Roteiro não encontrado.</p>
          <button
            onClick={() => router.back()}
            className="btn-secondary mt-4"
          >
            Voltar
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-4xl px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-10">
        <ScriptEditor projectId={script.projectId} />
      </div>
    </div>
  );
}
