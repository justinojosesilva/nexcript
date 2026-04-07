import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ChannelProfileRepository } from '../../repositories/channel-profile.repository';

@Injectable()
export class DeleteChannelProfileUseCase {
  constructor(private readonly channelProfileRepo: ChannelProfileRepository) {}

  async execute(
    channelProfileId: string,
    organizationId: string,
  ): Promise<void> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    const existing = await this.channelProfileRepo.findById(channelProfileId);

    if (!existing) {
      throw new NotFoundException('Channel profile not found');
    }

    if (existing.organizationId !== organizationId) {
      throw new ForbiddenException(
        'You do not have access to this channel profile',
      );
    }

    await this.channelProfileRepo.delete(channelProfileId);
  }
}
