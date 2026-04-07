import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { GetJobStatusUseCase } from './get-job-status.use-case';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';

describe('GetJobStatusUseCase', () => {
  let useCase: GetJobStatusUseCase;

  let mockQueue: any;

  beforeEach(async () => {
    mockQueue = {
      getJob: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetJobStatusUseCase,
        {
          provide: JOBS_QUEUE_TOKEN,
          useValue: mockQueue,
        },
      ],
    }).compile();

    useCase = module.get<GetJobStatusUseCase>(GetJobStatusUseCase);
  });

  describe('execute', () => {
    it('should return job with status DONE when completed', async () => {
      const mockJob = {
        id: 'job-123',
        data: { test: true },
        progress: 100,
        getState: jest.fn().mockResolvedValue('completed'),
      };

      mockQueue.getJob.mockResolvedValue(mockJob);

      const result = await useCase.execute('job-123');

      expect(result).toEqual({
        id: 'job-123',
        status: 'DONE',
        progress: 100,
        data: { test: true },
      });
    });

    it('should return job with status PROCESSING when active', async () => {
      const mockJob = {
        id: 'job-456',
        data: {},
        progress: 50,
        getState: jest.fn().mockResolvedValue('active'),
      };

      mockQueue.getJob.mockResolvedValue(mockJob);

      const result = await useCase.execute('job-456');

      expect(result.status).toBe('PROCESSING');
      expect(result.progress).toBe(50);
    });

    it('should return job with status PENDING by default', async () => {
      const mockJob = {
        id: 'job-789',
        data: {},
        progress: undefined,
        getState: jest.fn().mockResolvedValue('waiting'),
      };

      mockQueue.getJob.mockResolvedValue(mockJob);

      const result = await useCase.execute('job-789');

      expect(result.status).toBe('PENDING');
    });

    it('should return job with status FAILED and failedReason when failed', async () => {
      const mockJob = {
        id: 'job-fail',
        data: {},
        _progress: undefined,
        failedReason: 'Job execution error',
        getState: jest.fn().mockResolvedValue('failed'),
      };

      mockQueue.getJob.mockResolvedValue(mockJob);

      const result = await useCase.execute('job-fail');

      expect(result.status).toBe('FAILED');
      expect(result.failedReason).toBe('Job execution error');
    });

    it('should throw NotFoundException when job does not exist', async () => {
      mockQueue.getJob.mockResolvedValue(null);

      await expect(useCase.execute('nonexistent')).rejects.toThrow(
        NotFoundException,
      );
    });
  });
});
