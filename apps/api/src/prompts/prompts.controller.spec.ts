import { Test, TestingModule } from '@nestjs/testing';
import { PromptsController } from './prompts.controller';
import { PromptsService } from './prompts.service';

describe('PromptsController', () => {
  let controller: PromptsController;
  let service: PromptsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PromptsController],
      providers: [PromptsService],
    }).compile();

    controller = module.get<PromptsController>(PromptsController);
    service = module.get<PromptsService>(PromptsService);
  });

  describe('getVersions', () => {
    it('should return versions for all prompt categories', async () => {
      const result = controller.getVersions();

      expect(result).toBeDefined();
      expect(typeof result).toBe('object');
      // Should have at least one category
      expect(Object.keys(result).length).toBeGreaterThan(0);
    });

    it('should return string versions for each category', async () => {
      const result = controller.getVersions();

      Object.values(result).forEach((version) => {
        expect(typeof version).toBe('string');
        // Versions should follow YYYY-MM-DD format or be "unknown"
        expect(version).toMatch(/^\d{4}-\d{2}-\d{2}$|^unknown$/);
      });
    });

    it('should include scripts category', async () => {
      const result = controller.getVersions();

      expect(result).toHaveProperty('scripts');
    });

    it('should include narration category', async () => {
      const result = controller.getVersions();

      expect(result).toHaveProperty('narration');
    });

    it('should return same result as service', async () => {
      const controllerResult = controller.getVersions();
      const serviceResult = service.getVersions();

      expect(controllerResult).toEqual(serviceResult);
    });
  });
});
