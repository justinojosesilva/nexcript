import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
} from '@nestjs/common';
import {
  ApiOperation,
  ApiResponse,
  ApiTags,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { GetComplianceUseCase } from './use-cases/get-compliance.use-case';

@ApiTags('compliance')
@ApiBearerAuth()
@Controller('compliance')
export class ScoringController {
  constructor(
    private readonly getComplianceUseCase: GetComplianceUseCase,
  ) {}

  @Get(':projectId')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get project compliance scores',
    description:
      'Returns compliance scores (originality, copyright, monetization) with warnings for low scores.',
  })
  @ApiResponse({
    status: 200,
    description: 'Compliance scores retrieved successfully',
    schema: {
      example: {
        projectId: 'proj-123',
        complianceScore: 85,
        originalityScore: 90,
        copyrightScore: 80,
        monetizationScore: 75,
        warnings: [],
      },
    },
  })
  @ApiResponse({ status: 403, description: 'Forbidden - invalid organization context' })
  @ApiResponse({ status: 400, description: 'Bad request - project not found' })
  async getCompliance(
    @Param('projectId') projectId: string,
    @CurrentUser() user: JwtPayload | undefined,
  ) {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getComplianceUseCase.execute({
      projectId,
      organizationId: user.organizationId,
    });
  }
}
