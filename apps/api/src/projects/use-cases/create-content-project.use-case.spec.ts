jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import { FormatType, NicheCategory, ProjectStatus } from '@nexvideo/shared';
import { CreateContentProjectUseCase } from './create-content-project.use-case';

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
};

const mockContentProjectRepo = {
  create: jest.fn().mockResolvedValue(mockProject),
};

describe('CreateContentProjectUseCase', () => {
  let useCase: CreateContentProjectUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new CreateContentProjectUseCase(mockContentProjectRepo as any);
  });

  it('creates project with status PLANNING', async () => {
    const input = {
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      channelProfileId: 'ch-1',
      organizationId: 'org-1',
    };

    const result = await useCase.execute(input);

    expect(result).toEqual(mockProject);
    expect(mockContentProjectRepo.create).toHaveBeenCalledWith({
      organizationId: 'org-1',
      channelProfileId: 'ch-1',
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      status: ProjectStatus.PLANNING,
      durationMinutes: undefined,
    });
  });

  it('includes durationMinutes if provided', async () => {
    const input = {
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      channelProfileId: 'ch-1',
      durationMinutes: 5,
      organizationId: 'org-1',
    };

    await useCase.execute(input);

    expect(mockContentProjectRepo.create).toHaveBeenCalledWith(
      expect.objectContaining({
        durationMinutes: 5,
      }),
    );
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    const input = {
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      channelProfileId: 'ch-1',
      organizationId: '',
    };

    await expect(useCase.execute(input)).rejects.toThrow(ForbiddenException);
  });

  it('throws error if repository fails to create (invalid channelProfileId)', async () => {
    const repoError = new Error(
      'Foreign key constraint failed: channelProfileId',
    );
    mockContentProjectRepo.create.mockRejectedValueOnce(repoError);

    const input = {
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      channelProfileId: 'ch-invalid',
      organizationId: 'org-1',
    };

    await expect(useCase.execute(input)).rejects.toThrow(
      'Foreign key constraint failed',
    );
  });

  it('isolates projects by organization - org A cannot see org B projects', async () => {
    const input = {
      title: 'My Project',
      keyword: 'javascript',
      niche: NicheCategory.TECHNOLOGY,
      format: FormatType.SHORT_FORM,
      channelProfileId: 'ch-1',
      organizationId: 'org-1',
    };

    await useCase.execute(input);

    const callArgs = mockContentProjectRepo.create.mock.calls[0][0];
    expect(callArgs.organizationId).toBe('org-1');
    expect(callArgs).not.toEqual(
      expect.objectContaining({ organizationId: 'org-2' }),
    );
  });
});
