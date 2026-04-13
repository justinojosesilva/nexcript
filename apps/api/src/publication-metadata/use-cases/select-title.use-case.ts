import {
  Injectable,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { SelectTitleDto } from '../dto/select-title.dto';

interface SelectTitleInput extends SelectTitleDto {
  projectId: string;
  organizationId: string;
}

@Injectable()
export class SelectTitleUseCase {
  private readonly logger = new Logger(SelectTitleUseCase.name);

  async execute(input: SelectTitleInput): Promise<{ success: boolean }> {
    const { projectId, organizationId, selectedTitle } = input;

    // Verify project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    // Update PublicationMetadata with selected title
    await prisma.publicationMetadata.update({
      where: { projectId },
      data: {
        title: selectedTitle,
        updatedAt: new Date(),
      },
    });

    this.logger.debug(
      `Selected title for project ${projectId}: "${selectedTitle}"`,
    );

    return { success: true };
  }
}
