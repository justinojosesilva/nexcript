import { ExecutionContext, ForbiddenException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AdminApiKeyGuard } from './admin-api-key.guard';

function makeContext(headers: Record<string, string> = {}): ExecutionContext {
  return {
    switchToHttp: () => ({
      getRequest: () => ({ headers }),
    }),
  } as unknown as ExecutionContext;
}

function makeConfig(key: string | undefined): ConfigService {
  return { get: jest.fn(() => key) } as unknown as ConfigService;
}

describe('AdminApiKeyGuard', () => {
  it('throws 403 when ADMIN_API_KEY is not configured', () => {
    const guard = new AdminApiKeyGuard(makeConfig(undefined));
    expect(() => guard.canActivate(makeContext())).toThrow(ForbiddenException);
  });

  it('throws 403 when X-Admin-Key header is missing', () => {
    const guard = new AdminApiKeyGuard(makeConfig('supersecretkey1234567890123456789'));
    expect(() => guard.canActivate(makeContext({}))).toThrow(ForbiddenException);
  });

  it('throws 403 when X-Admin-Key header does not match', () => {
    const guard = new AdminApiKeyGuard(makeConfig('supersecretkey1234567890123456789'));
    expect(() =>
      guard.canActivate(makeContext({ 'x-admin-key': 'wrongkey' })),
    ).toThrow(ForbiddenException);
  });

  it('returns true when X-Admin-Key matches', () => {
    const key = 'supersecretkey1234567890123456789';
    const guard = new AdminApiKeyGuard(makeConfig(key));
    const result = guard.canActivate(makeContext({ 'x-admin-key': key }));
    expect(result).toBe(true);
  });
});
