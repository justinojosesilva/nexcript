import { Module } from '@nestjs/common';
import { SendConfirmationEmailUseCase } from './use-cases/send-confirmation-email.use-case';
import { SendWelcomeEmailUseCase } from './use-cases/send-welcome-email.use-case';
import { SendInviteEmailUseCase } from './use-cases/send-invite-email.use-case';

@Module({
  providers: [SendConfirmationEmailUseCase, SendWelcomeEmailUseCase, SendInviteEmailUseCase],
  exports: [SendConfirmationEmailUseCase, SendWelcomeEmailUseCase, SendInviteEmailUseCase],
})
export class EmailModule {}
