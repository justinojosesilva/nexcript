import { ForbiddenException, Injectable } from '@nestjs/common';
import { ProjectStatus } from '@nexvideo/shared';
import { type ContentProject } from '@nexvideo/database';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { CreateContentProjectDto } from '../dto/create-content-project.dto';

interface CreateContentProjectInput extends CreateContentProjectDto {
  organizationId: string;
}

@Injectable()
export class CreateContentProjectUseCase {
  constructor(private readonly contentProjectRepo: ContentProjectRepository) {}

  async execute(input: CreateContentProjectInput): Promise<ContentProject> {
    if (!input.organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    return this.contentProjectRepo.create({
      organizationId: input.organizationId,
      channelProfileId: input.channelProfileId,
      title: input.title,
      keyword: input.keyword,
      niche: input.niche,
      format: input.format,
      status: ProjectStatus.PLANNING,
      durationMinutes: input.durationMinutes,
    });
  }
}
