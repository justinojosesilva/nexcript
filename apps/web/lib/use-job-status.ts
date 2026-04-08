import { useJobPolling, type JobStatus } from './use-job-polling';

/**
 * Simplified hook for job status polling.
 * Handles all state management automatically.
 */
export function useJobStatus(jobId: string) {
  return useJobPolling({ jobId });
}

/**
 * Get human-readable status label
 */
export function getJobStatusLabel(
  status: JobStatus['status'],
): string {
  const labels: Record<JobStatus['status'], string> = {
    pending: 'Aguardando',
    processing: 'Processando',
    completed: 'Concluído',
    failed: 'Falha',
    cancelled: 'Cancelado',
  };

  return labels[status] || status;
}

/**
 * Check if job is in a terminal state
 */
export function isJobTerminal(status: JobStatus['status']): boolean {
  return (
    status === 'completed' || status === 'failed' || status === 'cancelled'
  );
}
