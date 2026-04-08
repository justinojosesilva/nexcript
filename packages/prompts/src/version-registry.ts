/**
 * Prompt Version Registry
 * Tracks versioning for all prompt functions
 */

// Type-only import for Node process type
declare const process: { env: Record<string, string | undefined> };

export interface PromptVersion {
  category: string;
  name: string;
  version: string;
}

export const PROMPT_VERSIONS: Record<string, PromptVersion> = {
  // Scripts
  aiScript: {
    category: 'scripts',
    name: 'aiScriptPrompt',
    version: '2025-04-08',
  },
  financeScript: {
    category: 'scripts',
    name: 'financeScriptPrompt',
    version: '2025-04-08',
  },
  productivityScript: {
    category: 'scripts',
    name: 'productivityScriptPrompt',
    version: '2025-04-08',
  },
  gapBasedScript: {
    category: 'scripts',
    name: 'scriptGapBasedPrompt',
    version: '2025-04-08',
  },
  genericScript: {
    category: 'scripts',
    name: 'genericScriptPrompt',
    version: '2025-04-08',
  },
  scriptPromptTemplate: {
    category: 'scripts',
    name: 'scriptPromptTemplate',
    version: '2025-04-08',
  },

  // Narration
  narrationPromptTemplate: {
    category: 'narration',
    name: 'narrationPromptTemplate',
    version: '2025-04-08',
  },
  narrationPrompt: {
    category: 'narration',
    name: 'narrationPrompt',
    version: '2025-04-08',
  },

  // Titles
  youtubeTitlePrompt: {
    category: 'titles',
    name: 'youtubeTitlePrompt',
    version: '2025-04-08',
  },
  shortsTitlePrompt: {
    category: 'titles',
    name: 'shortsTitlePrompt',
    version: '2025-04-08',
  },

  // Thumbnails
  thumbnailCopyPrompt: {
    category: 'thumbnails',
    name: 'thumbnailCopyPrompt',
    version: '2025-04-08',
  },

  // SEO
  youtubeDescriptionPrompt: {
    category: 'seo',
    name: 'youtubeDescriptionPrompt',
    version: '2025-04-08',
  },

  // Scoring
  monetizationRiskPrompt: {
    category: 'scoring',
    name: 'monetizationRiskPrompt',
    version: '2025-04-08',
  },
  gapAnalysisPrompt: {
    category: 'scoring',
    name: 'gapAnalysisPrompt',
    version: '2025-04-08',
  },
};

/**
 * Get current version for a specific prompt
 * Respects PROMPT_VERSION_OVERRIDE env var for rollback
 * Format: PROMPT_VERSION_OVERRIDE=scripts:2025-01-01,narration:2025-01-15
 */
export function getPromptVersion(promptKey: string): string {
  const override = process.env.PROMPT_VERSION_OVERRIDE;

  if (override) {
    const entry = PROMPT_VERSIONS[promptKey];
    if (entry) {
      const overrides = Object.fromEntries(
        override.split(',').map((pair: string) => pair.trim().split(':')),
      );
      if (overrides[entry.category]) {
        return overrides[entry.category];
      }
    }
  }

  const entry = PROMPT_VERSIONS[promptKey];
  return entry?.version || 'unknown';
}

/**
 * Get all versions grouped by category
 */
export function getAllPromptVersions(): Record<string, string> {
  const versions: Record<string, string> = {};

  const override = process.env.PROMPT_VERSION_OVERRIDE;
  const overrides = override
    ? Object.fromEntries(override.split(',').map((pair: string) => pair.trim().split(':')))
    : {};

  const categories = new Set<string>();
  Object.values(PROMPT_VERSIONS).forEach((v) => categories.add(v.category));

  categories.forEach((category) => {
    versions[category] = overrides[category] ||
      Object.values(PROMPT_VERSIONS).find(v => v.category === category)?.version || 'unknown';
  });

  return versions;
}
