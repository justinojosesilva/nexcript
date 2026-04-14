import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
  BadRequestException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PrismaService } from '../../prisma/prisma.service';
import { TENANT_RESOURCE_METADATA_KEY } from '../decorators/tenant-resource.decorator';

interface TenantResourceMetadata {
  paramName: string;
  entityName: string;
}

@Injectable()
export class TenantGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // Skip guard for public routes
    const isPublic = this.reflector.getAllAndOverride<boolean>('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (isPublic) {
      return true;
    }

    // Get tenant resource metadata from decorator
    const metadata = this.reflector.get<TenantResourceMetadata>(
      TENANT_RESOURCE_METADATA_KEY,
      context.getHandler(),
    );

    // If no metadata, guard passes (protection is optional per-endpoint)
    if (!metadata) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const jwtPayload = request.user;

    if (!jwtPayload?.organizationId) {
      throw new BadRequestException('organizationId not found in JWT');
    }

    const resourceId = request.params[metadata.paramName];

    if (!resourceId) {
      throw new BadRequestException(
        `Resource parameter '${metadata.paramName}' not found in request`,
      );
    }

    // Fetch resource and verify tenant isolation
    const resourceOrganizationId = await this.getResourceOrganizationId(
      metadata.entityName,
      resourceId,
    );

    if (resourceOrganizationId !== jwtPayload.organizationId) {
      throw new ForbiddenException(
        'Access denied: resource does not belong to your organization',
      );
    }

    return true;
  }

  private async getResourceOrganizationId(
    entityName: string,
    resourceId: string,
  ): Promise<string | null> {
    const prisma = this.prisma.client;

    const entityMap: Record<
      string,
      (id: string) => Promise<any>
    > = {
      ContentProject: async (id) =>
        prisma.contentProject.findUnique({
          where: { id },
          select: { organizationId: true },
        }),
      ExportJob: async (id) =>
        prisma.exportJob.findUnique({
          where: { id },
          select: { organizationId: true },
        }),
      PublicationMetadata: async (id) =>
        prisma.publicationMetadata.findUnique({
          where: { id },
          select: { organizationId: true },
        }),
      Script: async (id) =>
        prisma.script.findUnique({
          where: { id },
          select: {
            contentProject: {
              select: { organizationId: true },
            },
          },
        }),
      Narration: async (id) =>
        prisma.narration.findUnique({
          where: { id },
          select: {
            script: {
              select: {
                contentProject: {
                  select: { organizationId: true },
                },
              },
            },
          },
        }),
    };

    const fetcher = entityMap[entityName];

    if (!fetcher) {
      throw new Error(`Unsupported entity type for tenant guard: ${entityName}`);
    }

    const resource = await fetcher(resourceId);

    if (!resource) {
      return null;
    }

    // Handle nested organizationId (e.g., script.contentProject.organizationId)
    if ('organizationId' in resource) {
      return (resource as any).organizationId;
    }

    if ('contentProject' in resource) {
      return (resource as any).contentProject.organizationId;
    }

    if ('script' in resource) {
      return (resource as any).script.contentProject.organizationId;
    }

    return null;
  }
}
