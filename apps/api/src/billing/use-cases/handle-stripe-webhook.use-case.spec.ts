import { BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

// ── Mock PrismaService ────────────────────────────────────────────────────────
const mockPrisma = {
  client: {
    subscription: {
      findFirst: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      updateMany: jest.fn(),
    },
    organization: {
      update: jest.fn(),
    },
    plan: {
      findUnique: jest.fn(),
    },
    usageLog: {
      upsert: jest.fn(),
    },
  },
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrisma),
}));

// ── Mock Stripe ───────────────────────────────────────────────────────────────
const mockConstructEvent = jest.fn();
const mockSubscriptionsRetrieve = jest.fn();

jest.mock('stripe', () => {
  const MockStripe = jest.fn().mockImplementation(() => ({
    webhooks: { constructEvent: mockConstructEvent },
    subscriptions: { retrieve: mockSubscriptionsRetrieve },
  }));
  return { default: MockStripe };
});

import { HandleStripeWebhookUseCase } from './handle-stripe-webhook.use-case';

// ── Helpers ───────────────────────────────────────────────────────────────────
function makeConfigService(overrides: Record<string, string> = {}): ConfigService {
  return {
    getOrThrow: jest.fn((key: string) => {
      const map: Record<string, string> = {
        STRIPE_SECRET_KEY: 'sk_test_secret',
        STRIPE_WEBHOOK_SECRET: 'whsec_test',
        ...overrides,
      };
      return map[key];
    }),
  } as any;
}

function makeInput(rawBody = Buffer.from('{}'), signature = 'sig_test') {
  return { rawBody, signature };
}

