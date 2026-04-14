import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';
import { inviteEmailTemplate } from '../templates/invite-email';

interface SendInviteEmailInput {
  inviteeEmail: string;
  inviterName: string;
  organizationName: string;
  inviteToken: string;
}

@Injectable()
export class SendInviteEmailUseCase {
  private readonly logger = new Logger(SendInviteEmailUseCase.name);
  private resend: Resend;

  constructor(private readonly config: ConfigService) {
    this.resend = new Resend(this.config.getOrThrow<string>('RESEND_API_KEY'));
  }

  async execute(input: SendInviteEmailInput): Promise<void> {
    const { inviteeEmail, inviterName, organizationName, inviteToken } = input;

    const appUrl = this.config.getOrThrow<string>('APP_URL');
    const inviteUrl = `${appUrl}/invite/${inviteToken}`;

    const html = inviteEmailTemplate({
      inviteeEmail,
      inviterName,
      organizationName,
      inviteUrl,
    });

    try {
      await this.resend.emails.send({
        from: 'noreply@nexcript.app',
        to: inviteeEmail,
        subject: `Você foi convidado para ${organizationName} — Nexcript`,
        html,
      });
    } catch (error) {
      // Log error but don't throw — email failure should not block invite creation
      this.logger.warn(
        `Failed to send invite email to ${inviteeEmail}: ${error instanceof Error ? error.message : String(error)}`,
      );
    }
  }
}
