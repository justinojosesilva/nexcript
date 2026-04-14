import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { EmailModule } from '../email/email.module';
import { OrganizationsController } from './organizations.controller';
import { CompleteOnboardingUseCase } from './use-cases/complete-onboarding.use-case';
import { CreateInviteUseCase } from './use-cases/create-invite.use-case';
import { AcceptInviteUseCase } from './use-cases/accept-invite.use-case';
import { GetOrganizationMembersUseCase } from './use-cases/get-organization-members.use-case';

@Module({
  imports: [PrismaModule, EmailModule],
  controllers: [OrganizationsController],
  providers: [
    CompleteOnboardingUseCase,
    CreateInviteUseCase,
    AcceptInviteUseCase,
    GetOrganizationMembersUseCase,
  ],
})
export class OrganizationsModule {}
