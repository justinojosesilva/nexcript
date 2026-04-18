import { EnqueueTrendAnalysisUseCase } from './enqueue-trend-analysis.use-case';
import { NicheCategory } from '@nexvideo/shared';
import { Queue } from 'bullmq';

describe('EnqueueTrendAnalysisUseCase', () => {
  let useCase: EnqueueTrendAnalysisUseCase;
  let mockQueue: Partial<Queue>;

  beforeEach(() => {
    mockQueue = {
      add: jest.fn().mockResolvedValue({
        id: 'job-id-123',
      }),
    };

    useCase = new EnqueueTrendAnalysisUseCase(mockQueue as Queue);
  });

  it('should enqueue a trend analysis job', async () => {
    const input = {
      projectId: 'proj-1',
      organizationId: 'org-1',
      keyword: 'javascript',
      geo: 'BR',
      niche: NicheCategory.TECHNOLOGY,
    };

    const jobId = await useCase.execute(input);

    expect(jobId).toBe('job-id-123');
    expect(mockQueue.add).toHaveBeenCalledWith(
      'analyze-trends',
      input,
      expect.objectContaining({
        jobId: expect.stringContaining('analyze-trends-proj-1-'),
      }),
    );
  });

  it('should return the job ID from the queue', async () => {
    const input = {
      projectId: 'proj-2',
      organizationId: 'org-2',
      keyword: 'react',
      geo: 'US',
      niche: NicheCategory.TECHNOLOGY,
    };

    (mockQueue.add as jest.Mock).mockResolvedValueOnce({
      id: 'custom-job-id',
    });

    const jobId = await useCase.execute(input);

    expect(jobId).toBe('custom-job-id');
  });

  it('should include all input parameters in the job data', async () => {
    const input = {
      projectId: 'proj-3',
      organizationId: 'org-3',
      keyword: 'typescript',
      geo: 'DE',
      niche: NicheCategory.TECHNOLOGY,
    };

    await useCase.execute(input);

    const callArgs = (mockQueue.add as jest.Mock).mock.calls[0];
    expect(callArgs[0]).toBe('analyze-trends');
    expect(callArgs[1]).toEqual(input);
  });
});
