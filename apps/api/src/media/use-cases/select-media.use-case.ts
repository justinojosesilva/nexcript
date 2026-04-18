import {
  Injectable,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { prisma } from '@nexvideo/database';
import { SelectMediaDto } from '../dto/select-media.dto';

interface SelectMediaInput extends SelectMediaDto {
  mediaSuggestionId: string;
  organizationId: string;
}

@Injectable()
export class SelectMediaUseCase {
  private readonly logger = new Logger(SelectMediaUseCase.name);

  async execute(input: SelectMediaInput): Promise<{ success: boolean }> {
    const { mediaSuggestionId, organizationId, selected } = input;

    // Fetch media suggestion and verify it belongs to the organization
    const mediaSuggestion = await prisma.mediaSuggestion.findFirst({
      where: {
        id: mediaSuggestionId,
        organizationId,
      },
    });

    if (!mediaSuggestion) {
      throw new BadRequestException('Media suggestion not found');
    }

    // Update media suggestion with selected status in metadata
    const metadata = (mediaSuggestion.metadata as any) || {};
    metadata.selected = selected;

    await prisma.mediaSuggestion.update({
      where: { id: mediaSuggestionId },
      data: {
        metadata,
      },
    });

    this.logger.debug(
      `Media suggestion ${mediaSuggestionId} marked as selected: ${selected}`,
    );

    return { success: true };
  }
}
