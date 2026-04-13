import { Module } from '@nestjs/common';
import { ChannelProfileRepository } from './channel-profile.repository';
import { ContentProjectRepository } from './content-project.repository';
import { ExportJobRepository } from './export-job.repository';
import { OrganizationRepository } from './organization.repository';
import { UserRepository } from './user.repository';
import { ScriptRepository } from './script.repository';

@Module({
  providers: [
    OrganizationRepository,
    UserRepository,
    ChannelProfileRepository,
    ContentProjectRepository,
    ScriptRepository,
    ExportJobRepository,
  ],
  exports: [
    OrganizationRepository,
    UserRepository,
    ChannelProfileRepository,
    ContentProjectRepository,
    ScriptRepository,
    ExportJobRepository,
  ],
})
export class RepositoriesModule {}
