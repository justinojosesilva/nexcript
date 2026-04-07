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
import { DeleteChannelProfileUseCase } from './delete-channel-profile.use-case';

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
  delete: jest.fn(),
};

describe('DeleteChannelProfileUseCase', () => {
  let useCase: DeleteChannelProfileUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new DeleteChannelProfileUseCase(mockChannelProfileRepo as any);
  });

  it('deletes channel profile', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(mockChannelProfile);
    mockChannelProfileRepo.delete.mockResolvedValue(undefined);

    await useCase.execute('ch-1', 'org-1');

    expect(mockChannelProfileRepo.delete).toHaveBeenCalledWith('ch-1');
  });

  it('throws NotFoundException if channel profile does not exist', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue(null);

    await expect(useCase.execute('ch-999', 'org-1')).rejects.toThrow(
      NotFoundException,
    );
    expect(mockChannelProfileRepo.delete).not.toHaveBeenCalled();
  });

  it('throws ForbiddenException if channel profile belongs to different organization', async () => {
    mockChannelProfileRepo.findById.mockResolvedValue({
      ...mockChannelProfile,
      organizationId: 'org-2',
    });

    await expect(useCase.execute('ch-1', 'org-1')).rejects.toThrow(
      ForbiddenException,
    );
    expect(mockChannelProfileRepo.delete).not.toHaveBeenCalled();
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(useCase.execute('ch-1', '')).rejects.toThrow(
      ForbiddenException,
    );
    expect(mockChannelProfileRepo.delete).not.toHaveBeenCalled();
  });
});
