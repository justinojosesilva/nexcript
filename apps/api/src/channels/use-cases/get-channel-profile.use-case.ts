import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { type ChannelProfile } from '@nexcript/database';
import { ChannelProfileRepository } from '../../repositories/channel-profile.repository';

@Injectable()
export class GetChannelProfileUseCase {
  constructor(private readonly channelProfileRepo: ChannelProfileRepository) {}

  async execute(
    channelProfileId: string,
    organizationId: string,
  ): Promise<ChannelProfile> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    const channelProfile =
      await this.channelProfileRepo.findById(channelProfileId);

    if (!channelProfile) {
      throw new NotFoundException('Channel profile not found');
    }

    if (channelProfile.organizationId !== organizationId) {
      throw new ForbiddenException(
        'You do not have access to this channel profile',
      );
    }

    return channelProfile;
  }
}
