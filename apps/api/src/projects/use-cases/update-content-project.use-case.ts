import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { type ContentProject } from '@nexcript/database';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { UpdateContentProjectDto } from '../dto/update-content-project.dto';

@Injectable()
export class UpdateContentProjectUseCase {
  constructor(private readonly contentProjectRepo: ContentProjectRepository) {}

  async execute(
    projectId: string,
    organizationId: string,
    dto: UpdateContentProjectDto,
  ): Promise<ContentProject> {
    if (!organizationId) {
      throw new ForbiddenException('Missing organization context');
    }

    const existing = await this.contentProjectRepo.findById(projectId);

    if (!existing) {
      throw new NotFoundException('Content project not found');
    }

    if (existing.organizationId !== organizationId) {
      throw new ForbiddenException(
        'You do not have access to this content project',
      );
    }

    const updateData: Record<string, unknown> = {};

    if (dto.title !== undefined) updateData.title = dto.title;
    if (dto.format !== undefined) updateData.format = dto.format;
    if (dto.durationMinutes !== undefined)
      updateData.durationMinutes = dto.durationMinutes;

    return this.contentProjectRepo.update(projectId, updateData);
  }
}
