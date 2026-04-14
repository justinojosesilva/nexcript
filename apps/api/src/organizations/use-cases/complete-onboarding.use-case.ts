import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SendWelcomeEmailUseCase } from '../../email/use-cases/send-welcome-email.use-case';

@Injectable()
export class CompleteOnboardingUseCase {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly sendWelcomeEmailUseCase: SendWelcomeEmailUseCase,
  ) {}

  async execute(
    organizationId: string,
  ): Promise<{ onboardingCompleted: boolean }> {
    const organization =
      await this.prismaService.client.organization.findUnique({
        where: { id: organizationId },
        include: { users: { select: { name: true, email: true }, take: 1 } },
      });

    if (!organization) {
      throw new NotFoundException('Organization not found');
    }

    await this.prismaService.client.organization.update({
      where: { id: organizationId },
      data: { onboardingCompleted: true },
    });

    // Send welcome email to the primary user (non-blocking)
    if (organization.users.length > 0) {
      const user = organization.users[0];
      void this.sendWelcomeEmailUseCase.execute({
        userName: user.name,
        userEmail: user.email,
      });
    }

    return { onboardingCompleted: true };
  }
}
