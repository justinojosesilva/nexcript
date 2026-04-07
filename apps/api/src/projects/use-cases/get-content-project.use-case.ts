import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { type ContentProjectWithChannelProfile } from '../../repositories/content-project.repository.interface';

@Injectable()
export class GetContentProjectUseCase {
  constructor(private readonly contentProjectRepo: ContentProjectRepository) {}

  async execute(
    projectId: string,
    organizationId: string,
  ): Promise<ContentProjectWithChannelProfile> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    const project = await this.contentProjectRepo.findById(projectId);

    if (!project) {
      throw new NotFoundException('Content project not found');
    }

    if (project.organizationId !== organizationId) {
      throw new ForbiddenException(
        'You do not have access to this content project',
      );
    }

    return project;
  }
}
