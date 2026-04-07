import { IChannelProfileRepository } from '../channel-profile.repository.interface';

export const createChannelProfileRepositoryMock =
  (): jest.Mocked<IChannelProfileRepository> => ({
    findByOrg: jest.fn(),
    findById: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  });
