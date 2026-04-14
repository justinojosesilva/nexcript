import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { welcomeEmailTemplate } from '../templates/welcome-email';

interface SendWelcomeEmailInput {
  userName: string;
  userEmail: string;
}

@Injectable()
export class SendWelcomeEmailUseCase {
  private readonly logger = new Logger(SendWelcomeEmailUseCase.name);
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.getOrThrow<string>('RESEND_API_KEY'));
  }

  async execute(input: SendWelcomeEmailInput): Promise<void> {
    const { userName, userEmail } = input;

    const appUrl = this.config.getOrThrow<string>('APP_URL');
    const createVideoUrl = `${appUrl}/projects/create`;

    const html = welcomeEmailTemplate({
      userName,
      userEmail,
      createVideoUrl,
    });

    try {
      await this.resend.emails.send({
        from: 'noreply@nexcript.app',
        to: userEmail,
        subject: 'Bem-vindo ao Nexcript — Crie seu primeiro vídeo',
        html,
      });
    } catch (error) {
      // Log error but don't throw — email failure should not block onboarding
      this.logger.warn(
        `Failed to send welcome email to ${userEmail}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
