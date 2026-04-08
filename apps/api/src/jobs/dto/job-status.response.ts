export interface JobStatusResponse {
  jobId: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED';
  type: 'generate-script' | 'generate-narration' | 'analyze-trends' | 'health-check';
  progress?: number;
  result?: {
    scriptId?: string;
    narrationId?: string;
    [key: string]: unknown;
  };
  errorMessage?: string;
  createdAt: Date;
  updatedAt: Date;
}
