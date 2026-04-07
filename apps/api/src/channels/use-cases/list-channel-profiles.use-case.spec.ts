jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import {
  Platform,
  NicheCategory,
  ContentTone,
  NarrationStyle,
} from '@nexcript/shared';
import { ListChannelProfilesUseCase } from './list-channel-profiles.use-case';

const mockChannelProfiles = [
  {
    id: 'ch-1',
    organizationId: 'org-1',
    userId: 'user-1',
    name: 'Channel 1',
    platform: Platform.YOUTUBE,
    niche: NicheCategory.TECHNOLOGY,
    tone: ContentTone.EDUCATIONAL,
    narrationStyle: NarrationStyle.PROFESSIONAL,
    languageCode: 'pt-BR',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: 'ch-2',
    organizationId: 'org-1',
    userId: 'user-1',
    name: 'Channel 2',
    platform: Platform.TIKTOK,
    niche: NicheCategory.ENTERTAINMENT,
    tone: ContentTone.FUNNY,
    narrationStyle: NarrationStyle.CONVERSATIONAL,
    languageCode: 'pt-BR',
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

const mockChannelProfileRepo = {
  findByOrg: jest.fn(),
};

describe('ListChannelProfilesUseCase', () => {
  let useCase: ListChannelProfilesUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new ListChannelProfilesUseCase(mockChannelProfileRepo as any);
  });

  it('returns all channel profiles for organization', async () => {
    mockChannelProfileRepo.findByOrg.mockResolvedValue(mockChannelProfiles);

    const result = await useCase.execute('org-1');

    expect(result).toEqual(mockChannelProfiles);
    expect(mockChannelProfileRepo.findByOrg).toHaveBeenCalledWith('org-1');
  });

  it('returns empty array when organization has no channels', async () => {
    mockChannelProfileRepo.findByOrg.mockResolvedValue([]);

    const result = await useCase.execute('org-1');

    expect(result).toEqual([]);
  });

  it('throws ForbiddenException if organizationId is missing', async () => {
    await expect(useCase.execute('')).rejects.toThrow(ForbiddenException);
  });

  it('filters results by organization only', async () => {
    mockChannelProfileRepo.findByOrg.mockResolvedValue([
      mockChannelProfiles[0],
    ]);

    await useCase.execute('org-1');

    expect(mockChannelProfileRepo.findByOrg).toHaveBeenCalledWith('org-1');
    mockChannelProfileRepo.findByOrg.mockResolvedValue([]);

    await useCase.execute('org-2');

    expect(mockChannelProfileRepo.findByOrg).toHaveBeenCalledWith('org-2');
  });
});
