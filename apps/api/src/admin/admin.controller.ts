import {
  Controller,
  Get,
  Patch,
  Param,
  Body,
  HttpCode,
  HttpStatus,
  UseGuards,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiHeader,
  ApiBearerAuth,
  ApiBody,
} from '@nestjs/swagger';
import { AdminApiKeyGuard } from './guards/admin-api-key.guard';
import { ListOrganizationsUseCase, type ListOrganizationsOutput } from './use-cases/list-organizations.use-case';
import { GetAdminStatsUseCase, type AdminStatsOutput } from './use-cases/get-admin-stats.use-case';
import { UpdateOrganizationPlanUseCase, type UpdateOrganizationPlanOutput } from './use-cases/update-organization-plan.use-case';

const ADMIN_SWAGGER_NOTE =
  '⚠️ **ROTA ADMINISTRATIVA** — Requer JWT válido + header `X-Admin-Key` com a chave de admin.';

@ApiTags('Admin')
@ApiBearerAuth()
@ApiHeader({
  name: 'X-Admin-Key',
  description: 'Admin API key (ADMIN_API_KEY env var)',
  required: true,
})
@UseGuards(AdminApiKeyGuard)
@Controller('admin')
export class AdminController {
  constructor(
    private readonly listOrganizationsUseCase: ListOrganizationsUseCase,
    private readonly getAdminStatsUseCase: GetAdminStatsUseCase,
    private readonly updateOrganizationPlanUseCase: UpdateOrganizationPlanUseCase,
  ) {}

  @Get('organizations')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'List all organizations',
    description: `${ADMIN_SWAGGER_NOTE}\n\nReturns all organizations with plan, member count, current month usage and creation date.`,
  })
  @ApiResponse({
    status: 200,
    description: 'Organizations retrieved successfully',
    schema: {
      example: {
        organizations: [
          {
            id: 'org-id',
            name: 'Acme Corp',
            slug: 'acme-corp',
            plan: 'starter',
            onboardingCompleted: true,
            memberCount: 3,
            usage: { month: '2026-04', scripts: 12, narrations: 8, exports: 4 },
            createdAt: '2026-04-01T00:00:00.000Z',
          },
        ],
        total: 1,
      },
    },
  })
  @ApiResponse({ status: 403, description: 'Missing or invalid X-Admin-Key' })
  listOrganizations(): Promise<ListOrganizationsOutput> {
    return this.listOrganizationsUseCase.execute();
  }

  @Get('stats')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get admin platform stats',
    description: `${ADMIN_SWAGGER_NOTE}\n\nReturns total orgs, plan distribution, and current month aggregated usage.`,
  })
  @ApiResponse({
    status: 200,
    description: 'Stats retrieved successfully',
    schema: {
      example: {
        totalOrganizations: 42,
        planDistribution: [
          { plan: 'free', count: 30 },
          { plan: 'starter', count: 10 },
          { plan: 'professional', count: 2 },
        ],
        currentMonth: {
          month: '2026-04',
          totalScripts: 320,
          totalNarrations: 210,
          totalExports: 80,
        },
      },
    },
  })
  @ApiResponse({ status: 403, description: 'Missing or invalid X-Admin-Key' })
  getStats(): Promise<AdminStatsOutput> {
    return this.getAdminStatsUseCase.execute();
  }

  @Patch('organizations/:id/plan')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Manually update an organization plan',
    description: `${ADMIN_SWAGGER_NOTE}\n\nAllows support to override an organization's plan. Valid plans: free, starter, professional, enterprise.`,
  })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        plan: {
          type: 'string',
          enum: ['free', 'starter', 'professional', 'enterprise'],
          example: 'starter',
        },
      },
      required: ['plan'],
    },
  })
  @ApiResponse({
    status: 200,
    description: 'Plan updated successfully',
    schema: {
      example: {
        organizationId: 'org-id',
        previousPlan: 'free',
        newPlan: 'starter',
      },
    },
  })
  @ApiResponse({ status: 400, description: 'Invalid plan value' })
  @ApiResponse({ status: 403, description: 'Missing or invalid X-Admin-Key' })
  @ApiResponse({ status: 404, description: 'Organization not found' })
  updatePlan(
    @Param('id') id: string,
    @Body('plan') plan: string,
  ): Promise<UpdateOrganizationPlanOutput> {
    return this.updateOrganizationPlanUseCase.execute({ organizationId: id, plan });
  }
}
