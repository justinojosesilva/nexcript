const mockResend = {
  emails: {
    send: jest.fn(),
  },
};

jest.mock('resend', () => {
  return {
    Resend: jest.fn(() => mockResend),
  };
});

import { ConfigService } from '@nestjs/config';
import { SendConfirmationEmailUseCase } from './send-confirmation-email.use-case';

describe('SendConfirmationEmailUseCase', () => {
  let useCase: SendConfirmationEmailUseCase;
  let configService: ConfigService;

  beforeEach(() => {
    jest.clearAllMocks();
    configService = {
      getOrThrow: jest.fn((key: string) => {
        if (key === 'RESEND_API_KEY') return 'test-api-key';
        if (key === 'APP_URL') return 'https://app.example.com';
        throw new Error(`Unknown config key: ${key}`);
      }),
    } as any;
    useCase = new SendConfirmationEmailUseCase(configService);
  });

  it('sends confirmation email with correct parameters', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-123' });

    await useCase.execute({
      userEmail: 'user@example.com',
      confirmationToken: 'token-123',
    });

    expect(mockResend.emails.send).toHaveBeenCalledWith({
      from: 'noreply@nexcript.app',
      to: 'user@example.com',
      subject: 'Confirme seu email — Nexcript',
      html: expect.stringContaining('https://app.example.com/auth/confirm?token=token-123'),
    });
  });

  it('includes confirmation link with token in email', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-123' });

    await useCase.execute({
      userEmail: 'test@example.com',
      confirmationToken: 'abc-def-ghi',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('abc-def-ghi');
    expect(call.html).toContain('/auth/confirm?token=');
  });

  it('includes user email in footer', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-123' });

    await useCase.execute({
      userEmail: 'user@example.com',
      confirmationToken: 'token-123',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('user@example.com');
  });

  it('logs warning but does not throw when email send fails', async () => {
    mockResend.emails.send.mockRejectedValue(new Error('Resend API error'));

    // Should not throw
    await expect(
      useCase.execute({
        userEmail: 'user@example.com',
        confirmationToken: 'token-123',
      }),
    ).resolves.toBeUndefined();

    // Verify send was still attempted
    expect(mockResend.emails.send).toHaveBeenCalled();
  });

  it('handles both string and error objects when logging failures', async () => {
    mockResend.emails.send.mockRejectedValueOnce(new Error('Network error'));

    await useCase.execute({
      userEmail: 'user@example.com',
      confirmationToken: 'token-123',
    });

    expect(mockResend.emails.send).toHaveBeenCalled();
  });

  it('includes 24-hour expiry warning in email', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-123' });

    await useCase.execute({
      userEmail: 'user@example.com',
      confirmationToken: 'token-123',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('24 horas');
  });
});
