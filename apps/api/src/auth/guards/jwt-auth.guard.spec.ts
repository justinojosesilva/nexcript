import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtAuthGuard } from './jwt-auth.guard';

describe('JwtAuthGuard', () => {
  let guard: JwtAuthGuard;
  let reflector: Reflector;

  beforeEach(() => {
    reflector = new Reflector();
    guard = new JwtAuthGuard(reflector);
  });

  it('allows access to @Public routes without calling parent canActivate', () => {
    const mockContext = {
      getHandler: () => ({}),
      getClass: () => class {},
    } as unknown as ExecutionContext;

    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(true);

    const result = guard.canActivate(mockContext);

    expect(result).toBe(true);
  });

  it('calls parent canActivate for non-public routes', () => {
    const mockContext = {
      getHandler: () => ({}),
      getClass: () => class {},
    } as unknown as ExecutionContext;

    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(false);
    jest.spyOn(JwtAuthGuard.prototype, 'canActivate').mockReturnValueOnce(true);

    const result = guard.canActivate(mockContext);

    expect(result).toBe(true);
  });

  it('returns true when @Public is set at method level', () => {
    const mockContext = {
      getHandler: () => ({ isPublic: true }),
      getClass: () => class {},
    } as unknown as ExecutionContext;

    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(true);

    const result = guard.canActivate(mockContext);

    expect(result).toBe(true);
  });

  it('returns true when @Public is set at class level', () => {
    const mockContext = {
      getHandler: () => ({}),
      getClass: () => ({ isPublic: true }),
    } as unknown as ExecutionContext;

    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(true);

    const result = guard.canActivate(mockContext);

    expect(result).toBe(true);
  });
});
