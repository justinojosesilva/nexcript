import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

const VALID_PLANS = ['free', 'starter', 'professional', 'enterprise'] as const;
type ValidPlan = (typeof VALID_PLANS)[number];

export interface UpdateOrganizationPlanInput {
  organizationId: string;
  plan: string;
}

export interface UpdateOrganizationPlanOutput {
  organizationId: string;
  previousPlan: string;
  newPlan: string;
}

@Injectable()
export class UpdateOrganizationPlanUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: UpdateOrganizationPlanInput): Promise<UpdateOrganizationPlanOutput> {
    const { organizationId, plan } = input;

    if (!VALID_PLANS.includes(plan as ValidPlan)) {
      throw new BadRequestException(
        `Invalid plan "${plan}". Valid plans: ${VALID_PLANS.join(', ')}`,
      );
    }

    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
      select: { id: true, plan: true },
    });

    if (!org) {
      throw new NotFoundException(`Organization ${organizationId} not found`);
    }

    const previousPlan = org.plan;

    await this.prisma.client.organization.update({
      where: { id: organizationId },
      data: { plan: plan as ValidPlan },
    });

    return { organizationId, previousPlan, newPlan: plan };
  }
}
