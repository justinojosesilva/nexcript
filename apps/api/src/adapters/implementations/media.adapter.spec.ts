import { MediaAdapter } from './media.adapter';
import { IPexelsPort, IPixabayPort } from '../interfaces/media.port';
import { MediaAsset } from '@nexvideo/shared';

describe('MediaAdapter', () => {
  let adapter: MediaAdapter;
  let pexelsAdapter: Partial<IPexelsPort>;
  let pixabayAdapter: Partial<IPixabayPort>;

  const createMockAsset = (
    id: string,
    provider: 'pexels' | 'pixabay',
  ): MediaAsset => ({
    id,
    url: `https://${provider}.com/${id}.jpg`,
    thumbnailUrl: `https://${provider}.com/${id}-thumb.jpg`,
    provider,
    license: 'commercial',
    type: 'image',
  });

  beforeEach(() => {
    pexelsAdapter = {
      searchImages: jest.fn(),
      searchVideos: jest.fn(),
    };

    pixabayAdapter = {
      searchImages: jest.fn(),
      searchVideos: jest.fn(),
    };

    adapter = new MediaAdapter(
      pexelsAdapter as IPexelsPort,
      pixabayAdapter as IPixabayPort,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchImages', () => {
    it('should return Pexels results when >= 3 results found', async () => {
      const pexelsResults = [
        createMockAsset('p1', 'pexels'),
        createMockAsset('p2', 'pexels'),
        createMockAsset('p3', 'pexels'),
      ];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );

      const result = await adapter.searchImages('test query', 1);

      expect(result).toEqual(pexelsResults);
      expect(pixabayAdapter.searchImages).not.toHaveBeenCalled();
    });

    it('should fallback to Pixabay when Pexels returns < 3 results', async () => {
      const pexelsResults = [createMockAsset('p1', 'pexels')];
      const pixabayResults = [
        createMockAsset('pb1', 'pixabay'),
        createMockAsset('pb2', 'pixabay'),
      ];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );
      (pixabayAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchImages('test query', 1);

      expect(result).toEqual([...pexelsResults, ...pixabayResults]);
      expect(pixabayAdapter.searchImages).toHaveBeenCalledWith('test query', 1);
    });

    it('should fallback to Pixabay when Pexels returns empty', async () => {
      const pixabayResults = [
        createMockAsset('pb1', 'pixabay'),
        createMockAsset('pb2', 'pixabay'),
      ];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce([]);
      (pixabayAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchImages('test query', 1);

      expect(result).toEqual(pixabayResults);
    });

    it('should fallback to Pixabay on Pexels error', async () => {
      const pixabayResults = [
        createMockAsset('pb1', 'pixabay'),
        createMockAsset('pb2', 'pixabay'),
      ];

      (pexelsAdapter.searchImages as jest.Mock).mockRejectedValueOnce(
        new Error('Pexels API error'),
      );
      (pixabayAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchImages('test query', 1);

      expect(result).toEqual(pixabayResults);
      expect(pixabayAdapter.searchImages).toHaveBeenCalledWith('test query', 1);
    });

    it('should pass query and page parameters correctly', async () => {
      const pexelsResults = Array(3)
        .fill(null)
        .map((_, i) => createMockAsset(`p${i}`, 'pexels'));

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );

      await adapter.searchImages('my search query', 5);

      expect(pexelsAdapter.searchImages).toHaveBeenCalledWith(
        'my search query',
        5,
      );
    });
  });

  describe('searchVideos', () => {
    it('should return Pexels videos when >= 3 results found', async () => {
      const pexelsResults = Array(3)
        .fill(null)
        .map((_, i) => ({
          ...createMockAsset(`p${i}`, 'pexels'),
          type: 'video' as const,
          duration: 120,
        }));

      (pexelsAdapter.searchVideos as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );

      const result = await adapter.searchVideos('test video', 1);

      expect(result).toEqual(pexelsResults);
      expect(pixabayAdapter.searchVideos).not.toHaveBeenCalled();
    });

    it('should fallback to Pixabay when Pexels returns < 3 videos', async () => {
      const pexelsResults = [
        {
          ...createMockAsset('p1', 'pexels'),
          type: 'video' as const,
          duration: 120,
        },
      ];
      const pixabayResults = [
        {
          ...createMockAsset('pb1', 'pixabay'),
          type: 'video' as const,
          duration: 60,
        },
        {
          ...createMockAsset('pb2', 'pixabay'),
          type: 'video' as const,
          duration: 90,
        },
      ];

      (pexelsAdapter.searchVideos as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );
      (pixabayAdapter.searchVideos as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchVideos('test video', 1);

      expect(result).toEqual([...pexelsResults, ...pixabayResults]);
    });

    it('should fallback to Pixabay on Pexels error', async () => {
      const pixabayResults = [
        {
          ...createMockAsset('pb1', 'pixabay'),
          type: 'video' as const,
          duration: 60,
        },
      ];

      (pexelsAdapter.searchVideos as jest.Mock).mockRejectedValueOnce(
        new Error('Pexels error'),
      );
      (pixabayAdapter.searchVideos as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchVideos('test', 1);

      expect(result).toEqual(pixabayResults);
    });
  });

  describe('fallback threshold', () => {
    it('should fallback with exactly 2 results from Pexels', async () => {
      const pexelsResults = [
        createMockAsset('p1', 'pexels'),
        createMockAsset('p2', 'pexels'),
      ];
      const pixabayResults = [createMockAsset('pb1', 'pixabay')];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );
      (pixabayAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      const result = await adapter.searchImages('test', 1);

      expect(result).toHaveLength(3);
      expect(pixabayAdapter.searchImages).toHaveBeenCalled();
    });

    it('should NOT fallback with exactly 3 results from Pexels', async () => {
      const pexelsResults = [
        createMockAsset('p1', 'pexels'),
        createMockAsset('p2', 'pexels'),
        createMockAsset('p3', 'pexels'),
      ];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );

      const result = await adapter.searchImages('test', 1);

      expect(result).toHaveLength(3);
      expect(pixabayAdapter.searchImages).not.toHaveBeenCalled();
    });

    it('should NOT fallback with more than 3 results from Pexels', async () => {
      const pexelsResults = Array(5)
        .fill(null)
        .map((_, i) => createMockAsset(`p${i}`, 'pexels'));

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );

      const result = await adapter.searchImages('test', 1);

      expect(result).toHaveLength(5);
      expect(pixabayAdapter.searchImages).not.toHaveBeenCalled();
    });
  });

  describe('pagination', () => {
    it('should pass page parameter to both adapters', async () => {
      const pexelsResults = [
        createMockAsset('p1', 'pexels'),
        createMockAsset('p2', 'pexels'),
      ];
      const pixabayResults = [createMockAsset('pb1', 'pixabay')];

      (pexelsAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pexelsResults,
      );
      (pixabayAdapter.searchImages as jest.Mock).mockResolvedValueOnce(
        pixabayResults,
      );

      await adapter.searchImages('test', 3);

      expect(pexelsAdapter.searchImages).toHaveBeenCalledWith('test', 3);
      expect(pixabayAdapter.searchImages).toHaveBeenCalledWith('test', 3);
    });
  });
});
