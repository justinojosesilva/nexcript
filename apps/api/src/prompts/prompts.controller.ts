import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { PromptsService, type PromptsVersionResponse } from './prompts.service';

@ApiTags('prompts')
@Controller('prompts')
export class PromptsController {
  constructor(private readonly promptsService: PromptsService) {}

  @Public()
  @Get('versions')
  @ApiOperation({
    summary: 'Get current versions of all prompt categories',
    description:
      'Internal endpoint to list current version of each prompt category. Respects PROMPT_VERSION_OVERRIDE env var for rollback testing.',
  })
  @ApiResponse({
    status: 200,
    description: 'Object with category -> version mapping',
    schema: {
      type: 'object',
      properties: {
        scripts: { type: 'string', example: '2025-04-08' },
        narration: { type: 'string', example: '2025-04-08' },
        titles: { type: 'string', example: '2025-04-08' },
      },
    },
  })
  getVersions(): PromptsVersionResponse {
    return this.promptsService.getVersions();
  }
}
