import { Injectable } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { type Script } from '@nexcript/database';
import { type UpdateScriptDto } from '../dto/update-script.dto';

@Injectable()
export class UpdateScriptUseCase {
  async execute(
    scriptId: string,
    organizationId: string,
    dto: UpdateScriptDto,
  ): Promise<Script> {
    // Verify script belongs to organization
    const script = await prisma.script.findUnique({
      where: {
        id: scriptId,
      },
      include: {
        contentProject: {
          select: {
            organizationId: true,
          },
        },
      },
    });

    if (!script || script.contentProject.organizationId !== organizationId) {
      throw new Error('Script not found');
    }

    const updatedScript = await prisma.script.update({
      where: {
        id: scriptId,
      },
      data: {
        blocks: dto.blocks ? JSON.stringify(dto.blocks) : undefined,
        status: dto.status,
        wordCount: dto.wordCount,
        estimatedDurationSec: dto.estimatedDurationSec,
      },
    });

    return updatedScript;
  }
}
