import { Module } from '@nestjs/common';
import { APP_FILTER, APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { SentryGlobalFilter, SentryModule } from '@sentry/nestjs/setup';
import { SentryUserContextInterceptor } from './common/interceptors/sentry-user-context.interceptor';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { envValidationSchema } from './config/env.validation';
import { PrismaModule } from './prisma/prisma.module';
import { RepositoriesModule } from './repositories/repositories.module';
import { AuthModule } from './auth/auth.module';
import { ChannelsModule } from './channels/channels.module';
import { ProjectsModule } from './projects/projects.module';
import { BullmqModule } from './bullmq/bullmq.module';
import { JobsModule } from './jobs/jobs.module';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { TenantGuard } from './auth/guards/tenant.guard';
import { PlanLimitsGuard } from './auth/guards/plan-limits.guard';
import { CacheModule } from './cache/cache.module';
import { ScoringModule } from './scoring/scoring.module';
import { TrendsModule } from './trends/trends.module';
import { ScriptsModule } from './scripts/scripts.module';
import { NarrationsModule } from './narrations/narrations.module';
import { PromptsModule } from './prompts/prompts.module';
import { HealthModule } from './health/health.module';
import { LoggingModule } from './logging/logging.module';
import { MediaModule } from './media/media.module';
import { PublicationMetadataModule } from './publication-metadata/publication-metadata.module';
import { ExportModule } from './export/export.module';
import { BillingModule } from './billing/billing.module';
import { OrganizationsModule } from './organizations/organizations.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    SentryModule.forRoot(),
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: envValidationSchema,
      validationOptions: {
        abortEarly: true,
      },
    }),
    PrismaModule,
    CacheModule,
    ScoringModule,
    TrendsModule,
    RepositoriesModule,
    AuthModule,
    ChannelsModule,
    ProjectsModule,
    ScriptsModule,
    NarrationsModule,
    PromptsModule,
    MediaModule,
    PublicationMetadataModule,
    ExportModule,
    BillingModule,
    OrganizationsModule,
    AdminModule,
    HealthModule,
    LoggingModule,
    BullmqModule,
    JobsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_FILTER,
      useClass: SentryGlobalFilter,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: SentryUserContextInterceptor,
    },
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: TenantGuard,
    },
    {
      provide: APP_GUARD,
      useClass: PlanLimitsGuard,
    },
  ],
})
export class AppModule {}
