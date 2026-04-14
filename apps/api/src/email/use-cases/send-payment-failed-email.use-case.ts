import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { paymentFailedEmailTemplate } from '../templates/payment-failed-email';

export interface SendPaymentFailedEmailInput {
  userEmail: string;
  organizationName: string;
  amountCents: number;
  nextRetryAt: Date | null;
  billingPortalUrl: string;
}

@Injectable()
export class SendPaymentFailedEmailUseCase {
  private readonly logger = new Logger(SendPaymentFailedEmailUseCase.name);
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.getOrThrow<string>('RESEND_API_KEY'));
  }

  async execute(input: SendPaymentFailedEmailInput): Promise<void> {
    const { userEmail, organizationName, amountCents, nextRetryAt, billingPortalUrl } = input;

    const amountBrl = (amountCents / 100).toFixed(2).replace('.', ',');
    const nextRetryDate = nextRetryAt
      ? nextRetryAt.toLocaleDateString('pt-BR', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        })
      : 'a ser definida';

    const html = paymentFailedEmailTemplate({
      userEmail,
      organizationName,
      amountBrl,
      nextRetryDate,
      updateCardUrl: billingPortalUrl,
    });

    try {
      await this.resend.emails.send({
        from: 'noreply@nexcript.app',
        to: userEmail,
        subject: `⚠️ Falha no pagamento da sua assinatura — ${organizationName}`,
        html,
      });
    } catch (error) {
      // WARN only — must not block webhook processing
      this.logger.warn(
        `Failed to send payment_failed email to ${userEmail}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
