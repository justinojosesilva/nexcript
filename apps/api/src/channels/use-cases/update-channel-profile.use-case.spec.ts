jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException, NotFoundException } from '@nestjs/common';
import {
  Platform,
  NicheCategory,
  ContentTone,
  NarrationStyle,
} from '@nexcript/shared';
import { UpdateChannelProfileUseCase } from './update-channel-profile.use-case';

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

const mockUpdatedChannelProfile = {
  ...mockChannelProfile,
  name: 'Updated Channel',
  platform: Platform.TIKTOK,
};

const mockChannelProfileRepo = {
  findById: jest.fn(),
  update: jest.fn(),
};

describe('UpdateChannelProfileUseCase', () => {
  let useCase: UpdateChannelProfileUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new UpdateChannelProfileUseCase(mockChannelProfileRepo as any);
  });

  it('updates channel profile with provided fields', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(mockChannelProfile);
    mockChannelProfileRepo.update.mockResolvedValue(mockUpdatedChannelProfile);

    const dto = {
      name: 'Updated Channel',
      platform: Platform.TIKTOK,
    };

    const result = await useCase.execute('ch-1', 'org-1', dto);

    expect(result).toEqual(mockUpdatedChannelProfile);
    expect(mockChannelProfileRepo.update).toHaveBeenCalledWith('ch-1', {
      name: 'Updated Channel',
      platform: Platform.TIKTOK,
    });
  });

  it('only updates provided fields', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(mockChannelProfile);

    const dto = {
      name: 'New Name',
    };

    await useCase.execute('ch-1', 'org-1', dto);

    expect(mockChannelProfileRepo.update).toHaveBeenCalledWith('ch-1', {
      name: 'New Name',
    });
  });

  it('throws NotFoundException if channel profile does not exist', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(null);

    await expect(
      useCase.execute('ch-999', 'org-1', { name: 'New Name' }),
    ).rejects.toThrow(NotFoundException);
  });

  it('throws ForbiddenException if channel profile belongs to different organization', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue({
      ...mockChannelProfile,
      organizationId: 'org-2',
    });

    await expect(
      useCase.execute('ch-1', 'org-1', { name: 'New Name' }),
    ).rejects.toThrow(ForbiddenException);
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(
      useCase.execute('ch-1', '', { name: 'New Name' }),
    ).rejects.toThrow(ForbiddenException);
  });
});
