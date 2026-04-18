import {
  ContentTone,
  NarrationStyle,
  NicheCategory,
  Platform,
} from '@nexvideo/shared';

export class ChannelProfileResponse {
  id: string;

  organizationId: string;

  userId: string;

  name: string;

  platform: Platform;

  niche: NicheCategory;

  tone: ContentTone;

  narrationStyle: NarrationStyle;

  languageCode: string;

  createdAt: Date;

  updatedAt: Date;
}
