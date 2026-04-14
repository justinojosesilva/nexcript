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
import { SendWelcomeEmailUseCase } from './send-welcome-email.use-case';

describe('SendWelcomeEmailUseCase', () => {
  let useCase: SendWelcomeEmailUseCase;
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
    useCase = new SendWelcomeEmailUseCase(configService);
  });

  it('sends welcome email with user name and correct parameters', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'John Doe',
      userEmail: 'john@example.com',
    });

    expect(mockResend.emails.send).toHaveBeenCalledWith({
      from: 'noreply@nexcript.app',
      to: 'john@example.com',
      subject: expect.stringContaining('Bem-vindo'),
      html: expect.stringContaining('John Doe'),
    });
  });

  it('includes create video link in welcome email', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'Jane Smith',
      userEmail: 'jane@example.com',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('https://app.example.com/projects/create');
  });

  it('includes user email in footer', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'John Doe',
      userEmail: 'john@example.com',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('john@example.com');
  });

  it('mentions platform features in email body', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'User',
      userEmail: 'user@example.com',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.html).toContain('scripts');
    expect(call.html).toContain('narrações');
    expect(call.html).toContain('tendências');
  });

  it('logs warning but does not throw when email send fails', async () => {
    mockResend.emails.send.mockRejectedValue(new Error('Resend API error'));

    // Should not throw
    await expect(
      useCase.execute({
        userName: 'John Doe',
        userEmail: 'john@example.com',
      }),
    ).resolves.toBeUndefined();
  });

  it('uses Resend API key from config', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'User',
      userEmail: 'user@example.com',
    });

    expect(configService.getOrThrow).toHaveBeenCalledWith('RESEND_API_KEY');
    expect(configService.getOrThrow).toHaveBeenCalledWith('APP_URL');
  });

  it('sends email from nexcript domain', async () => {
    mockResend.emails.send.mockResolvedValue({ id: 'email-456' });

    await useCase.execute({
      userName: 'User',
      userEmail: 'user@example.com',
    });

    const call = mockResend.emails.send.mock.calls[0][0];
    expect(call.from).toBe('noreply@nexcript.app');
  });
});
