import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import * as crypto from 'crypto';

@Injectable()
export class RefreshTokenService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly prismaService: PrismaService,
    private readonly configService: ConfigService,
  ) {}

  /**
   * Generate a new refresh token and store it in database
   * @param userId User ID
   * @returns Refresh token string
   */
  async generateRefreshToken(userId: string): Promise<string> {
    const tokenId = crypto.randomBytes(32).toString('hex');
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await this.prismaService.client.refreshToken.create({
      data: {
        token: tokenId,
        userId,
        expiresAt,
      },
    });

    return tokenId;
  }

  /**
   * Validate refresh token exists and is not expired
   * @param token Refresh token
   * @returns User ID if valid
   */
  async validateRefreshToken(token: string): Promise<string> {
    const refreshToken = await this.prismaService.client.refreshToken.findUnique(
      {
        where: { token },
      },
    );

    if (!refreshToken || refreshToken.expiresAt < new Date()) {
      throw new Error('Invalid or expired refresh token');
    }

    return refreshToken.userId;
  }

  /**
   * Revoke refresh token (logout)
   * @param token Refresh token to revoke
   */
  async revokeRefreshToken(token: string): Promise<void> {
    await this.prismaService.client.refreshToken.deleteMany({
      where: { token },
    });
  }

  /**
   * Revoke all refresh tokens for a user
   * @param userId User ID
   */
  async revokeAllUserTokens(userId: string): Promise<void> {
    await this.prismaService.client.refreshToken.deleteMany({
      where: { userId },
    });
  }

  /**
   * Generate access token
   * @param userId User ID
   * @param organizationId Organization ID
   * @param role User role
   * @param email User email
   * @returns Access token
   */
  generateAccessToken(
    userId: string,
    organizationId: string,
    role: string,
    email: string,
  ): string {
    return this.jwtService.sign({
      sub: userId,
      organizationId,
      role,
      email,
    });
  }

  /**
   * Get user data by ID
   * @param userId User ID
   * @returns User data
   */
  async getUserData(userId: string) {
    const user = await this.prismaService.client.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new Error('User not found');
    }

    return user;
  }
}
