import { getApiClient } from "./api-client";

export interface ComplianceResponse {
  projectId: string;
  complianceScore: number | null;
  originalityScore: number | null;
  copyrightScore: number | null;
  monetizationScore: number | null;
  warnings: string[];
}

export async function fetchCompliance(
  projectId: string,
): Promise<ComplianceResponse> {
  const client = getApiClient();
  const response = await client.get<ComplianceResponse>(
    `/compliance/${projectId}`,
  );
  return response.data;
}
