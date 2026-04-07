import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { type ChannelProfile } from '@nexcript/database';
import { ChannelProfileRepository } from '../../repositories/channel-profile.repository';
import { UpdateChannelProfileDto } from '../dto/update-channel-profile.dto';

@Injectable()
export class UpdateChannelProfileUseCase {
  constructor(private readonly channelProfileRepo: ChannelProfileRepository) {}

  async execute(
    channelProfileId: string,
    organizationId: string,
    dto: UpdateChannelProfileDto,
  ): Promise<ChannelProfile> {
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

    const updateData: Record<string, unknown> = {};

    if (dto.name !== undefined) updateData.name = dto.name;
    if (dto.platform !== undefined) updateData.platform = dto.platform;
    if (dto.niche !== undefined) updateData.niche = dto.niche;
    if (dto.tone !== undefined) updateData.tone = dto.tone;
    if (dto.narrationStyle !== undefined)
      updateData.narrationStyle = dto.narrationStyle;
    if (dto.languageCode !== undefined)
      updateData.languageCode = dto.languageCode;

    return this.channelProfileRepo.update(channelProfileId, updateData);
  }
}
