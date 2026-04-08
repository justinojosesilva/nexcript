import { AssetType } from "../enums/index.js";

/**
 * Conjunto de tags para categorização e busca
 */
export interface TagSet {
  /** Tags de nicho/categoria */
  niche: string[];

  /** Tags de tipo de conteúdo */
  format: string[];

  /** Tags de estilo/tom */
  style: string[];

  /** Tags customizadas do usuário */
  custom: string[];

  /** Tags de performance (ex: viral, trending) */
  performance?: string[];
}

/**
 * Item individual em uma checklist de produção
 */
export interface ChecklistItem {
  /** ID único do item */
  id: string;

  /** Descrição da tarefa */
  title: string;

  /** Descrição detalhada */
  description?: string;

  /** Se foi completado */
  completed: boolean;

  /** Ordem na checklist */
  order: number;

  /** Tipo de asset associado (opcional) */
  assetType?: AssetType;

  /** Responsável pela tarefa (email ou user ID) */
  assignee?: string;

  /** Data de início */
  startDate?: Date;

  /** Data de conclusão */
  completedAt?: Date;

  /** Notas e comentários */
  notes?: string;

  /** Subtarefas aninhadas */
  subtasks?: ChecklistItem[];

  /** Dependências (IDs de outros items que devem ser completados primeiro) */
  dependencies?: string[];
}
