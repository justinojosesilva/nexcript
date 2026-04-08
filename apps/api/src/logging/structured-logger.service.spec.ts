import { Test, TestingModule } from '@nestjs/testing';
import { Logger } from '@nestjs/common';
import { StructuredLoggerService } from './structured-logger.service';

describe('StructuredLoggerService', () => {
  let service: StructuredLoggerService;
  let logSpy: jest.SpyInstance;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StructuredLoggerService],
    }).compile();

    service = module.get<StructuredLoggerService>(StructuredLoggerService);
    logSpy = jest.spyOn(Logger.prototype, 'log').mockImplementation();
  });

  afterEach(() => {
    logSpy.mockRestore();
  });

  describe('logJob', () => {
    it('should log a job as JSON string', () => {
      const jobLog = {
        timestamp: '2026-04-08T20:30:00Z',
        level: 'INFO' as const,
        jobId: 'job-123',
        organizationId: 'org-1',
        type: 'script' as const,
        status: 'completed' as const,
        durationMs: 5000,
        costBrl: 1.50,
        provider: 'openai',
      };

      service.logJob(jobLog);

      expect(logSpy).toHaveBeenCalled();
      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.jobId).toBe('job-123');
      expect(parsed.level).toBe('INFO');
      expect(parsed.costBrl).toBe(1.50);
    });

    it('should add timestamp if not provided', () => {
      const jobLog = {
        level: 'INFO' as const,
        jobId: 'job-123',
        type: 'script' as const,
        status: 'completed' as const,
      };

      service.logJob(jobLog);

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.timestamp).toBeDefined();
      expect(parsed.timestamp).toMatch(/^\d{4}-\d{2}-\d{2}T/);
    });
  });

  describe('logCostWarning', () => {
    it('should log warning when cost exceeds 80% of max', () => {
      const maxCost = 2.0;
      const actualCost = 1.6; // 80% of max

      service.logCostWarning('job-123', 'org-1', actualCost, maxCost);

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.level).toBe('WARN');
      expect(parsed.errorCode).toBe('COST_WARNING');
      expect(parsed.costBrl).toBe(1.6);
      expect(parsed.errorMessage).toContain('80%');
    });

    it('should include percentage in warning message', () => {
      service.logCostWarning('job-123', 'org-1', 1.8, 2.0);

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.errorMessage).toContain('90.0%');
    });
  });

  describe('logApiError', () => {
    it('should log API error with provider and error code', () => {
      service.logApiError(
        'job-123',
        'org-1',
        'elevenlabs',
        'RATE_LIMIT_EXCEEDED',
        'Rate limit exceeded',
        'narration',
      );

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.level).toBe('ERROR');
      expect(parsed.status).toBe('failed');
      expect(parsed.provider).toBe('elevenlabs');
      expect(parsed.errorCode).toBe('RATE_LIMIT_EXCEEDED');
      expect(parsed.type).toBe('narration');
    });

    it('should sanitize sensitive data from error messages', () => {
      const errorWithKey =
        'API error: api_key=sk_live_1234567890abcdefghij';

      service.logApiError(
        'job-123',
        'org-1',
        'openai',
        'AUTH_ERROR',
        errorWithKey,
      );

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.errorMessage).not.toContain('sk_live_');
      expect(parsed.errorMessage).toContain('***');
    });

    it('should sanitize Bearer tokens', () => {
      const errorWithToken = 'Auth failed: Bearer abc123def456xyz';

      service.logApiError(
        'job-123',
        'org-1',
        'external-api',
        'AUTH_ERROR',
        errorWithToken,
      );

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.errorMessage).not.toContain('abc123def456xyz');
      expect(parsed.errorMessage).toContain('bearer ***');
    });
  });

  describe('logJobStart', () => {
    it('should log job start with queue wait time', () => {
      service.logJobStart('job-123', 'org-1', 'script', 1500);

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.level).toBe('INFO');
      expect(parsed.status).toBe('started');
      expect(parsed.queueWaitMs).toBe(1500);
    });
  });

  describe('logJobCompletion', () => {
    it('should log job completion with all metrics', () => {
      service.logJobCompletion(
        'job-123',
        'org-1',
        'narration',
        3000,
        0.75,
        'elevenlabs',
      );

      const loggedData = logSpy.mock.calls[0][0];
      const parsed = JSON.parse(loggedData);

      expect(parsed.level).toBe('INFO');
      expect(parsed.status).toBe('completed');
      expect(parsed.processingMs).toBe(3000);
      expect(parsed.durationMs).toBe(3000);
      expect(parsed.costBrl).toBe(0.75);
      expect(parsed.provider).toBe('elevenlabs');
      expect(parsed.type).toBe('narration');
    });
  });
});
