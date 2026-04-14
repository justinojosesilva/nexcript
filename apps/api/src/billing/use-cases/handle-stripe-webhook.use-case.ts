import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../../prisma/prisma.service';

interface HandleStripeWebhookInput {
  rawBody: Buffer;
  signature: string;
}

// Stripe v22 webhook event shape
interface StripeWebhookEvent {
  type: string;
  data: { object: Record<string, any> };
}

@Injectable()
export class HandleStripeWebhookUseCase {
  private stripe: InstanceType<typeof Stripe>;

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.stripe = new Stripe(this.config.getOrThrow<string>('STRIPE_SECRET_KEY'));
  }

  async execute(input: HandleStripeWebhookInput): Promise<void> {
    const { rawBody, signature } = input;
    const webhookSecret = this.config.getOrThrow<string>('STRIPE_WEBHOOK_SECRET');

    let event: StripeWebhookEvent;
    try {
      event = this.stripe.webhooks.constructEvent(
        rawBody,
        signature,
        webhookSecret,
      ) as unknown as StripeWebhookEvent;
    } catch (err) {
      throw new BadRequestException(
        `Webhook signature verification failed: ${(err as Error).message}`,
      );
    }

    const obj = event.data.object;

    switch (event.type) {
      case 'checkout.session.completed':
        await this.handleCheckoutSessionCompleted(obj);
        break;
      case 'customer.subscription.updated':
        await this.handleSubscriptionUpdated(obj);
        break;
      case 'customer.subscription.deleted':
        await this.handleSubscriptionDeleted(obj);
        break;
      case 'invoice.payment_failed':
        await this.handleInvoicePaymentFailed(obj);
        break;
      default:
        break;
    }
  }

  private async handleCheckoutSessionCompleted(
    session: Record<string, any>,
  ): Promise<void> {
    const organizationId = session.metadata?.organizationId as string | undefined;
    const planId = session.metadata?.planId as string | undefined;

    if (!organizationId || !planId) return;

    const rawSub = session.subscription;
    const stripeSubscriptionId: string | undefined =
      typeof rawSub === 'string' ? rawSub : rawSub?.id;

    if (!stripeSubscriptionId) return;

    const stripeSub = await this.stripe.subscriptions.retrieve(stripeSubscriptionId);
    const currentPeriodEnd = new Date(
      (stripeSub as any).current_period_end * 1000,
    );

    // Idempotency: check if a Subscription already exists for this Stripe subscription
    const existingSubscription = await this.prisma.client.subscription.findFirst({
      where: { stripeSubscriptionId },
    });

    const now = new Date();
    const currentMonth = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}`;

    const plan = await this.prisma.client.plan.findUnique({ where: { id: planId } });
    if (!plan) return;

    if (existingSubscription) {
      await this.prisma.client.subscription.update({
        where: { id: existingSubscription.id },
        data: { status: 'active', currentPeriodEnd },
      });
    } else {
      const newSubscription = await this.prisma.client.subscription.create({
        data: {
          organizationId,
          planId: plan.id,
          status: 'active',
          stripeSubscriptionId,
          currentPeriodEnd,
        },
      });

      await this.prisma.client.organization.update({
        where: { id: organizationId },
        data: {
          subscriptionId: newSubscription.id,
          plan: plan.slug as any,
        },
      });
    }

    // Zero usage log for the new billing period (create or reset)
    await this.prisma.client.usageLog.upsert({
      where: { organizationId_month: { organizationId, month: currentMonth } },
      update: { scripts: 0, narrations: 0, exports: 0 },
      create: { organizationId, month: currentMonth, scripts: 0, narrations: 0, exports: 0 },
    });
  }

  private async handleSubscriptionUpdated(
    stripeSub: Record<string, any>,
  ): Promise<void> {
    const statusMap: Record<string, string> = {
      active: 'active',
      past_due: 'past_due',
      unpaid: 'past_due',
      canceled: 'cancelled',
      incomplete: 'inactive',
      incomplete_expired: 'inactive',
      trialing: 'trialing',
      paused: 'inactive',
    };

    const status = statusMap[stripeSub.status as string] ?? 'inactive';
    const currentPeriodEnd = new Date(stripeSub.current_period_end * 1000);

    await this.prisma.client.subscription.updateMany({
      where: { stripeSubscriptionId: stripeSub.id as string },
      data: { status: status as any, currentPeriodEnd },
    });
  }

  private async handleSubscriptionDeleted(
    stripeSub: Record<string, any>,
  ): Promise<void> {
    const subscription = await this.prisma.client.subscription.findFirst({
      where: { stripeSubscriptionId: stripeSub.id as string },
    });

    if (!subscription) return;

    await this.prisma.client.subscription.update({
      where: { id: subscription.id },
      data: { status: 'cancelled' },
    });

    await this.prisma.client.organization.update({
      where: { id: subscription.organizationId },
      data: { plan: 'free', subscriptionId: null },
    });
  }

  private async handleInvoicePaymentFailed(
    invoice: Record<string, any>,
  ): Promise<void> {
    const rawSub = invoice.subscription;
    const stripeSubscriptionId: string | undefined =
      typeof rawSub === 'string' ? rawSub : rawSub?.id;

    if (!stripeSubscriptionId) return;

    await this.prisma.client.subscription.updateMany({
      where: { stripeSubscriptionId },
      data: { status: 'past_due' },
    });
  }
}
