export interface JobStatusResponse {
  id: string;
  status: 'PENDING' | 'PROCESSING' | 'DONE' | 'FAILED';
  progress?: number;
  data?: unknown;
  failedReason?: string;
}
