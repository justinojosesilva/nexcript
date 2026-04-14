import { Injectable, BadRequestException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../../prisma/prisma.service';

interface CreateCheckoutSessionInput {
  planSlug: string;
  organizationId: string;
  customerEmail: string;
}

interface CreateCheckoutSessionOutput {
  checkoutUrl: string;
}

@Injectable()
export class CreateCheckoutSessionUseCase {
  private stripe: InstanceType<typeof Stripe>;

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.stripe = new Stripe(this.config.getOrThrow<string>('STRIPE_SECRET_KEY'));
  }

  async execute(input: CreateCheckoutSessionInput): Promise<CreateCheckoutSessionOutput> {
    const { planSlug, organizationId, customerEmail } = input;

    if (planSlug === 'free') {
      throw new BadRequestException('Free tier does not require a checkout session');
    }

    const plan = await this.prisma.client.plan.findUnique({
      where: { slug: planSlug },
    });

    if (!plan) {
      throw new BadRequestException(`Plan "${planSlug}" not found`);
    }

    const unitAmount = Math.round(Number(plan.priceMonthlyBrl) * 100);

    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'subscription',
      customer_email: customerEmail,
      metadata: {
        organizationId,
        planId: plan.id,
      },
      line_items: [
        {
          price_data: {
            currency: 'brl',
            product_data: {
              name: plan.name,
            },
            unit_amount: unitAmount,
            recurring: { interval: 'month' },
          },
          quantity: 1,
        },
      ],
      success_url: this.config.getOrThrow<string>('STRIPE_SUCCESS_URL'),
      cancel_url: this.config.getOrThrow<string>('STRIPE_CANCEL_URL'),
    });

    if (!session.url) {
      throw new BadRequestException('Failed to create Stripe Checkout session');
    }

    return { checkoutUrl: session.url };
  }
}
