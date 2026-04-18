jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import { FormatType, NicheCategory, ProjectStatus } from '@nexvideo/shared';
import { ListContentProjectsUseCase } from './list-content-projects.use-case';

const mockProjects = [
  {
    id: 'p-1',
    organizationId: 'org-1',
    channelProfileId: 'ch-1',
    title: 'Project 1',
    keyword: 'javascript',
    niche: NicheCategory.TECHNOLOGY,
    format: FormatType.SHORT_FORM,
    status: ProjectStatus.PLANNING,
    durationMinutes: 5,
    createdAt: new Date(),
    updatedAt: new Date(),
    channelProfile: {
      id: 'ch-1',
      name: 'YouTube Channel',
      platform: 'youtube',
    },
  },
  {
    id: 'p-2',
    organizationId: 'org-1',
    channelProfileId: 'ch-1',
    title: 'Project 2',
    keyword: 'typescript',
    niche: NicheCategory.TECHNOLOGY,
    format: FormatType.LONG_FORM,
    status: ProjectStatus.IN_DEVELOPMENT,
    durationMinutes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
    channelProfile: {
      id: 'ch-1',
      name: 'YouTube Channel',
      platform: 'youtube',
    },
  },
];

const mockContentProjectRepo = {
  findByOrg: jest.fn(),
};

describe('ListContentProjectsUseCase', () => {
  let useCase: ListContentProjectsUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new ListContentProjectsUseCase(mockContentProjectRepo as any);
  });

  it('returns all projects for organization', async () => {
    mockContentProjectRepo.findByOrg.mockResolvedValue(mockProjects);

    const result = await useCase.execute('org-1');

    expect(result).toEqual(mockProjects);
    expect(mockContentProjectRepo.findByOrg).toHaveBeenCalledWith('org-1');
  });

  it('returns empty array when organization has no projects', async () => {
    mockContentProjectRepo.findByOrg.mockResolvedValue([]);

    const result = await useCase.execute('org-1');

    expect(result).toEqual([]);
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(useCase.execute('')).rejects.toThrow(ForbiddenException);
  });

  it('isolates projects by organization - org A cannot see org B projects', async () => {
    const org2Projects = [
      {
        ...mockProjects[0],
        organizationId: 'org-2',
      },
    ];

    mockContentProjectRepo.findByOrg.mockResolvedValueOnce(org2Projects);

    const result = await useCase.execute('org-2');

    expect(result).toEqual(org2Projects);
    expect(result).not.toEqual(
      expect.arrayContaining([
        expect.objectContaining({ organizationId: 'org-1' }),
      ]),
    );
  });

  it('only returns projects belonging to requested organization', async () => {
    mockContentProjectRepo.findByOrg.mockResolvedValueOnce(mockProjects);

    const result = await useCase.execute('org-1');

    expect(result.every((p) => p.organizationId === 'org-1')).toBe(true);
  });

  it('calls repository with correct organizationId', async () => {
    mockContentProjectRepo.findByOrg.mockResolvedValueOnce([]);

    await useCase.execute('org-123');

    expect(mockContentProjectRepo.findByOrg).toHaveBeenCalledWith('org-123');
    expect(mockContentProjectRepo.findByOrg).toHaveBeenCalledTimes(1);
  });
});
