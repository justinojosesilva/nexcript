import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { EnqueueHealthCheckUseCase } from './use-cases/enqueue-health-check.use-case';
import { GetJobStatusUseCase } from './use-cases/get-job-status.use-case';

describe('JobsController', () => {
  let controller: JobsController;
  let enqueueHealthCheckUseCase: EnqueueHealthCheckUseCase;
  let getJobStatusUseCase: GetJobStatusUseCase;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JobsController],
      providers: [
        {
          provide: EnqueueHealthCheckUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue('health-check-123'),
          },
        },
        {
          provide: GetJobStatusUseCase,
          useValue: {
            execute: jest.fn(),
          },
        },
      ],
    }).compile();

    controller = module.get<JobsController>(JobsController);
    enqueueHealthCheckUseCase = module.get<EnqueueHealthCheckUseCase>(
      EnqueueHealthCheckUseCase,
    );
    getJobStatusUseCase = module.get<GetJobStatusUseCase>(GetJobStatusUseCase);
  });

  describe('healthCheck', () => {
    it('should enqueue health check job and return jobId', async () => {
      const result = await controller.healthCheck();

      expect(result).toEqual({ jobId: 'health-check-123' });
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(enqueueHealthCheckUseCase.execute).toHaveBeenCalled();
    });
  });

  describe('getStatus', () => {
    it('should return job status', async () => {
      const mockStatus = {
        id: 'job-123',
        status: 'DONE' as const,
        progress: 100,
        data: {},
      };

      (getJobStatusUseCase.execute as jest.Mock).mockResolvedValue(mockStatus);

      const result = await controller.getStatus('job-123');

      expect(result).toEqual(mockStatus);
      // eslint-disable-next-line @typescript-eslint/unbound-method
      expect(getJobStatusUseCase.execute).toHaveBeenCalledWith('job-123');
    });

    it('should throw NotFoundException when job does not exist', async () => {
      (getJobStatusUseCase.execute as jest.Mock).mockRejectedValue(
        new NotFoundException('Job not found'),
      );

      await expect(controller.getStatus('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
