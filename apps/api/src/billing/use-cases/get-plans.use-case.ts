import { Injectable, Inject } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { ICachePort } from '../../cache/interfaces/cache.port';
import { GetPlansResponse } from '../dto/get-plans.dto';

@Injectable()
export class GetPlansUseCase {
  constructor(
    private readonly prisma: PrismaService,
    @Inject('ICachePort') private cache: ICachePort,
  ) {}

  async execute(): Promise<GetPlansResponse> {
    const cacheKey = 'billing:plans';

    // Try to get from cache
    const cached = await this.cache.get<GetPlansResponse>(cacheKey);
    if (cached) {
      return cached;
    }

    // Fetch from database
    const plans = await this.prisma.client.plan.findMany({
      orderBy: { priceMonthlyBrl: 'asc' },
    });

    const response: GetPlansResponse = {
      plans: plans.map((plan) => ({
        slug: plan.slug,
        name: plan.name,
        priceMonthlyBrl: plan.priceMonthlyBrl.toString(),
        limits: {
          scripts: plan.scriptLimit,
          narrations: plan.narrationLimit,
          exports: plan.exportLimit,
        },
      })),
    };

    // Cache for 5 minutes (300 seconds)
    await this.cache.set(cacheKey, response, 300);

    return response;
  }
}
