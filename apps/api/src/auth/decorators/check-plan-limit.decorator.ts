import { SetMetadata } from '@nestjs/common';

export const CHECK_PLAN_LIMIT_METADATA_KEY = 'checkPlanLimit';

/**
 * Marks a controller method to validate plan usage limits before execution.
 * The PlanLimitsGuard will check the current month's usage for the specified resource type
 * and block the request with 402 Payment Required if the limit is exceeded.
 *
 * @param resourceType - The resource type to check limits for ('scripts', 'narrations', or 'exports')
 *
 * @example
 * @Post('scripts/generate')
 * @CheckPlanLimit('scripts')
 * async generateScript(@Body() request: GenerateScriptRequest) {
 *   // Method is only executed if organization hasn't exceeded script limit for this month
 * }
 */
export const CheckPlanLimit = (resourceType: 'scripts' | 'narrations' | 'exports') =>
  SetMetadata(CHECK_PLAN_LIMIT_METADATA_KEY, {
    resourceType,
  });