// ── Tests ─────────────────────────────────────────────────────────────────────
describe('HandleStripeWebhookUseCase', () => {
  let useCase: HandleStripeWebhookUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new HandleStripeWebhookUseCase(makeConfigService(), mockPrisma as any);
  });

  // ── Signature verification ────────────────────────────────────────────────
  it('throws BadRequestException when signature is invalid', async () => {
    mockConstructEvent.mockImplementation(() => {
      throw new Error('No signatures found matching the expected signature for payload');
    });

    await expect(useCase.execute(makeInput())).rejects.toThrow(BadRequestException);
  });

  // ── Unknown event — no-op ─────────────────────────────────────────────────
  it('ignores unknown event types without error', async () => {
    mockConstructEvent.mockReturnValue({
      type: 'some.unknown.event',
      data: { object: {} },
    });

    await expect(useCase.execute(makeInput())).resolves.toBeUndefined();
  });

  // ── checkout.session.completed ────────────────────────────────────────────
  describe('checkout.session.completed', () => {
    const sessionEvent = {
      type: 'checkout.session.completed',
      data: {
        object: {
          subscription: 'sub_abc123',
          metadata: { organizationId: 'org-1', planId: 'plan-starter' },
        },
      },
    };

    const stripeSub = {
      id: 'sub_abc123',
      current_period_end: Math.floor(Date.now() / 1000) + 2592000,
    };

    const plan = {
      id: 'plan-starter',
      slug: 'starter',
      name: 'Starter',
      priceMonthlyBrl: '49.90',
    };

    it('creates Subscription and zeroes UsageLog on first event', async () => {
      mockConstructEvent.mockReturnValue(sessionEvent);
      mockSubscriptionsRetrieve.mockResolvedValue(stripeSub);
      mockPrisma.client.subscription.findFirst.mockResolvedValue(null);
      mockPrisma.client.plan.findUnique.mockResolvedValue(plan);
      mockPrisma.client.subscription.create.mockResolvedValue({
        id: 'sub-db-1',
        organizationId: 'org-1',
        planId: 'plan-starter',
        stripeSubscriptionId: 'sub_abc123',
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.create).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({
            organizationId: 'org-1',
            planId: 'plan-starter',
            stripeSubscriptionId: 'sub_abc123',
            status: 'active',
          }),
        }),
      );

      expect(mockPrisma.client.organization.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'org-1' },
          data: expect.objectContaining({ plan: 'starter' }),
        }),
      );

      expect(mockPrisma.client.usageLog.upsert).toHaveBeenCalledWith(
        expect.objectContaining({
          update: { scripts: 0, narrations: 0, exports: 0 },
          create: expect.objectContaining({ scripts: 0, narrations: 0, exports: 0 }),
        }),
      );
    });

    it('updates existing Subscription without creating duplicate (idempotent)', async () => {
      mockConstructEvent.mockReturnValue(sessionEvent);
      mockSubscriptionsRetrieve.mockResolvedValue(stripeSub);
      mockPrisma.client.subscription.findFirst.mockResolvedValue({
        id: 'sub-db-1',
        stripeSubscriptionId: 'sub_abc123',
      });
      mockPrisma.client.plan.findUnique.mockResolvedValue(plan);

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.create).not.toHaveBeenCalled();
      expect(mockPrisma.client.subscription.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'sub-db-1' },
          data: expect.objectContaining({ status: 'active' }),
        }),
      );
    });

    it('does nothing when metadata is missing', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'checkout.session.completed',
        data: { object: { subscription: 'sub_abc123', metadata: {} } },
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.create).not.toHaveBeenCalled();
    });
  });

  // ── customer.subscription.updated ────────────────────────────────────────
  describe('customer.subscription.updated', () => {
    it('updates subscription status and period end', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'customer.subscription.updated',
        data: {
          object: {
            id: 'sub_abc123',
            status: 'past_due',
            current_period_end: 1800000000,
          },
        },
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { stripeSubscriptionId: 'sub_abc123' },
          data: expect.objectContaining({ status: 'past_due' }),
        }),
      );
    });

    it('maps Stripe "canceled" status to "cancelled"', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'customer.subscription.updated',
        data: {
          object: {
            id: 'sub_xyz',
            status: 'canceled',
            current_period_end: 1800000000,
          },
        },
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          data: expect.objectContaining({ status: 'cancelled' }),
        }),
      );
    });
  });

  // ── customer.subscription.deleted ────────────────────────────────────────
  describe('customer.subscription.deleted', () => {
    it('cancels subscription and downgrades org to Free', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'customer.subscription.deleted',
        data: {
          object: {
            id: 'sub_abc123',
            status: 'canceled',
            current_period_end: 1800000000,
          },
        },
      });

      mockPrisma.client.subscription.findFirst.mockResolvedValue({
        id: 'sub-db-1',
        organizationId: 'org-1',
        stripeSubscriptionId: 'sub_abc123',
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'sub-db-1' },
          data: { status: 'cancelled' },
        }),
      );

      expect(mockPrisma.client.organization.update).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { id: 'org-1' },
          data: { plan: 'free', subscriptionId: null },
        }),
      );
    });

    it('does nothing when subscription is not found in DB', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'customer.subscription.deleted',
        data: {
          object: { id: 'sub_unknown', status: 'canceled', current_period_end: 0 },
        },
      });

      mockPrisma.client.subscription.findFirst.mockResolvedValue(null);

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.update).not.toHaveBeenCalled();
      expect(mockPrisma.client.organization.update).not.toHaveBeenCalled();
    });
  });

  // ── invoice.payment_failed ────────────────────────────────────────────────
  describe('invoice.payment_failed', () => {
    it('sets subscription status to past_due', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'invoice.payment_failed',
        data: {
          object: { subscription: 'sub_abc123' },
        },
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.updateMany).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { stripeSubscriptionId: 'sub_abc123' },
          data: { status: 'past_due' },
        }),
      );
    });

    it('does nothing when invoice has no subscription', async () => {
      mockConstructEvent.mockReturnValue({
        type: 'invoice.payment_failed',
        data: { object: { subscription: null } },
      });

      await useCase.execute(makeInput());

      expect(mockPrisma.client.subscription.updateMany).not.toHaveBeenCalled();
    });
  });
});
