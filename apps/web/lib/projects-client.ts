import { getApiClient } from './api-client';

export interface ChannelProfileData {
  id: string;
  name: string;
  platform: string;
}

export interface ContentProjectWithChannelProfile {
  id: string;
  title: string;
  keyword: string;
  niche: string;
  format: string;
  status: string;
  durationMinutes?: number;
  createdAt: string;
  updatedAt: string;
  channelProfile: ChannelProfileData;
}

export async function fetchProjects(): Promise<
  ContentProjectWithChannelProfile[]
> {
  const client = getApiClient();
  const response = await client.get<ContentProjectWithChannelProfile[]>(
    '/projects',
  );
  return response.data;
}

export async function createProject(data: {
  title: string;
  keyword: string;
  niche: string;
  format: string;
  channelProfileId: string;
  durationMinutes?: number;
}): Promise<ContentProjectWithChannelProfile> {
  const client = getApiClient();
  const response = await client.post<ContentProjectWithChannelProfile>(
    '/projects',
    data,
  );
  return response.data;
}

export async function fetchProject(
  id: string,
): Promise<ContentProjectWithChannelProfile> {
  const client = getApiClient();
  const response = await client.get<ContentProjectWithChannelProfile>(
    `/projects/${id}`,
  );
  return response.data;
}
