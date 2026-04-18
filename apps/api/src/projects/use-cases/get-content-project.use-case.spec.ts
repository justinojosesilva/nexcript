jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { FormatType, NicheCategory, ProjectStatus } from '@nexvideo/shared';
import { GetContentProjectUseCase } from './get-content-project.use-case';

const mockProject = {
  id: 'p-1',
  organizationId: 'org-1',
  channelProfileId: 'ch-1',
  title: 'My Project',
  keyword: 'javascript',
  niche: NicheCategory.TECHNOLOGY,
  format: FormatType.SHORT_FORM,
  status: ProjectStatus.PLANNING,
  durationMinutes: 5,
  createdAt: new Date(),
  updatedAt: new Date(),
  channelProfile: { id: 'ch-1', name: 'YouTube Channel', platform: 'youtube' },
};

const mockContentProjectRepo = {
  findById: jest.fn(),
};

describe('GetContentProjectUseCase', () => {
  let useCase: GetContentProjectUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetContentProjectUseCase(mockContentProjectRepo as any);
  });

  it('returns project if it belongs to user organization', async () => {
    mockContentProjectRepo.findById.mockResolvedValue(mockProject);

    const result = await useCase.execute('p-1', 'org-1');

    expect(result).toEqual(mockProject);
    expect(mockContentProjectRepo.findById).toHaveBeenCalledWith('p-1');
  });

  it('throws NotFoundException if project does not exist', async () => {
    mockContentProjectRepo.findById.mockResolvedValue(null);

    await expect(useCase.execute('p-999', 'org-1')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throws ForbiddenException if project belongs to different organization', async () => {
    mockContentProjectRepo.findById.mockResolvedValue({
      ...mockProject,
      organizationId: 'org-2',
    });

    await expect(useCase.execute('p-1', 'org-1')).rejects.toThrow(
      ForbiddenException,
    );
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(useCase.execute('p-1', '')).rejects.toThrow(
      ForbiddenException,
    );
  });
});
