import { type ContentProject } from '@nexvideo/database';

export interface ContentProjectWithChannelProfile extends ContentProject {
  channelProfile: {
    id: string;
    name: string;
    platform: string;
  };
}

export interface IContentProjectRepository {
  findByOrg(
    organizationId: string,
  ): Promise<ContentProjectWithChannelProfile[]>;
  findById(id: string): Promise<ContentProjectWithChannelProfile | null>;
  create(data: Record<string, unknown>): Promise<ContentProject>;
  update(id: string, data: Record<string, unknown>): Promise<ContentProject>;
  updateStatus(id: string, newStatus: string): Promise<ContentProject>;
}
