import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import * as Sentry from '@sentry/nestjs';
import { Observable } from 'rxjs';
import type { JwtPayload } from '../../auth/strategies/jwt.strategy';

@Injectable()
export class SentryUserContextInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    const request = context
      .switchToHttp()
      .getRequest<{ user?: JwtPayload }>();

    if (request.user) {
      Sentry.setUser({ id: request.user.sub, email: request.user.email });
      Sentry.setTag('organization_id', request.user.organizationId);
      Sentry.setTag('user_role', request.user.role);
    }

    return next.handle();
  }
}
