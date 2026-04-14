import { Module } from '@nestjs/common';
import { SendConfirmationEmailUseCase } from './use-cases/send-confirmation-email.use-case';
import { SendWelcomeEmailUseCase } from './use-cases/send-welcome-email.use-case';
import { SendInviteEmailUseCase } from './use-cases/send-invite-email.use-case';
import { SendPaymentFailedEmailUseCase } from './use-cases/send-payment-failed-email.use-case';
import { SendCancellationWarningEmailUseCase } from './use-cases/send-cancellation-warning-email.use-case';

@Module({
  providers: [
    SendConfirmationEmailUseCase,
    SendWelcomeEmailUseCase,
    SendInviteEmailUseCase,
    SendPaymentFailedEmailUseCase,
    SendCancellationWarningEmailUseCase,
  ],
  exports: [
    SendConfirmationEmailUseCase,
    SendWelcomeEmailUseCase,
    SendInviteEmailUseCase,
    SendPaymentFailedEmailUseCase,
    SendCancellationWarningEmailUseCase,
  ],
})
export class EmailModule {}
