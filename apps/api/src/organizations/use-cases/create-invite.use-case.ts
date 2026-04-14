import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { SendInviteEmailUseCase } from '../../email/use-cases/send-invite-email.use-case';
import { randomBytes } from 'crypto';

export interface CreateInviteInput {
  organizationId: string;
  email: string;
  createdByUserId: string;
}

export interface CreateInviteOutput {
  id: string;
  email: string;
  expiresAt: Date;
}

// Plan-based member limits
const MEMBER_LIMITS: Record<string, number | null> = {
  free: 1, // Only owner
  starter: 3,
  professional: null, // Unlimited
  enterprise: null, // Unlimited
  creator: null, // Unlimited
};

@Injectable()
export class CreateInviteUseCase {
  constructor(
    private prisma: PrismaService,
    private sendInviteEmailUseCase: SendInviteEmailUseCase,
  ) {}

  async execute(input: CreateInviteInput): Promise<CreateInviteOutput> {
    const { organizationId, email, createdByUserId } = input;

    // Get organization and check plan
    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
      include: {
        users: {
          select: { id: true },
        },
        activeSubscription: {
          include: { plan: true },
        },
      },
    });

    if (!org) {
      throw new BadRequestException('Organization not found');
    }

    // Determine plan and member limit
    const planSlug = org.activeSubscription?.plan.slug || 'free';
    const limit = MEMBER_LIMITS[planSlug];

    // For free plan, only owner (1 member) is allowed
    if (limit !== null && org.users.length >= limit) {
      throw new BadRequestException(
        `Member limit exceeded for ${planSlug} plan (limit: ${limit})`,
      );
    }

    // Check if user already exists in organization
    const existingUser = await this.prisma.client.user.findFirst({
      where: {
        email,
        organizationId,
      },
    });

    if (existingUser) {
      throw new BadRequestException('User is already a member of this organization');
    }

    // Check if invite already exists and is not expired
    const existingInvite = await this.prisma.client.organizationInvite.findFirst({
      where: {
        organizationId,
        email,
        expiresAt: {
          gt: new Date(),
        },
        acceptedAt: null,
      },
    });

    if (existingInvite) {
      throw new BadRequestException('An active invite already exists for this email');
    }

    // Generate token (base64 encoded random bytes)
    const token = randomBytes(32).toString('base64url');

    // Create invite with 48h expiration
    const expiresAt = new Date();
    expiresAt.setHours(expiresAt.getHours() + 48);

    const invite = await this.prisma.client.organizationInvite.create({
      data: {
        organizationId,
        email,
        token,
        createdByUserId,
        expiresAt,
      },
    });

    // Get inviter info for email
    const inviter = await this.prisma.client.user.findUnique({
      where: { id: createdByUserId },
      select: { name: true },
    });

    // Send invite email (non-blocking)
    void this.sendInviteEmailUseCase.execute({
      inviteeEmail: email,
      inviterName: inviter?.name || 'Someone',
      organizationName: org.name,
      inviteToken: token,
    });

    return {
      id: invite.id,
      email: invite.email,
      expiresAt: invite.expiresAt,
    };
  }
}
