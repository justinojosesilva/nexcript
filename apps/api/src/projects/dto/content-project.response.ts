import { FormatType, NicheCategory, ProjectStatus } from '@nexcript/shared';

export interface ChannelProfileSummary {
  id: string;
  name: string;
  platform: string;
}

export class ContentProjectResponse {
  id: string;

  organizationId: string;

  channelProfileId: string;

  title: string;

  keyword: string;

  niche: NicheCategory;

  format: FormatType;

  status: ProjectStatus;

  durationMinutes?: number;

  createdAt: Date;

  updatedAt: Date;

  channelProfile?: ChannelProfileSummary;
}
