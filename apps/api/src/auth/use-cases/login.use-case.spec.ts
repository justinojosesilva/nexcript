jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));
jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

import { UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { LoginUseCase } from './login.use-case';

const mockUser = {
  id: 'user-1',
  organizationId: 'org-1',
  email: 'alice@example.com',
  name: 'Alice',
  role: 'admin',
  passwordHash: 'hashed-password',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    user: { findUnique: jest.fn() },
  },
};

const mockJwtService = {
  sign: jest.fn().mockReturnValue('jwt-token'),
};

const mockRefreshTokenService = {
  generateRefreshToken: jest.fn().mockResolvedValue('refresh-token'),
};

const dto = {
  email: 'alice@example.com',
  password: 'supersecret',
};

describe('LoginUseCase', () => {
  let useCase: LoginUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    mockPrismaService.client.user.findUnique.mockResolvedValue(mockUser);
    (bcrypt.compare as jest.Mock).mockResolvedValue(true);
    mockJwtService.sign.mockReturnValue('jwt-token');
    mockRefreshTokenService.generateRefreshToken.mockResolvedValue(
      'refresh-token',
    );
    useCase = new LoginUseCase(
      mockPrismaService as any,
      mockJwtService as any,
      mockRefreshTokenService as any,
    );
  });

  it('returns access_token and refresh_token for valid credentials', async () => {
    const result = await useCase.execute(dto);

    expect(result).toEqual({
      access_token: 'jwt-token',
      refresh_token: 'refresh-token',
    });
  });

  it('signs JWT with userId (sub), organizationId, role and email', async () => {
    await useCase.execute(dto);

    expect(mockJwtService.sign).toHaveBeenCalledWith({
      sub: mockUser.id,
      organizationId: mockUser.organizationId,
      role: mockUser.role,
      email: mockUser.email,
    });
  });

  it('throws UnauthorizedException (401) when user is not found', async () => {
    mockPrismaService.client.user.findUnique.mockResolvedValue(null);

    await expect(useCase.execute(dto)).rejects.toThrow(UnauthorizedException);
    expect(bcrypt.compare).not.toHaveBeenCalled();
    expect(mockJwtService.sign).not.toHaveBeenCalled();
    expect(mockRefreshTokenService.generateRefreshToken).not.toHaveBeenCalled();
  });

  it('throws UnauthorizedException (401) when password does not match', async () => {
    (bcrypt.compare as jest.Mock).mockResolvedValue(false);

    await expect(useCase.execute(dto)).rejects.toThrow(UnauthorizedException);
    expect(mockJwtService.sign).not.toHaveBeenCalled();
    expect(mockRefreshTokenService.generateRefreshToken).not.toHaveBeenCalled();
  });

  it('returns the same generic error message for not-found and wrong password (no enumeration)', async () => {
    mockPrismaService.client.user.findUnique.mockResolvedValue(null);
    const errorNotFound = await useCase
      .execute(dto)
      .catch((e: UnauthorizedException) => e);

    (bcrypt.compare as jest.Mock).mockResolvedValue(false);
    mockPrismaService.client.user.findUnique.mockResolvedValue(mockUser);
    const errorWrongPw = await useCase
      .execute(dto)
      .catch((e: UnauthorizedException) => e);

    expect((errorNotFound as UnauthorizedException).message).toBe(
      (errorWrongPw as UnauthorizedException).message,
    );
  });
});
