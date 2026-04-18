jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import {
  Platform,
  NicheCategory,
  ContentTone,
  NarrationStyle,
} from '@nexvideo/shared';
import { CreateChannelProfileUseCase } from './create-channel-profile.use-case';

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
  create: jest.fn().mockResolvedValue(mockChannelProfile),
};

describe('CreateChannelProfileUseCase', () => {
  let useCase: CreateChannelProfileUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new CreateChannelProfileUseCase(mockChannelProfileRepo as any);
  });

  it('creates channel profile with provided data and default languageCode', async () => {
    const input = {
      name: 'My Channel',
      platform: Platform.YOUTUBE,
      niche: NicheCategory.TECHNOLOGY,
      tone: ContentTone.EDUCATIONAL,
      narrationStyle: NarrationStyle.PROFESSIONAL,
      organizationId: 'org-1',
      userId: 'user-1',
    };

    const result = await useCase.execute(input);

    expect(result).toEqual(mockChannelProfile);
    expect(mockChannelProfileRepo.create).toHaveBeenCalledWith({
      organizationId: 'org-1',
      userId: 'user-1',
      name: 'My Channel',
      platform: Platform.YOUTUBE,
      niche: NicheCategory.TECHNOLOGY,
      tone: ContentTone.EDUCATIONAL,
      narrationStyle: NarrationStyle.PROFESSIONAL,
      languageCode: 'pt-BR',
    });
  });

  it('uses custom languageCode if provided', async () => {
    const input = {
      name: 'My Channel',
      platform: Platform.YOUTUBE,
      niche: NicheCategory.TECHNOLOGY,
      tone: ContentTone.EDUCATIONAL,
      narrationStyle: NarrationStyle.PROFESSIONAL,
      languageCode: 'en-US',
      organizationId: 'org-1',
      userId: 'user-1',
    };

    await useCase.execute(input);

    expect(mockChannelProfileRepo.create).toHaveBeenCalledWith(
      expect.objectContaining({
        languageCode: 'en-US',
      }),
    );
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    const input = {
      name: 'My Channel',
      platform: Platform.YOUTUBE,
      niche: NicheCategory.TECHNOLOGY,
      tone: ContentTone.EDUCATIONAL,
      narrationStyle: NarrationStyle.PROFESSIONAL,
      organizationId: '',
      userId: 'user-1',
    };

    await expect(useCase.execute(input)).rejects.toThrow(ForbiddenException);
  });

  it('throws ForbiddenException if userId is missing', async () => {
    const input = {
      name: 'My Channel',
      platform: Platform.YOUTUBE,
      niche: NicheCategory.TECHNOLOGY,
      tone: ContentTone.EDUCATIONAL,
      narrationStyle: NarrationStyle.PROFESSIONAL,
      organizationId: 'org-1',
      userId: '',
    };

    await expect(useCase.execute(input)).rejects.toThrow(ForbiddenException);
  });
});
