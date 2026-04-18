const mockPrisma = {
  script: { findUnique: jest.fn() },
  narration: { findUnique: jest.fn() },
  mediaSuggestion: { findMany: jest.fn() },
  publicationMetadata: { findUnique: jest.fn() },
};

jest.mock('@nexvideo/database', () => ({
  prisma: mockPrisma,
  PrismaClient: jest.fn(),
}));

jest.mock('archiver', () => ({
  create: jest.fn(),
}));

import { ProcessExportUseCase } from './process-export.use-case';
import * as archiver from 'archiver';

const mockExportJobRepo = {
  updateStatus: jest.fn(),
};

const mockStoragePort = {
  uploadFile: jest.fn(),
};

describe('ProcessExportUseCase', () => {
  let useCase: ProcessExportUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new ProcessExportUseCase(
      mockExportJobRepo as any,
      mockStoragePort as any,
    );
  });

  const validInput = {
    exportJobId: 'ej-1',
    projectId: 'proj-1',
    scriptId: 'script-1',
    narrationId: 'narration-1',
    organizationId: 'org-1',
  };

  const mockScript = {
    id: 'script-1',
    projectId: 'proj-1',
    formatType: 'long_form',
    blocks: [{ label: 'intro', content: 'Hello' }],
    wordCount: 100,
    estimatedDurationSec: 600,
  };

  const mockNarration = {
    id: 'narration-1',
    audioUrl: 'https://storage.example.com/narration.mp3',
    provider: 'elevenlabs',
    voiceId: 'voice-1',
    durationSec: 120,
  };

  const mockAssets = [
    {
      id: 'asset-1',
      type: 'video',
      url: 'https://pexels.com/video/1',
      prompt: 'nature landscape',
      metadata: { selected: true },
    },
  ];

  const mockPubMeta = {
    id: 'meta-1',
    title: 'My Video Title',
    description: 'Description',
    tags: ['finance', 'tips'],
    thumbnailUrl: null,
    platform: 'youtube',
    complianceScore: 85,
    checklistResults: { originalityScore: 90 },
  };

  function setupMockArchiver() {
    const mockArchive = {
       
      on: jest.fn((event: string, cb: (...args: any[]) => void) => {
        if (event === 'end') {
          (mockArchive as any)._endCb = cb;
        }
        return mockArchive;
      }),
      append: jest.fn(),
      finalize: jest.fn(() => {
        // Simulate data + end
        const dataCb = (mockArchive as any).on.mock.calls.find(
          (c: any) => c[0] === 'data',
        );
        if (dataCb) {
          dataCb[1](Buffer.from('fake-zip-content'));
        }
        const endCb = (mockArchive as any)._endCb;
        if (endCb) endCb();
      }),
    };

    (archiver.create as jest.Mock).mockReturnValue(mockArchive);
    return mockArchive;
  }

  function setupValidData() {
    mockPrisma.script.findUnique.mockResolvedValue(mockScript);
    mockPrisma.narration.findUnique.mockResolvedValue(mockNarration);
    mockPrisma.mediaSuggestion.findMany.mockResolvedValue(mockAssets);
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue(mockPubMeta);
    mockStoragePort.uploadFile.mockResolvedValue(
      'https://storage.example.com/exports/export-ej-1.zip',
    );
    mockExportJobRepo.updateStatus.mockResolvedValue({});
  }

  it('processes export and returns URL with ZIP size', async () => {
    setupValidData();
    setupMockArchiver();

    const result = await useCase.execute(validInput);

    expect(result.exportUrl).toBe(
      'https://storage.example.com/exports/export-ej-1.zip',
    );
    expect(typeof result.zipSize).toBe('number');
    expect(result.zipSize).toBeGreaterThan(0);
    expect(mockStoragePort.uploadFile).toHaveBeenCalledWith(
      expect.any(Buffer),
      expect.stringContaining('exports/org-1/proj-1/export-ej-1.zip'),
      'application/zip',
    );
    expect(mockExportJobRepo.updateStatus).toHaveBeenCalledWith(
      'ej-1',
      'completed',
      { outputUrl: 'https://storage.example.com/exports/export-ej-1.zip' },
    );
  });

  it('includes all 4 files in the ZIP', async () => {
    setupValidData();
    const mockArchive = setupMockArchiver();

    await useCase.execute(validInput);

    const appendCalls = mockArchive.append.mock.calls;
    const fileNames = appendCalls.map((c: any) => c[1].name);

    expect(fileNames).toContain('script.json');
    expect(fileNames).toContain('narration.json');
    expect(fileNames).toContain('selectedAssets.json');
    expect(fileNames).toContain('publicationMetadata.json');
    expect(appendCalls).toHaveLength(4);
  });

  it('serializes script data correctly', async () => {
    setupValidData();
    const mockArchive = setupMockArchiver();

    await useCase.execute(validInput);

    const scriptAppend = mockArchive.append.mock.calls.find(
      (c: any) => c[1].name === 'script.json',
    );
    const parsed = JSON.parse(scriptAppend[0]);

    expect(parsed.id).toBe('script-1');
    expect(parsed.blocks).toEqual([{ label: 'intro', content: 'Hello' }]);
    expect(parsed.formatType).toBe('long_form');
  });

  it('serializes narration data with audioUrl', async () => {
    setupValidData();
    const mockArchive = setupMockArchiver();

    await useCase.execute(validInput);

    const narrationAppend = mockArchive.append.mock.calls.find(
      (c: any) => c[1].name === 'narration.json',
    );
    const parsed = JSON.parse(narrationAppend[0]);

    expect(parsed.audioUrl).toBe(
      'https://storage.example.com/narration.mp3',
    );
    expect(parsed.provider).toBe('elevenlabs');
  });

  it('throws BadRequestException when script not found', async () => {
    mockPrisma.script.findUnique.mockResolvedValue(null);
    mockPrisma.narration.findUnique.mockResolvedValue(mockNarration);
    mockPrisma.mediaSuggestion.findMany.mockResolvedValue(mockAssets);
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue(mockPubMeta);

    await expect(useCase.execute(validInput)).rejects.toThrow(
      'Script not found',
    );
  });

  it('throws BadRequestException when narration not found', async () => {
    mockPrisma.script.findUnique.mockResolvedValue(mockScript);
    mockPrisma.narration.findUnique.mockResolvedValue(null);
    mockPrisma.mediaSuggestion.findMany.mockResolvedValue(mockAssets);
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue(mockPubMeta);

    await expect(useCase.execute(validInput)).rejects.toThrow(
      'Narration not found',
    );
  });

  it('throws BadRequestException when publication metadata not found', async () => {
    mockPrisma.script.findUnique.mockResolvedValue(mockScript);
    mockPrisma.narration.findUnique.mockResolvedValue(mockNarration);
    mockPrisma.mediaSuggestion.findMany.mockResolvedValue(mockAssets);
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue(null);

    await expect(useCase.execute(validInput)).rejects.toThrow(
      'Publication metadata not found',
    );
  });
});
