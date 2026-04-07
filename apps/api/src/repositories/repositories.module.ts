import { Module } from '@nestjs/common';
import { ChannelProfileRepository } from './channel-profile.repository';
import { ContentProjectRepository } from './content-project.repository';
import { OrganizationRepository } from './organization.repository';
import { UserRepository } from './user.repository';

@Module({
  providers: [
    OrganizationRepository,
    UserRepository,
    ChannelProfileRepository,
    ContentProjectRepository,
  ],
  exports: [
    OrganizationRepository,
    UserRepository,
    ChannelProfileRepository,
    ContentProjectRepository,
  ],
})
export class RepositoriesModule {}
