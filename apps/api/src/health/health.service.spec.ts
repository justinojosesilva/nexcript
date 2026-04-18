import { Test, TestingModule } from '@nestjs/testing';
import { HealthService } from './health.service';
import { PrismaService } from '../prisma/prisma.service';
import Redis from 'ioredis';

jest.mock('@nexvideo/database', () => ({
  prisma: {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
    $queryRawUnsafe: jest.fn().mockResolvedValue([{ '1': 1 }]),
  },
}));

describe('HealthService', () => {
  let service: HealthService;
  let prismaService: jest.Mocked<PrismaService>;
  let redisClient: jest.Mocked<Redis>;

  beforeEach(async () => {
    redisClient = {
      ping: jest.fn().mockResolvedValue('PONG'),
      llen: jest.fn().mockResolvedValue(0),
    } as any;

    prismaService = {
      client: {
        $queryRawUnsafe: jest.fn().mockResolvedValue([{ '1': 1 }]),
      },
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        HealthService,
        {
          provide: PrismaService,
          useValue: prismaService,
        },
        {
          provide: 'REDIS_INSTANCE',
          useValue: redisClient,
        },
      ],
    }).compile();

    service = module.get<HealthService>(HealthService);
  });

  describe('getHealth', () => {
    it('should return healthy status when all services are up', async () => {
      const health = await service.getHealth();

      expect(health.status).toBe('healthy');
      expect(health.redis.status).toBe('ok');
      expect(health.database.status).toBe('ok');
      expect(health.workers.status).toBe('ok');
    });

    it('should return degraded status when Redis is down', async () => {
      (redisClient.ping as jest.Mock).mockRejectedValueOnce(
        new Error('Redis connection refused'),
      );

      const health = await service.getHealth();

      expect(health.status).toBe('degraded');
      expect(health.redis.status).toBe('error');
      expect(health.redis.error).toBeDefined();
    });

    it('should return degraded status when database is down', async () => {
      (prismaService.client.$queryRawUnsafe as jest.Mock).mockRejectedValueOnce(
        new Error('Database connection failed'),
      );

      const health = await service.getHealth();

      expect(health.status).toBe('unhealthy');
      expect(health.database.status).toBe('error');
      expect(health.database.error).toBeDefined();
    });

    it('should return unhealthy status when both Redis and database are down', async () => {
      (redisClient.ping as jest.Mock).mockRejectedValueOnce(
        new Error('Redis connection refused'),
      );
      (prismaService.client.$queryRawUnsafe as jest.Mock).mockRejectedValueOnce(
        new Error('Database connection failed'),
      );

      const health = await service.getHealth();

      expect(health.status).toBe('unhealthy');
      expect(health.redis.status).toBe('error');
      expect(health.database.status).toBe('error');
    });

    it('should include response times', async () => {
      const health = await service.getHealth();

      expect(health.redis.responseTime).toBeGreaterThanOrEqual(0);
      expect(health.database.responseTime).toBeGreaterThanOrEqual(0);
    });

    it('should include workers queue length', async () => {
      (redisClient.llen as jest.Mock).mockResolvedValueOnce(5);

      const health = await service.getHealth();

      expect(health.workers.activeCount).toBe(5);
    });

    it('should include timestamp in ISO format', async () => {
      const health = await service.getHealth();

      expect(health.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
      // Verify it's a valid ISO date
      const date = new Date(health.timestamp);
      expect(date.getTime()).not.toBeNaN();
    });
  });
});
