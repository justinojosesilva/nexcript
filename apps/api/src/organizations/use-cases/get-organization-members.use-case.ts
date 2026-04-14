import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface GetOrganizationMembersInput {
  organizationId: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  role: string;
}

export interface GetOrganizationMembersOutput {
  members: Member[];
  count: number;
}

@Injectable()
export class GetOrganizationMembersUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(input: GetOrganizationMembersInput): Promise<GetOrganizationMembersOutput> {
    const { organizationId } = input;

    // Verify organization exists
    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
    });

    if (!org) {
      throw new BadRequestException('Organization not found');
    }

    // Get all members
    const members = await this.prisma.client.user.findMany({
      where: {
        organizationId,
      },
      select: {
        id: true,
        name: true,
        email: true,
        role: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return {
      members: members.map((m) => ({
        id: m.id,
        name: m.name,
        email: m.email,
        role: m.role,
      })),
      count: members.length,
    };
  }
}
