import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { GetSubscriptionResponse } from '../dto/get-subscription.dto';

interface GetSubscriptionInput {
  organizationId: string;
}

@Injectable()
export class GetSubscriptionUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(input: GetSubscriptionInput): Promise<GetSubscriptionResponse> {
    const { organizationId } = input;

    // Fetch org with active subscription and plan
    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
      include: {
        activeSubscription: {
          include: { plan: true },
        },
      },
    });

    if (!org) {
      throw new NotFoundException(`Organization ${organizationId} not found`);
    }

    // Get current month in YYYY-MM format
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    // Get or create usage log for current month
    let usageLog = await this.prisma.client.usageLog.findUnique({
      where: {
        organizationId_month: {
          organizationId,
          month: currentMonth,
        },
      },
    });

    if (!usageLog) {
      usageLog = await this.prisma.client.usageLog.create({
        data: {
          organizationId,
          month: currentMonth,
          scripts: 0,
          narrations: 0,
          exports: 0,
        },
      });
    }

    // Use active subscription plan if exists, otherwise use free plan
    const plan = org.activeSubscription?.plan;

    if (!plan) {
      throw new NotFoundException(`No plan found for organization ${organizationId}`);
    }

    // Get plan limits
    const limits = {
      scripts: plan.scriptLimit,
      narrations: plan.narrationLimit,
      exports: plan.exportLimit,
    };

    // Calculate percent used (null limits = unlimited = 0% used)
    const percentUsed = {
      scripts: limits.scripts ? Math.round((usageLog.scripts / limits.scripts) * 100) : 0,
      narrations: limits.narrations ? Math.round((usageLog.narrations / limits.narrations) * 100) : 0,
      exports: limits.exports ? Math.round((usageLog.exports / limits.exports) * 100) : 0,
    };

    return {
      plan: {
        slug: plan.slug,
        name: plan.name,
        priceMonthlyBrl: plan.priceMonthlyBrl.toString(),
      },
      usage: {
        scripts: usageLog.scripts,
        narrations: usageLog.narrations,
        exports: usageLog.exports,
      },
      limits,
      percentUsed,
    };
  }
}
