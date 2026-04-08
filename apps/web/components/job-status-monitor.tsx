'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useJobPolling, type JobStatus } from '@/lib/use-job-polling';
import { useToast } from '@/lib/toast-context';
import { JobProgress } from './job-progress';

interface JobStatusMonitorProps {
  jobId: string;
  /** Redirect to this path when job completes successfully */
  onSuccessRedirect?: string;
  /** Callback when job completes (before redirect) */
  onSuccess?: (result: JobStatus) => void;
  /** Callback when job fails */
  onError?: (error: Error) => void;
  /** Show progress bar */
  showProgress?: boolean;
}

/**
 * Monitor job status and show progress/notifications.
 * Automatically polls every 2 seconds until job reaches terminal state.
 * Pauses polling when browser tab is inactive.
 */
export function JobStatusMonitor({
  jobId,
  onSuccessRedirect,
  onSuccess,
  onError,
  showProgress = true,
}: JobStatusMonitorProps) {
  const router = useRouter();
  const { addToast } = useToast();

  const { job, isProcessing, isTabActive } =
    useJobPolling({
      jobId,
      onSuccess: (result) => {
        onSuccess?.(result);

        // Show success toast
        addToast({
          type: 'success',
          title: 'Processamento concluído',
          message: 'O recurso foi criado com sucesso',
          action: onSuccessRedirect
            ? {
                label: 'Visualizar',
                onClick: () => router.push(onSuccessRedirect),
              }
            : undefined,
        });

        // Auto-redirect if specified
        if (onSuccessRedirect) {
          setTimeout(() => {
            router.push(onSuccessRedirect);
          }, 500);
        }
      },
      onError: (error) => {
        onError?.(error);

        // Show error toast
        addToast({
          type: 'error',
          title: 'Erro no processamento',
          message: error.message || 'Algo deu errado',
          action: {
            label: 'Ver detalhes',
            onClick: () => {
              // Could open a modal or navigate to error details
              console.error('Job failed:', error);
            },
          },
        });
      },
    });

  // Show notification when tab becomes inactive during processing
  useEffect(() => {
    if (!isProcessing || isTabActive) return;

    addToast({
      type: 'info',
      title: 'Processamento em andamento',
      message: 'Sua solicitação continua sendo processada em background',
    });
  }, [isTabActive, isProcessing, addToast]);

  return (
    <>
      {/* Progress bar shown during processing */}
      {showProgress && (
        <JobProgress
          currentStep={job?.currentStep}
          progress={job?.progress}
          isVisible={isProcessing ?? false}
        />
      )}

      {/* Hidden element that monitors job status via hook */}
      {/* The hook handles all polling and callbacks automatically */}
    </>
  );
}
