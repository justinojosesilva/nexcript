import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface OrgListItem {
  id: string;
  name: string;
  slug: string;
  plan: string;
  onboardingCompleted: boolean;
  memberCount: number;
  usage: {
    month: string;
    scripts: number;
    narrations: number;
    exports: number;
  } | null;
  createdAt: Date;
}

export interface ListOrganizationsOutput {
  organizations: OrgListItem[];
  total: number;
}

@Injectable()
export class ListOrganizationsUseCase {
  constructor(private readonly prisma: PrismaService) {}

  async execute(): Promise<ListOrganizationsOutput> {
    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    const organizations = await this.prisma.client.organization.findMany({
      orderBy: { createdAt: 'desc' },
      include: {
        _count: { select: { users: true } },
        usageLogs: {
          where: { month: currentMonth },
          take: 1,
        },
        activeSubscription: {
          include: { plan: { select: { slug: true, name: true } } },
        },
      },
    });

    const items: OrgListItem[] = organizations.map((org) => ({
      id: org.id,
      name: org.name,
      slug: org.slug,
      plan: org.activeSubscription?.plan.slug ?? org.plan,
      onboardingCompleted: org.onboardingCompleted,
      memberCount: org._count.users,
      usage: org.usageLogs[0]
        ? {
            month: org.usageLogs[0].month,
            scripts: org.usageLogs[0].scripts,
            narrations: org.usageLogs[0].narrations,
            exports: org.usageLogs[0].exports,
          }
        : null,
      createdAt: org.createdAt,
    }));

    return { organizations: items, total: items.length };
  }
}
