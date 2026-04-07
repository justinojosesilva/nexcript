import { getApiClient } from './api-client';

export interface ChannelProfile {
  id: string;
  name: string;
  platform: string;
  niche: string;
  tone: string;
  narrationStyle: string;
  languageCode: string;
  createdAt: string;
}

export async function fetchChannels(): Promise<ChannelProfile[]> {
  const client = getApiClient();
  const response = await client.get<ChannelProfile[]>('/channels');
  return response.data;
}

export async function createChannel(data: {
  name: string;
  platform: string;
  niche: string;
  tone: string;
  narrationStyle: string;
  languageCode?: string;
}): Promise<ChannelProfile> {
  const client = getApiClient();
  const response = await client.post<ChannelProfile>('/channels', data);
  return response.data;
}
