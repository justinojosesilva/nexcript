import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface PlanDistribution {
  plan: string;
  count: number;
}

export interface AdminStatsOutput {
  totalOrganizations: number;
  planDistribution: PlanDistribution[];
  currentMonth: {
    month: string;
    totalScripts: number;
    totalNarrations: number;
    totalExports: number;
  };
}

@Injectable()
export class GetAdminStatsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<AdminStatsOutput> {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    // Total orgs and plan distribution in one query
    const orgs = await this.prisma.client.organization.findMany({
      select: {
        plan: true,
        activeSubscription: {
          select: { plan: { select: { slug: true } } },
        },
      },
    });

    const totalOrganizations = orgs.length;

    // Build plan distribution
    const planCounts = new Map<string, number>();
    for (const org of orgs) {
      const planSlug = org.activeSubscription?.plan.slug ?? org.plan;
      planCounts.set(planSlug, (planCounts.get(planSlug) ?? 0) + 1);
    }
    const planDistribution: PlanDistribution[] = Array.from(planCounts.entries()).map(
      ([plan, count]) => ({ plan, count }),
    );

    // Aggregate usage for current month
    const usageAgg = await this.prisma.client.usageLog.aggregate({
      where: { month: currentMonth },
      _sum: { scripts: true, narrations: true, exports: true },
    });

    return {
      totalOrganizations,
      planDistribution,
      currentMonth: {
        month: currentMonth,
        totalScripts: usageAgg._sum.scripts ?? 0,
        totalNarrations: usageAgg._sum.narrations ?? 0,
        totalExports: usageAgg._sum.exports ?? 0,
      },
    };
  }
}
