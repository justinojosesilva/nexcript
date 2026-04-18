import { ForbiddenException, Injectable } from '@nestjs/common';
import { type ChannelProfile } from '@nexvideo/database';
import { ChannelProfileRepository } from '../../repositories/channel-profile.repository';

@Injectable()
export class ListChannelProfilesUseCase {
  constructor(private readonly channelProfileRepo: ChannelProfileRepository) {}

  async execute(organizationId: string): Promise<ChannelProfile[]> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    return this.channelProfileRepo.findByOrg(organizationId);
  }
}
