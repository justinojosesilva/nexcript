import { SetMetadata } from '@nestjs/common';

export const TENANT_RESOURCE_METADATA_KEY = 'tenantResource';

export interface TenantResourceOptions {
  paramName: string;
  entityName: string;
}

/**
 * Marks a controller method to validate tenant isolation before execution.
 * The TenantGuard will extract the resource ID from the specified route parameter,
 * fetch the resource, and verify its organizationId matches the JWT's organizationId.
 *
 * @param paramName - The name of the route parameter containing the resource ID
 * @param entityName - The Prisma entity name (e.g., 'ContentProject', 'ExportJob')
 *
 * @example
 * @Get(':projectId')
 * @TenantResource('projectId', 'ContentProject')
 * async getProject(@Param('projectId') projectId: string) {
 *   // Method is only executed if projectId's organizationId matches JWT
 * }
 */
export const TenantResource = (paramName: string, entityName: string) =>
  SetMetadata(TENANT_RESOURCE_METADATA_KEY, {
    paramName,
    entityName,
  });
