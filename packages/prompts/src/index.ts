// Scripts - Types
export type { ScriptPromptInput, ScriptBlockOutput, ScriptOutput } from './scripts/script-prompt.template.js';
export { scriptPromptTemplate } from './scripts/script-prompt.template.js';
export { genericScriptPrompt, type GenericScriptInput } from './scripts/generic-script.prompt.js';

// Other scripts
export * from './scripts/finance-script.prompt.js';
export * from './scripts/ai-script.prompt.js';
export * from './scripts/productivity-script.prompt.js';

// Titles
export * from './titles/youtube-title.prompt.js';
export * from './titles/shorts-title.prompt.js';

// Thumbnails
export * from './thumbnails/thumbnail-copy.prompt.js';

// SEO
export * from './seo/youtube-description.prompt.js';

// Scoring
export * from './scoring/monetization-risk.prompt.js';
export * from './scoring/gap-analysis.prompt.js';

// Narration
export * from './narration/narration.prompt.js';
