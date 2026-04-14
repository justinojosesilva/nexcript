import { Controller, HttpCode, HttpStatus, Patch, Post, Get, Body, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBody } from '@nestjs/swagger';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { Public } from '../auth/decorators/public.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { CompleteOnboardingUseCase } from './use-cases/complete-onboarding.use-case';
import { CreateInviteUseCase, type CreateInviteOutput } from './use-cases/create-invite.use-case';
import { AcceptInviteUseCase, type AcceptInviteOutput } from './use-cases/accept-invite.use-case';
import { GetOrganizationMembersUseCase, type GetOrganizationMembersOutput } from './use-cases/get-organization-members.use-case';

@ApiTags('Organizations')
@Controller('organizations')
export class OrganizationsController {
  constructor(
    private readonly completeOnboardingUseCase: CompleteOnboardingUseCase,
    private readonly createInviteUseCase: CreateInviteUseCase,
    private readonly acceptInviteUseCase: AcceptInviteUseCase,
    private readonly getOrganizationMembersUseCase: GetOrganizationMembersUseCase,
  ) {}

  @Patch('onboarding')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Mark onboarding as completed for the organization' })
  @ApiResponse({
    status: 200,
    description: 'Onboarding marked as completed',
    schema: { example: { onboardingCompleted: true } },
  })
  completeOnboarding(
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<{ onboardingCompleted: boolean }> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.completeOnboardingUseCase.execute(user.organizationId);
  }

  @Post('invite')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Send an invite to a new member' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        email: { type: 'string', example: 'member@example.com' },
      },
      required: ['email'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Invite created successfully',
    schema: {
      example: {
        id: 'invite-id',
        email: 'member@example.com',
        expiresAt: '2026-04-15T20:29:38.461Z',
      },
    },
  })
  async createInvite(
    @CurrentUser() user: JwtPayload | undefined,
    @Body('email') email: string,
  ): Promise<CreateInviteOutput> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.createInviteUseCase.execute({
      organizationId: user.organizationId,
      email,
      createdByUserId: user.sub,
    });
  }

  @Get('members')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Get all members of the organization' })
  @ApiResponse({
    status: 200,
    description: 'Members retrieved successfully',
    schema: {
      example: {
        members: [
          { id: 'user-id', name: 'John Doe', email: 'john@example.com', role: 'admin' },
        ],
        count: 1,
      },
    },
  })
  async getMembers(@CurrentUser() user: JwtPayload | undefined): Promise<GetOrganizationMembersOutput> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getOrganizationMembersUseCase.execute({
      organizationId: user.organizationId,
    });
  }

  @Public()
  @Post('invite/:token/accept')
  @HttpCode(HttpStatus.CREATED)
  @ApiOperation({ summary: 'Accept an invite and create user account' })
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        name: { type: 'string', example: 'John Doe' },
        password: { type: 'string', example: 'SecurePassword123!' },
      },
      required: ['name', 'password'],
    },
  })
  @ApiResponse({
    status: 201,
    description: 'Invite accepted and user created',
    schema: {
      example: {
        userId: 'user-id',
        organizationId: 'org-id',
        email: 'member@example.com',
      },
    },
  })
  @ApiResponse({
    status: 410,
    description: 'Invite expired',
  })
  async acceptInvite(
    @Param('token') token: string,
    @Body('name') name: string,
    @Body('password') password: string,
  ): Promise<AcceptInviteOutput> {
    return this.acceptInviteUseCase.execute({
      token,
      name,
      password,
    });
  }
}
