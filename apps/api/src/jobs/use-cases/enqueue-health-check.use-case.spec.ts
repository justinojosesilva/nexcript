import { Test, TestingModule } from '@nestjs/testing';
import { EnqueueHealthCheckUseCase } from './enqueue-health-check.use-case';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';

describe('EnqueueHealthCheckUseCase', () => {
  let useCase: EnqueueHealthCheckUseCase;

  let mockQueue: any;

  beforeEach(async () => {
    let callCount = 0;
    mockQueue = {
      add: jest.fn().mockImplementation(() => {
        callCount++;
        return Promise.resolve({ id: `health-check-${callCount}` });
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnqueueHealthCheckUseCase,
        {
          provide: JOBS_QUEUE_TOKEN,
          useValue: mockQueue,
        },
      ],
    }).compile();

    useCase = module.get<EnqueueHealthCheckUseCase>(EnqueueHealthCheckUseCase);
  });

  describe('execute', () => {
    it('should enqueue a health check job and return jobId', async () => {
      const jobId = await useCase.execute();

      expect(jobId).toBe('health-check-1');
      expect(mockQueue.add).toHaveBeenCalledWith(
        'health-check',
        expect.objectContaining({ timestamp: expect.any(String) }),
        expect.objectContaining({
          jobId: expect.stringContaining('health-check-'),
        }),
      );
    });

    it('should generate unique jobId with timestamp', async () => {
      const jobId1 = await useCase.execute();
      const jobId2 = await useCase.execute();

      expect(jobId1).not.toBe(jobId2);
    });
  });
});
