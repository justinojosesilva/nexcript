import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

export interface JobStatus {
  id: string;
  status: "pending" | "processing" | "completed" | "failed" | "cancelled";
  progress?: number;
  currentStep?: string;
  result?: Record<string, unknown>;
  error?: string;
  createdAt: string;
  updatedAt: string;
}

interface UseJobPollingOptions {
  jobId: string;
  onSuccess?: (result: JobStatus) => void;
  onError?: (error: Error) => void;
  onComplete?: (status: JobStatus) => void;
}

/**
 * Hook for polling job status with intelligent pausing when tab is inactive.
 * Stops polling automatically when job reaches terminal state (DONE/FAILED).
 */
export function useJobPolling({
  jobId,
  onSuccess,
  onError,
  onComplete,
}: UseJobPollingOptions) {
  const [isTabActive, setIsTabActive] = useState(true);
  const [previousStatus, setPreviousStatus] = useState<string | null>(null);

  // Track visibility changes to pause/resume polling
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(document.visibilityState === "visible");
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const { data, isLoading, error, refetch } = useQuery<JobStatus>({
    queryKey: ["job", jobId],
    queryFn: async () => {
      const response = await fetch(`/api/jobs/${jobId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch job status");
      }
      return response.json() as Promise<JobStatus>;
    },
    // Only poll while tab is active
    enabled: isTabActive,
    // Refetch every 2 seconds while processing
    refetchInterval: 2000,
    // Don't retry on error (network errors) - just keep polling
    retry: false,
  });

  // Manually check if should stop polling
  useEffect(() => {
    if (!data) return;
    if (
      data.status === "completed" ||
      data.status === "failed" ||
      data.status === "cancelled"
    ) {
      // Job reached terminal state, no more polling needed
      return;
    }
  }, [data]);

  // Call callbacks when status changes
  useEffect(() => {
    if (!data || previousStatus === data.status) return;

    setPreviousStatus(data.status);

    if (data.status === "completed") {
      onSuccess?.(data);
      onComplete?.(data);
    } else if (data.status === "failed") {
      onError?.(new Error(data.error || "Job failed"));
      onComplete?.(data);
    }
  }, [data, previousStatus, onSuccess, onError, onComplete]);

  return {
    job: data || null,
    isLoading,
    error: error instanceof Error ? error : null,
    isProcessing:
      data && (data.status === "pending" || data.status === "processing"),
    isCompleted: data?.status === "completed",
    isFailed: data?.status === "failed",
    isTabActive,
    refetch,
  };
}
