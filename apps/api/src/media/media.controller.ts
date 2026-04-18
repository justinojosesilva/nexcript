import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { type MediaAsset } from '@nexvideo/shared';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { MediaSearchUseCase } from './use-cases/media-search.use-case';
import { SelectMediaUseCase } from './use-cases/select-media.use-case';
import { SearchMediaDto } from './dto/search-media.dto';
import { SelectMediaDto } from './dto/select-media.dto';
import { prisma } from '@nexvideo/database';

@ApiTags('media')
@ApiBearerAuth()
@Controller('media')
export class MediaController {
  constructor(
    private readonly mediaSearchUseCase: MediaSearchUseCase,
    private readonly selectMediaUseCase: SelectMediaUseCase,
  ) {}

  @Post('search')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Search media assets for a script block',
    description:
      'Search and return media asset suggestions (images or videos) for a specific script block. Results are returned synchronously with latency < 3s. Query is auto-generated from block content if not provided.',
  })
  @ApiResponse({
    status: 200,
    description: 'Media assets found and saved as suggestions',
    schema: {
      example: [
        {
          id: 'img-123',
          url: 'https://images.pexels.com/photos/123/image.jpg',
          thumbnailUrl: 'https://images.pexels.com/photos/123/thumb.jpg',
          provider: 'pexels',
          license: 'commercial',
          type: 'image',
        },
      ],
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - missing or invalid parameters',
    schema: {
      example: {
        message: 'Missing scriptId or blockId',
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - script does not belong to user organization',
    schema: {
      example: {
        message: 'Script not found',
        error: 'Forbidden',
        statusCode: 403,
      },
    },
  })
  async searchMedia(
    @Body() dto: SearchMediaDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<MediaAsset[]> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    try {
      // Verify script belongs to user's organization and fetch project context
      const script = await prisma.script.findUnique({
        where: { id: dto.scriptId },
        include: {
          contentProject: {
            select: {
              organizationId: true,
              niche: true,
              channelProfile: {
                select: {
                  tone: true,
                },
              },
            },
          },
        },
      });

      if (!script || script.contentProject.organizationId !== user.organizationId) {
        throw new ForbiddenException('Script not found or does not belong to organization');
      }

      return await this.mediaSearchUseCase.execute({
        ...dto,
        organizationId: user.organizationId,
        niche: script.contentProject.niche,
        tone: script.contentProject.channelProfile.tone,
      });
    } catch (error) {
      if (error instanceof ForbiddenException) {
        throw error;
      }
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to search media');
    }
  }

  @Patch(':id/select')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Mark a media asset as selected',
    description: 'Save the user choice of a media asset for use in the project',
  })
  @ApiResponse({
    status: 200,
    description: 'Media asset successfully marked as selected',
    schema: {
      example: {
        success: true,
      },
    },
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request - media suggestion not found',
    schema: {
      example: {
        message: 'Media suggestion not found',
        error: 'Bad Request',
        statusCode: 400,
      },
    },
  })
  async selectMedia(
    @Param('id') mediaSuggestionId: string,
    @Body() dto: SelectMediaDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<{ success: boolean }> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    try {
      return await this.selectMediaUseCase.execute({
        ...dto,
        mediaSuggestionId,
        organizationId: user.organizationId,
      });
    } catch (error) {
      if (error instanceof BadRequestException) {
        throw error;
      }
      throw new BadRequestException('Failed to select media');
    }
  }
}
