import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { cancellationWarningEmailTemplate } from '../templates/cancellation-warning-email';

export interface SendCancellationWarningEmailInput {
  userEmail: string;
  organizationName: string;
  cancellationAt: Date;
  billingPortalUrl: string;
}

@Injectable()
export class SendCancellationWarningEmailUseCase {
  private readonly logger = new Logger(SendCancellationWarningEmailUseCase.name);
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.getOrThrow<string>('RESEND_API_KEY'));
  }

  async execute(input: SendCancellationWarningEmailInput): Promise<void> {
    const { userEmail, organizationName, cancellationAt, billingPortalUrl } = input;

    const cancellationDate = cancellationAt.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });

    const html = cancellationWarningEmailTemplate({
      userEmail,
      organizationName,
      cancellationDate,
      billingPortalUrl,
    });

    try {
      await this.resend.emails.send({
        from: 'noreply@nexvideo.app',
        to: userEmail,
        subject: `⏰ Sua assinatura ${organizationName} encerra em 3 dias — nexvideo`,
        html,
      });
    } catch (error) {
      // WARN only — must not block webhook processing
      this.logger.warn(
        `Failed to send cancellation_warning email to ${userEmail}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
