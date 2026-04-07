import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ChannelsController } from './channels.controller';
import { CreateChannelProfileUseCase } from './use-cases/create-channel-profile.use-case';
import { DeleteChannelProfileUseCase } from './use-cases/delete-channel-profile.use-case';
import { GetChannelProfileUseCase } from './use-cases/get-channel-profile.use-case';
import { ListChannelProfilesUseCase } from './use-cases/list-channel-profiles.use-case';
import { UpdateChannelProfileUseCase } from './use-cases/update-channel-profile.use-case';

@Module({
  imports: [RepositoriesModule],
  controllers: [ChannelsController],
  providers: [
    CreateChannelProfileUseCase,
    ListChannelProfilesUseCase,
    GetChannelProfileUseCase,
    UpdateChannelProfileUseCase,
    DeleteChannelProfileUseCase,
  ],
})
export class ChannelsModule {}
