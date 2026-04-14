import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../../prisma/prisma.service';

interface CreatePortalSessionInput {
  organizationId: string;
}

interface CreatePortalSessionOutput {
  portalUrl: string;
}

@Injectable()
export class CreatePortalSessionUseCase {
  private stripe: InstanceType<typeof Stripe>;

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.stripe = new Stripe(this.config.getOrThrow<string>('STRIPE_SECRET_KEY'));
  }

  async execute(input: CreatePortalSessionInput): Promise<CreatePortalSessionOutput> {
    const { organizationId } = input;

    // Get organization with active subscription
    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
      include: { activeSubscription: true },
    });

    if (!org) {
      throw new NotFoundException(`Organization ${organizationId} not found`);
    }

    // Must have an active subscription (not free tier)
    if (!org.activeSubscription?.stripeSubscriptionId) {
      throw new BadRequestException('Organization does not have an active subscription');
    }

    // Get the Stripe subscription to find the customer ID
    const stripeSub = await this.stripe.subscriptions.retrieve(
      org.activeSubscription.stripeSubscriptionId,
    );

    if (!stripeSub.customer) {
      throw new BadRequestException('No Stripe customer associated with subscription');
    }

    const customerId = typeof stripeSub.customer === 'string'
      ? stripeSub.customer
      : stripeSub.customer.id;

    // Create Stripe billing portal session
    const session = await this.stripe.billingPortal.sessions.create({
      customer: customerId,
      return_url: this.config.getOrThrow<string>('STRIPE_PORTAL_RETURN_URL'),
    });

    if (!session.url) {
      throw new BadRequestException('Failed to create Stripe portal session');
    }

    return { portalUrl: session.url };
  }
}
