import { getApiClient } from "./api-client";

export interface CreateExportResponse {
  exportJobId: string;
  bullmqJobId: string;
}

export interface ExportStatusResponse {
  status: "pending" | "processing" | "completed" | "failed";
  exportUrl?: string;
  createdAt: string;
  isExpired?: boolean;
}

export interface CreateExportError {
  message: string;
  missing?: string[];
}

export async function createExport(projectId: string): Promise<CreateExportResponse> {
  const client = getApiClient();
  const response = await client.post<CreateExportResponse>("/export", {
    projectId,
  });
  return response.data;
}

export async function getExportStatus(
  exportJobId: string,
): Promise<ExportStatusResponse> {
  const client = getApiClient();
  const response = await client.get<ExportStatusResponse>(`/export/${exportJobId}`);
  return response.data;
}
