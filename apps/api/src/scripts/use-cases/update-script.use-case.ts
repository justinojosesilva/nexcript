import { Injectable, Logger, Inject } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { type Script } from '@nexcript/database';
import { type UpdateScriptDto } from '../dto/update-script.dto';
import { ICachePort } from '../../cache/interfaces/cache.port';

@Injectable()
export class UpdateScriptUseCase {
  private readonly logger = new Logger(UpdateScriptUseCase.name);

  constructor(
    @Inject('ICachePort')
    private readonly cachePort: ICachePort,
  ) {}

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

    // Check if blocks are being updated
    const blocksChanged = dto.blocks !== undefined;

    const data: Record<string, unknown> = {
      blocks: dto.blocks ? JSON.stringify(dto.blocks) : undefined,
      wordCount: dto.wordCount,
      estimatedDurationSec: dto.estimatedDurationSec,
    };

    if (dto.status) {
      data.status = dto.status as any;
    }

    const updatedScript = await prisma.script.update({
      where: {
        id: scriptId,
      },
      data,
    });

    // Invalidate TTS cache if blocks were edited
    if (blocksChanged) {
      try {
        const cachePattern = `tts:${scriptId}:*`;
        await this.cachePort.invalidateByPrefix(cachePattern);
        this.logger.debug(
          `TTS cache invalidated for script ${scriptId} due to block update`,
        );
      } catch (error) {
        this.logger.warn(
          `Failed to invalidate TTS cache for script ${scriptId}: ${error instanceof Error ? error.message : String(error)}`,
        );
        // Don't throw, cache invalidation is not critical
      }
    }

    return updatedScript;
  }
}
