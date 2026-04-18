import { type MediaAsset } from "@nexvideo/shared";
import { getApiClient } from "./api-client";

export interface SearchMediaPayload {
  scriptId: string;
  blockId: string;
  type: "image" | "video";
  query?: string;
}

export interface SelectMediaPayload {
  blockId: string;
}

export async function searchMedia(
  payload: SearchMediaPayload,
): Promise<MediaAsset[]> {
  const client = getApiClient();
  const response = await client.post<MediaAsset[]>("/media/search", payload);
  return response.data;
}

export async function selectMedia(
  mediaSuggestionId: string,
  payload: SelectMediaPayload,
): Promise<{ success: boolean }> {
  const client = getApiClient();
  const response = await client.patch<{ success: boolean }>(
    `/media/${mediaSuggestionId}/select`,
    payload,
  );
  return response.data;
}
