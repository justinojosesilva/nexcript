import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { prisma } from '@nexcript/database';
import { SynthesizeNarrationUseCase } from './use-cases/synthesize-narration.use-case';
import { SynthesizeNarrationDto } from './dto/synthesize-narration.dto';

@ApiTags('narrations')
@Controller('narrations')
export class NarrationsController {
  constructor(
    private readonly synthesizeNarrationUseCase: SynthesizeNarrationUseCase,
  ) {}

  @Post('internal/synthesize')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Internal narration synthesis endpoint',
    description: 'Called by worker process - not for public API',
  })
  @ApiResponse({
    status: 200,
    description: 'Audio synthesized successfully',
    schema: {
      example: {
        audioUrl: 'https://storage.example.com/narrations/abc123.mp3',
        durationSec: 180,
        provider: 'elevenlabs',
        estimatedCostBrl: 0.45,
      },
    },
  })
  async internalSynthesizeNarration(
    @Body() dto: SynthesizeNarrationDto & { organizationId: string; narrationId?: string },
  ) {
    if (!dto.organizationId) {
      throw new BadRequestException('Missing organizationId');
    }

    // Fetch narration to get scriptId for cache key generation
    let scriptId = '';
    if (dto.narrationId) {
      const narration = await prisma.narration.findUnique({
        where: { id: dto.narrationId },
      });

      if (!narration) {
        throw new NotFoundException('Narration not found');
      }

      scriptId = narration.scriptId;
    }

    return await this.synthesizeNarrationUseCase.execute({
      ...dto,
      organizationId: dto.organizationId,
      scriptId,
    });
  }
}
