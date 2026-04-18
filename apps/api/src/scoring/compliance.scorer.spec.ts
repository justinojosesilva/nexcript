import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexvideo/database';
import { ComplianceScorer } from './compliance.scorer';
import { NicheCategory } from '@nexvideo/shared';

jest.mock('@nexvideo/database', () => ({
  prisma: {
    script: {
      findFirst: jest.fn(),
    },
    trendAnalysis: {
      findFirst: jest.fn(),
    },
    mediaSuggestion: {
      findMany: jest.fn(),
    },
    contentProject: {
      findFirst: jest.fn(),
    },
  },
}));

describe('ComplianceScorer', () => {
  let scorer: ComplianceScorer;
  let mockOpenaiAdapter: any;
  let mockMonetizationScorer: any;

  beforeEach(() => {
    jest.clearAllMocks();

    // Mock OpenaiAdapter
    mockOpenaiAdapter = {
      getEmbedding: jest.fn().mockResolvedValue(new Array(1536).fill(0.1)),
    };

    // Mock MonetizationScorer
    mockMonetizationScorer = {
      calculateDimensions: jest.fn().mockResolvedValue({
        dimension1: 80,
        dimension2: 70,
        dimension3: 75,
        dimension4: 65,
      }),
      calculateScore: jest.fn().mockReturnValue({
        score: 73,
      }),
    };

    scorer = new ComplianceScorer(mockOpenaiAdapter, mockMonetizationScorer);
  });

  describe('execute', () => {
    const validInput = {
      projectId: 'project-123',
      organizationId: 'org-789',
      niche: NicheCategory.TECHNOLOGY,
    };

    const mockProject = {
      id: 'project-123',
      organizationId: 'org-789',
    };

    const mockScript = {
      id: 'script-456',
      projectId: 'project-123',
      blocks: [
        { id: 'block-1', content: 'This is a technology tutorial video' },
        { id: 'block-2', content: 'Learn about cloud computing basics' },
      ],
    };

    const mockTrendAnalysis = {
      id: 'trend-123',
      projectId: 'project-123',
      keyword: 'cloud computing',
      data: {
        finalScore: 85,
        scores: {
          demand: 80,
          saturation: 70,
          monetization: 85,
          qualityGap: 75,
        },
        topVideos: [
          { title: 'Cloud Computing Guide 2024' },
          { title: 'AWS Tutorial for Beginners' },
        ],
      },
    };

    const mockMediaList = [
      {
        id: 'media-1',
        projectId: 'project-123',
        metadata: { selected: true, commercialUse: true },
      },
      {
        id: 'media-2',
        projectId: 'project-123',
        metadata: { selected: true, commercialUse: true },
      },
    ];

    it('should calculate all scores and return compliance result', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mockMediaList,
      );

      // Mock embeddings to simulate moderate similarity
      mockOpenaiAdapter.getEmbedding
        .mockResolvedValueOnce(new Array(1536).fill(0.1)) // script embedding
        .mockResolvedValueOnce(new Array(1536).fill(0.15)) // video 1
        .mockResolvedValueOnce(new Array(1536).fill(0.12)); // video 2

      const result = await scorer.execute(validInput);

      expect(result).toHaveProperty('originalityScore');
      expect(result).toHaveProperty('copyrightScore');
      expect(result).toHaveProperty('monetizationScore');
      expect(result).toHaveProperty('complianceScore');

      expect(result.copyrightScore).toBe(100); // All media commercial use = true
      expect(result.monetizationScore).toBe(73); // From mocked MonetizationScorer
      expect(result.originalityScore).toBeGreaterThanOrEqual(0);
      expect(result.originalityScore).toBeLessThanOrEqual(100);

      // Compliance score = originality * 0.4 + copyright * 0.4 + monetization * 0.2
      expect(result.complianceScore).toBeGreaterThanOrEqual(0);
      expect(result.complianceScore).toBeLessThanOrEqual(100);
    });

    it('should throw if project not found', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(scorer.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should calculate copyright score of 100 when all media has commercial use', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mockMediaList,
      );

      const result = await scorer.execute(validInput);

      expect(result.copyrightScore).toBe(100);
    });

    it('should calculate reduced copyright score when some media lacks commercial use', async () => {
      const mixedMediaList = [
        {
          id: 'media-1',
          metadata: { selected: true, commercialUse: true },
        },
        {
          id: 'media-2',
          metadata: { selected: true, commercialUse: false },
        },
      ];

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mixedMediaList,
      );

      const result = await scorer.execute(validInput);

      expect(result.copyrightScore).toBe(50); // 1/2 = 50%
    });

    it('should return 100 copyright score when no media is selected', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce([]);

      const result = await scorer.execute(validInput);

      expect(result.copyrightScore).toBe(100); // Conservative - no issues
    });

    it('should handle missing script gracefully', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(null);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mockMediaList,
      );

      const result = await scorer.execute(validInput);

      // Should return neutral score for originality
      expect(result.originalityScore).toBe(50);
      expect(result).toHaveProperty('complianceScore');
    });

    it('should handle missing trend analysis gracefully', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mockMediaList,
      );

      const result = await scorer.execute(validInput);

      // Should return neutral score for originality
      expect(result.originalityScore).toBe(50);
      expect(result).toHaveProperty('complianceScore');
    });

    it('should use monetization scorer', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        mockMediaList,
      );

      const result = await scorer.execute(validInput);

      expect(
        mockMonetizationScorer.calculateDimensions,
      ).toHaveBeenCalledWith({
        niche: NicheCategory.TECHNOLOGY,
      });
      expect(result.monetizationScore).toBe(73);
    });

    it('should handle unselected media in copyright calculation', async () => {
      const unselectedMediaList = [
        {
          id: 'media-1',
          metadata: { selected: false, commercialUse: true },
        },
        {
          id: 'media-2',
          metadata: { selected: false, commercialUse: true },
        },
      ];

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findFirst as jest.Mock).mockResolvedValueOnce(mockScript);
      (prisma.trendAnalysis.findFirst as jest.Mock).mockResolvedValueOnce(
        mockTrendAnalysis,
      );
      (prisma.mediaSuggestion.findMany as jest.Mock).mockResolvedValueOnce(
        unselectedMediaList,
      );

      const result = await scorer.execute(validInput);

      // No selected media, should return 100
      expect(result.copyrightScore).toBe(100);
    });

    it('should verify organization ownership', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(
        scorer.execute({
          ...validInput,
          organizationId: 'different-org',
        }),
      ).rejects.toThrow(BadRequestException);

      expect(prisma.contentProject.findFirst).toHaveBeenCalledWith({
        where: {
          id: 'project-123',
          organizationId: 'different-org',
        },
      });
    });
  });
});
