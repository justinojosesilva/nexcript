jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ExportJobRepository } from './export-job.repository';

const mockExportJob = {
  id: 'ej-1',
  organizationId: 'org-1',
  projectId: 'proj-1',
  assetType: 'metadata',
  status: 'pending',
  outputUrl: null,
  errorMessage: null,
  startedAt: null,
  completedAt: null,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    exportJob: {
      create: jest.fn(),
      findUnique: jest.fn(),
      findMany: jest.fn(),
      update: jest.fn(),
    },
  },
};

describe('ExportJobRepository', () => {
  let repo: ExportJobRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repo = new ExportJobRepository(mockPrismaService as any);
  });

  it('create — creates export job with pending status', async () => {
    mockPrismaService.client.exportJob.create.mockResolvedValue(mockExportJob);

    const result = await repo.create({
      organizationId: 'org-1',
      projectId: 'proj-1',
      assetType: 'metadata',
    });

    expect(mockPrismaService.client.exportJob.create).toHaveBeenCalledWith({
      data: {
        organizationId: 'org-1',
        projectId: 'proj-1',
        assetType: 'metadata',
        status: 'pending',
      },
    });
    expect(result).toEqual(mockExportJob);
  });

  it('findById — returns export job', async () => {
    mockPrismaService.client.exportJob.findUnique.mockResolvedValue(
      mockExportJob,
    );

    const result = await repo.findById('ej-1');
    expect(mockPrismaService.client.exportJob.findUnique).toHaveBeenCalledWith({
      where: { id: 'ej-1' },
    });
    expect(result).toEqual(mockExportJob);
  });

  it('findById — returns null if not found', async () => {
    mockPrismaService.client.exportJob.findUnique.mockResolvedValue(null);
    const result = await repo.findById('non-existent');
    expect(result).toBeNull();
  });

  it('findByProject — returns export jobs ordered by createdAt desc', async () => {
    mockPrismaService.client.exportJob.findMany.mockResolvedValue([
      mockExportJob,
    ]);

    const result = await repo.findByProject('proj-1');
    expect(mockPrismaService.client.exportJob.findMany).toHaveBeenCalledWith({
      where: { projectId: 'proj-1' },
      orderBy: { createdAt: 'desc' },
    });
    expect(result).toHaveLength(1);
  });

  it('updateStatus — sets processing with startedAt', async () => {
    const updated = { ...mockExportJob, status: 'processing' };
    mockPrismaService.client.exportJob.update.mockResolvedValue(updated);

    const result = await repo.updateStatus('ej-1', 'processing');
    const callArgs = mockPrismaService.client.exportJob.update.mock.calls[0][0];

    expect(callArgs.where).toEqual({ id: 'ej-1' });
    expect(callArgs.data.status).toBe('processing');
    expect(callArgs.data.startedAt).toBeInstanceOf(Date);
    expect(callArgs.data.completedAt).toBeUndefined();
    expect(result).toEqual(updated);
  });

  it('updateStatus — sets completed with outputUrl and completedAt', async () => {
    const updated = {
      ...mockExportJob,
      status: 'completed',
      outputUrl: 'https://example.com/export.zip',
    };
    mockPrismaService.client.exportJob.update.mockResolvedValue(updated);

    const result = await repo.updateStatus('ej-1', 'completed', {
      outputUrl: 'https://example.com/export.zip',
    });
    const callArgs = mockPrismaService.client.exportJob.update.mock.calls[0][0];

    expect(callArgs.data.status).toBe('completed');
    expect(callArgs.data.outputUrl).toBe('https://example.com/export.zip');
    expect(callArgs.data.completedAt).toBeInstanceOf(Date);
    expect(result).toEqual(updated);
  });

  it('updateStatus — sets failed with errorMessage and completedAt', async () => {
    const updated = {
      ...mockExportJob,
      status: 'failed',
      errorMessage: 'Something went wrong',
    };
    mockPrismaService.client.exportJob.update.mockResolvedValue(updated);

    const result = await repo.updateStatus('ej-1', 'failed', {
      errorMessage: 'Something went wrong',
    });
    const callArgs = mockPrismaService.client.exportJob.update.mock.calls[0][0];

    expect(callArgs.data.status).toBe('failed');
    expect(callArgs.data.errorMessage).toBe('Something went wrong');
    expect(callArgs.data.completedAt).toBeInstanceOf(Date);
    expect(result).toEqual(updated);
  });
});
