import { ConflictException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../../prisma/prisma.service';
import { RegisterDto, RegisterResponse } from '../dto/register.dto';
import { RefreshTokenService } from '../services/refresh-token.service';

const BCRYPT_ROUNDS = 10;

@Injectable()
export class RegisterUseCase {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly jwtService: JwtService,
    private readonly refreshTokenService: RefreshTokenService,
  ) {}

  async execute(dto: RegisterDto): Promise<RegisterResponse> {
    const existing = await this.prismaService.client.user.findUnique({
      where: { email: dto.email },
    });

    if (existing) {
      throw new ConflictException('Email already in use');
    }

    const passwordHash = await bcrypt.hash(dto.password, BCRYPT_ROUNDS);
    // Use provided organizationName or derive from user name
    const organizationName = dto.organizationName || dto.name;
    const slug = this.buildSlug(organizationName);

    const { organization, user } = await this.prismaService.client.$transaction(
      async (tx) => {
        const organization = await tx.organization.create({
          data: { name: organizationName, slug },
        });

        const user = await tx.user.create({
          data: {
            organizationId: organization.id,
            email: dto.email,
            name: dto.name,
            role: 'admin',
            passwordHash,
          },
        });

        return { organization, user };
      },
    );

    const accessToken = this.jwtService.sign({
      sub: user.id,
      orgId: organization.id,
      role: user.role,
    });

    const refreshToken = await this.refreshTokenService.generateRefreshToken(
      user.id,
    );

    return {
      accessToken,
      refreshToken,
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    };
  }

  private buildSlug(name: string): string {
    const base = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');

    // Add short unique suffix to handle duplicate names
    const suffix = Math.random().toString(36).substring(2, 8);
    return `${base}-${suffix}`.substring(0, 63); // Postgres limit
  }
}
