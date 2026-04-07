import { ForbiddenException, Injectable } from '@nestjs/common';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { type ContentProjectWithChannelProfile } from '../../repositories/content-project.repository.interface';

@Injectable()
export class ListContentProjectsUseCase {
  constructor(private readonly contentProjectRepo: ContentProjectRepository) {}

  async execute(
    organizationId: string,
  ): Promise<ContentProjectWithChannelProfile[]> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    return this.contentProjectRepo.findByOrg(organizationId);
  }
}
