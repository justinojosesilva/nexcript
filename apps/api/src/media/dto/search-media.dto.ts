export class SearchMediaDto {
  /**
   * ID do script contendo o bloco
   */
  scriptId: string;

  /**
   * ID do bloco de script específico
   */
  blockId: string;

  /**
   * Query de busca de mídia (gerada automaticamente se não fornecida)
   */
  query?: string;

  /**
   * Tipo de mídia: image ou video
   */
  type: 'image' | 'video';
}
