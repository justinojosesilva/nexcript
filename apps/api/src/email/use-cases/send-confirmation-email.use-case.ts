import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { confirmationEmailTemplate } from '../templates/confirmation-email';

interface SendConfirmationEmailInput {
  userEmail: string;
  confirmationToken: string;
}

@Injectable()
export class SendConfirmationEmailUseCase {
  private readonly logger = new Logger(SendConfirmationEmailUseCase.name);
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.getOrThrow<string>('RESEND_API_KEY'));
  }

  async execute(input: SendConfirmationEmailInput): Promise<void> {
    const { userEmail, confirmationToken } = input;

    const appUrl = this.config.getOrThrow<string>('APP_URL');
    const confirmationUrl = `${appUrl}/auth/confirm?token=${confirmationToken}`;

    const html = confirmationEmailTemplate({
      userEmail,
      confirmationUrl,
    });

    try {
      await this.resend.emails.send({
        from: 'noreply@nexcript.app',
        to: userEmail,
        subject: 'Confirme seu email — Nexcript',
        html,
      });
    } catch (error) {
      // Log error but don't throw — email failure should not block registration
      this.logger.warn(
        `Failed to send confirmation email to ${userEmail}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
