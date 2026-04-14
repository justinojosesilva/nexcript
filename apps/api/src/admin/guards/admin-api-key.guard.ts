import {
  CanActivate,
  ExecutionContext,
  ForbiddenException,
  Injectable,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

/**
 * Guards admin routes by requiring a valid X-Admin-Key header.
 * The expected key is set via the ADMIN_API_KEY environment variable.
 * If ADMIN_API_KEY is not configured, all admin routes return 403.
 */
@Injectable()
export class AdminApiKeyGuard implements CanActivate {
  constructor(private readonly config: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const adminApiKey = this.config.get<string>('ADMIN_API_KEY');

    // If key is not configured, deny all admin access
    if (!adminApiKey) {
      throw new ForbiddenException('Admin API not configured');
    }

    const request = context.switchToHttp().getRequest<{ headers: Record<string, string> }>();
    const providedKey = request.headers['x-admin-key'];

    if (!providedKey || providedKey !== adminApiKey) {
      throw new ForbiddenException('Invalid or missing X-Admin-Key header');
    }

    return true;
  }
}
