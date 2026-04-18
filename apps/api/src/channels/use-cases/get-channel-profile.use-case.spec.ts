jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  Platform,
  NicheCategory,
  ContentTone,
  NarrationStyle,
} from '@nexvideo/shared';
import { GetChannelProfileUseCase } from './get-channel-profile.use-case';

const mockChannelProfile = {
  id: 'ch-1',
  organizationId: 'org-1',
  userId: 'user-1',
  name: 'My Channel',
  platform: Platform.YOUTUBE,
  niche: NicheCategory.TECHNOLOGY,
  tone: ContentTone.EDUCATIONAL,
  narrationStyle: NarrationStyle.PROFESSIONAL,
  languageCode: 'pt-BR',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockChannelProfileRepo = {
  findById: jest.fn(),
};

describe('GetChannelProfileUseCase', () => {
  let useCase: GetChannelProfileUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetChannelProfileUseCase(mockChannelProfileRepo as any);
  });

  it('returns channel profile if it belongs to user organization', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(mockChannelProfile);

    const result = await useCase.execute('ch-1', 'org-1');

    expect(result).toEqual(mockChannelProfile);
    expect(mockChannelProfileRepo.findById).toHaveBeenCalledWith('ch-1');
  });

  it('throws NotFoundException if channel profile does not exist', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(null);

    await expect(useCase.execute('ch-999', 'org-1')).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throws ForbiddenException if channel profile belongs to different organization', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue({
      ...mockChannelProfile,
      organizationId: 'org-2',
    });

    await expect(useCase.execute('ch-1', 'org-1')).rejects.toThrow(
      ForbiddenException,
    );
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(useCase.execute('ch-1', '')).rejects.toThrow(
      ForbiddenException,
    );
  });
});
