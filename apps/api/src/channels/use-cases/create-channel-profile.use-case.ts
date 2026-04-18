import { ForbiddenException, Injectable } from '@nestjs/common';
import { type ChannelProfile } from '@nexvideo/database';
import { ChannelProfileRepository } from '../../repositories/channel-profile.repository';
import { CreateChannelProfileDto } from '../dto/create-channel-profile.dto';

interface CreateChannelProfileInput extends CreateChannelProfileDto {
  organizationId: string;
  userId: string;
}

@Injectable()
export class CreateChannelProfileUseCase {
  constructor(private readonly channelProfileRepo: ChannelProfileRepository) {}

  async execute(input: CreateChannelProfileInput): Promise<ChannelProfile> {
    if (!input.organizationId || !input.userId) {
      throw new ForbiddenException('Missing organization or user context');
    }

    const languageCode = input.languageCode || 'pt-BR';

    return this.channelProfileRepo.create({
      organizationId: input.organizationId,
      userId: input.userId,
      name: input.name,
      platform: input.platform,
      niche: input.niche,
      tone: input.tone,
      narrationStyle: input.narrationStyle,
      languageCode,
    });
  }
}
