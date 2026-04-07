jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException, NotFoundException } from '@nestjs/common';
import { FormatType, NicheCategory, ProjectStatus } from '@nexcript/shared';
import { UpdateContentProjectUseCase } from './update-content-project.use-case';

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

const mockUpdatedProject = {
  ...mockProject,
  title: 'Updated Project',
  format: FormatType.LONG_FORM,
};

const mockContentProjectRepo = {
  findById: jest.fn(),
  update: jest.fn(),
};

describe('UpdateContentProjectUseCase', () => {
  let useCase: UpdateContentProjectUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new UpdateContentProjectUseCase(mockContentProjectRepo as any);
  });

  it('updates project with provided fields', async () => {
    mockContentProjectRepo.findById.mockResolvedValue(mockProject);
    mockContentProjectRepo.update.mockResolvedValue(mockUpdatedProject);

    const dto = {
      title: 'Updated Project',
      format: FormatType.LONG_FORM,
    };

    const result = await useCase.execute('p-1', 'org-1', dto);

    expect(result).toEqual(mockUpdatedProject);
    expect(mockContentProjectRepo.update).toHaveBeenCalledWith('p-1', {
      title: 'Updated Project',
      format: FormatType.LONG_FORM,
    });
  });

  it('only updates provided fields', async () => {
    mockContentProjectRepo.findById.mockResolvedValue(mockProject);

    const dto = {
      title: 'New Title',
    };

    await useCase.execute('p-1', 'org-1', dto);

    expect(mockContentProjectRepo.update).toHaveBeenCalledWith('p-1', {
      title: 'New Title',
    });
  });

  it('throws NotFoundException if project does not exist', async () => {
    mockContentProjectRepo.findById.mockResolvedValue(null);

    await expect(
      useCase.execute('p-999', 'org-1', { title: 'New Title' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws ForbiddenException if project belongs to different organization', async () => {
    mockContentProjectRepo.findById.mockResolvedValue({
      ...mockProject,
      organizationId: 'org-2',
    });

    await expect(
      useCase.execute('p-1', 'org-1', { title: 'New Title' }),
    ).rejects.toThrow(ForbiddenException);
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(
      useCase.execute('p-1', '', { title: 'New Title' }),
    ).rejects.toThrow(ForbiddenException);
  });
});
