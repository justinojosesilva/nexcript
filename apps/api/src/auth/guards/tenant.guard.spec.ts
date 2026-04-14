import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

// Mock PrismaService BEFORE importing TenantGuard to avoid DATABASE_URL requirement
const mockPrismaService = {
  client: {
    contentProject: {
      findUnique: jest.fn(),
    },
    exportJob: {
      findUnique: jest.fn(),
    },
    publicationMetadata: {
      findUnique: jest.fn(),
    },
    script: {
      findUnique: jest.fn(),
    },
    narration: {
      findUnique: jest.fn(),
    },
  },
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrismaService),
}));

import { TenantGuard } from './tenant.guard';

describe('TenantGuard', () => {
  let guard: TenantGuard;
  let reflector: Reflector;
  let executionContext: ExecutionContext;

  beforeEach(() => {
    reflector = {
      get: jest.fn(),
      getAllAndOverride: jest.fn(),
    } as any;

    // Reset all mocks
    jest.clearAllMocks();

    guard = new TenantGuard(reflector, mockPrismaService as any);
  });

  describe('canActivate', () => {
    it('should allow access to @Public routes without validation', async () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(true);

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
      } as any;

      const result = await guard.canActivate(executionContext);

      expect(result).toBe(true);
      expect(reflector.get).not.toHaveBeenCalled();
    });

    it('should pass when @TenantResource is not applied', async () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce(undefined);

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId: 'org-123' },
            params: {},
          }),
        }),
      } as any;

      const result = await guard.canActivate(executionContext);

      expect(result).toBe(true);
    });

    it('should allow access when organizationId matches', async () => {
      const resourceId = 'project-123';
      const organizationId = 'org-123';

      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'projectId',
        entityName: 'ContentProject',
      });

      (mockPrismaService.client.contentProject.findUnique as jest.Mock).mockResolvedValueOnce({
        organizationId,
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId },
            params: { projectId: resourceId },
          }),
        }),
      } as any;

      const result = await guard.canActivate(executionContext);

      expect(result).toBe(true);
      expect(mockPrismaService.client.contentProject.findUnique).toHaveBeenCalledWith({
        where: { id: resourceId },
        select: { organizationId: true },
      });
    });

    it('should throw ForbiddenException when organizationId does not match', async () => {
      const resourceId = 'project-123';
      const userOrgId = 'org-123';
      const resourceOrgId = 'org-999';

      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'projectId',
        entityName: 'ContentProject',
      });

      (mockPrismaService.client.contentProject.findUnique as jest.Mock).mockResolvedValueOnce({
        organizationId: resourceOrgId,
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId: userOrgId },
            params: { projectId: resourceId },
          }),
        }),
      } as any;

      await expect(guard.canActivate(executionContext)).rejects.toThrow(
        'Access denied: resource does not belong to your organization',
      );
    });

    it('should throw BadRequestException when JWT organizationId is missing', async () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'projectId',
        entityName: 'ContentProject',
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: {},
            params: { projectId: 'project-123' },
          }),
        }),
      } as any;

      await expect(guard.canActivate(executionContext)).rejects.toThrow(
        'organizationId not found in JWT',
      );
    });

    it('should throw BadRequestException when resource parameter is missing', async () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'projectId',
        entityName: 'ContentProject',
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId: 'org-123' },
            params: {},
          }),
        }),
      } as any;

      await expect(guard.canActivate(executionContext)).rejects.toThrow(
        "Resource parameter 'projectId' not found in request",
      );
    });

    it('should handle ExportJob entity with direct organizationId', async () => {
      const jobId = 'export-123';
      const organizationId = 'org-123';

      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'jobId',
        entityName: 'ExportJob',
      });

      (mockPrismaService.client.exportJob.findUnique as jest.Mock).mockResolvedValueOnce({
        organizationId,
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId },
            params: { jobId },
          }),
        }),
      } as any;

      const result = await guard.canActivate(executionContext);

      expect(result).toBe(true);
      expect(mockPrismaService.client.exportJob.findUnique).toHaveBeenCalledWith({
        where: { id: jobId },
        select: { organizationId: true },
      });
    });

    it('should handle nested organizationId through contentProject relationship', async () => {
      const narrationId = 'narration-123';
      const organizationId = 'org-123';

      (mockPrismaService.client.narration.findUnique as jest.Mock).mockResolvedValueOnce({
        script: {
          contentProject: {
            organizationId,
          },
        },
      });

      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'narrationId',
        entityName: 'Narration',
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId },
            params: { narrationId },
          }),
        }),
      } as any;

      const result = await guard.canActivate(executionContext);

      expect(result).toBe(true);
    });

    it('should throw error for unsupported entity type', async () => {
      (reflector.getAllAndOverride as jest.Mock).mockReturnValueOnce(false);
      (reflector.get as jest.Mock).mockReturnValueOnce({
        paramName: 'itemId',
        entityName: 'UnsupportedEntity',
      });

      executionContext = {
        getHandler: jest.fn(),
        getClass: jest.fn(),
        switchToHttp: jest.fn().mockReturnValue({
          getRequest: jest.fn().mockReturnValue({
            user: { organizationId: 'org-123' },
            params: { itemId: 'item-123' },
          }),
        }),
      } as any;

      await expect(guard.canActivate(executionContext)).rejects.toThrow(
        'Unsupported entity type for tenant guard: UnsupportedEntity',
      );
    });
  });
});
