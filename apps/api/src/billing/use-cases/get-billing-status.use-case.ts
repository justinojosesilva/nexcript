import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import Stripe from 'stripe';
import { PrismaService } from '../../prisma/prisma.service';
import { GetBillingStatusResponse } from '../dto/get-billing-status.dto';

interface GetBillingStatusInput {
  organizationId: string;
}

@Injectable()
export class GetBillingStatusUseCase {
  private stripe: InstanceType<typeof Stripe>;

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    this.stripe = new Stripe(this.config.getOrThrow<string>('STRIPE_SECRET_KEY'));
  }

  async execute(input: GetBillingStatusInput): Promise<GetBillingStatusResponse> {
    const { organizationId } = input;

    // Fetch organization with active subscription and plan
    const org = await this.prisma.client.organization.findUnique({
      where: { id: organizationId },
      include: {
        activeSubscription: {
          include: { plan: true },
        },
      },
    });

    if (!org) {
      throw new NotFoundException(`Organization ${organizationId} not found`);
    }

    // Free tier organizations don't have an active subscription
    if (!org.activeSubscription?.stripeSubscriptionId) {
      throw new BadRequestException('Organization does not have an active subscription');
    }

    // Get Stripe subscription to retrieve cancel_at_period_end and current_period_end
    const stripeSub = await this.stripe.subscriptions.retrieve(
      org.activeSubscription.stripeSubscriptionId,
    );

    const plan = org.activeSubscription.plan;

    return {
      plan: {
        slug: plan.slug,
        name: plan.name,
        priceMonthlyBrl: plan.priceMonthlyBrl.toString(),
      },
      status: org.activeSubscription.status,
      nextBillingDate: new Date((stripeSub as any).current_period_end * 1000).toISOString(),
      cancelAtPeriodEnd: (stripeSub as any).cancel_at_period_end || false,
    };
  }
}
