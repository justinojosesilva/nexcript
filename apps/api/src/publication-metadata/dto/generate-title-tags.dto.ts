/**
 * Input DTO for generating title and tags for a project's script
 */
export class GenerateTitleTagsDto {
  /**
   * ID do projeto contendo o script
   */
  projectId: string;

  /**
   * ID do script a ser processado
   */
  scriptId: string;

  /**
   * ID da organização para validação de acesso
   */
  organizationId: string;
}
