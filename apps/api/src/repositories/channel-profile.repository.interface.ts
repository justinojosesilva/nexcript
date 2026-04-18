import { type ChannelProfile } from '@nexvideo/database';

export interface IChannelProfileRepository {
  findByOrg(organizationId: string): Promise<ChannelProfile[]>;
  findById(id: string): Promise<ChannelProfile | null>;
  create(data: Record<string, unknown>): Promise<ChannelProfile>;
  update(id: string, data: Record<string, unknown>): Promise<ChannelProfile>;
  delete(id: string): Promise<void>;
}
