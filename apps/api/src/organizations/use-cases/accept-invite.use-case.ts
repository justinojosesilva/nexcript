import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';

const BCRYPT_ROUNDS = 10;

export interface AcceptInviteInput {
  token: string;
  name: string;
  password: string;
}

export interface AcceptInviteOutput {
  userId: string;
  organizationId: string;
  email: string;
}

@Injectable()
export class AcceptInviteUseCase {
  constructor(private prisma: PrismaService) {}

  async execute(input: AcceptInviteInput): Promise<AcceptInviteOutput> {
    const { token, name, password } = input;

    // Find invite by token
    const invite = await this.prisma.client.organizationInvite.findUnique({
      where: { token },
    });

    if (!invite) {
      throw new NotFoundException('Invite not found');
    }

    // Check if already accepted
    if (invite.acceptedAt) {
      throw new BadRequestException('This invite has already been accepted');
    }

    // Check if expired
    if (new Date() > invite.expiresAt) {
      throw new BadRequestException(
        'This invite has expired. Please ask for a new invite.',
      );
    }

    // Check if user already exists with this email (in any organization)
    const existingUser = await this.prisma.client.user.findUnique({
      where: { email: invite.email },
    });

    if (existingUser) {
      throw new BadRequestException(
        'A user with this email already exists. Please log in instead.',
      );
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, BCRYPT_ROUNDS);

    // Create user with role MEMBER in the organization
    const user = await this.prisma.client.user.create({
      data: {
        organizationId: invite.organizationId,
        email: invite.email,
        name,
        passwordHash,
        role: 'member' as const,
      },
    });

    // Mark invite as accepted
    await this.prisma.client.organizationInvite.update({
      where: { id: invite.id },
      data: {
        acceptedAt: new Date(),
      },
    });

    return {
      userId: user.id,
      organizationId: user.organizationId,
      email: user.email,
    };
  }
}
