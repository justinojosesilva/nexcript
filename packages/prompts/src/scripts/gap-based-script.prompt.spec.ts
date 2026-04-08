import { scriptGapBasedPrompt, ScriptGapBasedInput } from './gap-based-script.prompt.js';
import { FormatType, NicheCategory, ContentTone } from './types.js';

describe('scriptGapBasedPrompt', () => {
  const defaultInput: ScriptGapBasedInput = {
    topic: 'How to Build a Productive Routine',
    gaps: ['Missing time management tactics', 'No examples of daily schedules'],
    niche: NicheCategory.PRODUCTIVITY,
    tone: ContentTone.CASUAL,
    formatType: FormatType.LONG_FORM,
    durationMinutes: 12,
  };

  describe('prompt generation', () => {
    it('should generate a valid prompt string', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe('string');
      expect(prompt.length).toBeGreaterThan(500);
    });

    it('should include topic in prompt', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('How to Build a Productive Routine');
    });

    it('should include niche context', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain(NicheCategory.PRODUCTIVITY);
    });

    it('should include tone guidance', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain(ContentTone.CASUAL);
    });

    it('should include format type', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain(FormatType.LONG_FORM);
    });

    it('should include duration information', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('12');
      expect(prompt).toContain('720'); // 12 * 60
    });
  });

  describe('gap integration', () => {
    it('should include all gaps in prompt', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('Missing time management tactics');
      expect(prompt).toContain('No examples of daily schedules');
    });

    it('should format gaps as bullet list', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('- Missing time management tactics');
      expect(prompt).toContain('- No examples of daily schedules');
    });

    it('should handle empty gaps array', () => {
      const input: ScriptGapBasedInput = {
        ...defaultInput,
        gaps: [],
      };

      const { prompt } = scriptGapBasedPrompt(input);

      expect(prompt).toBeTruthy();
      expect(prompt).not.toContain('Quality Gaps');
    });

    it('should emphasize gap-addressing responsibility', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('DIRECTLY ADDRESSES');
      expect(prompt).toContain('Every gap should be resolved');
      expect(prompt).toContain('GAP-ADDRESSING CHECKLIST');
    });
  });

  describe('max tokens by format', () => {
    it('should return 2000 tokens for LONG_FORM', () => {
      const { maxTokens } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.LONG_FORM,
      });

      expect(maxTokens).toBe(2000);
    });

    it('should return 1500 tokens for MEDIUM_FORM', () => {
      const { maxTokens } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.MEDIUM_FORM,
      });

      expect(maxTokens).toBe(1500);
    });

    it('should return 600 tokens for SHORT_FORM', () => {
      const { maxTokens } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.SHORT_FORM,
      });

      expect(maxTokens).toBe(600);
    });

    it('should return 1200 tokens for CAROUSEL', () => {
      const { maxTokens } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.CAROUSEL,
      });

      expect(maxTokens).toBe(1200);
    });

    it('should return 2500 tokens for PODCAST', () => {
      const { maxTokens } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.PODCAST,
      });

      expect(maxTokens).toBe(2500);
    });
  });

  describe('block count constraints', () => {
    it('should specify 5-7 blocks for LONG_FORM', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.LONG_FORM,
      });

      expect(prompt).toContain('5-7');
    });

    it('should specify 2-3 blocks for SHORT_FORM', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.SHORT_FORM,
      });

      expect(prompt).toContain('2-3');
    });

    it('should specify 4-5 blocks for MEDIUM_FORM', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.MEDIUM_FORM,
      });

      expect(prompt).toContain('4-5');
    });

    it('should apply SHORT_FORM specific constraints', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.SHORT_FORM,
      });

      expect(prompt).toContain('CONCISENESS');
      expect(prompt).toContain('every word counts');
      expect(prompt).toContain('1-2 sentences maximum');
    });

    it('should apply LONG_FORM specific constraints', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        formatType: FormatType.LONG_FORM,
      });

      expect(prompt).toContain('detailed explanation');
      expect(prompt).toContain('transitions');
    });
  });

  describe('JSON output format', () => {
    it('should document JSON structure with blocks array', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('"blocks"');
      expect(prompt).toContain('HOOK');
      expect(prompt).toContain('INTRO');
      expect(prompt).toContain('DEVELOPMENT');
      expect(prompt).toContain('RETENTION_CTA');
      expect(prompt).toContain('CONCLUSION');
    });

    it('should require title field in output', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('"title"');
      expect(prompt).toContain('compelling video title');
    });

    it('should require estimatedDuration field', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('estimatedDuration');
      expect(prompt).toContain('total seconds');
    });
  });

  describe('tone-specific guidance', () => {
    it('should include guidance for CASUAL tone', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        tone: ContentTone.CASUAL,
      });

      expect(prompt).toContain('Conversational');
      expect(prompt).toContain('contractions');
      expect(prompt).toContain('friendly');
    });

    it('should include guidance for PROFESSIONAL tone', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        tone: ContentTone.PROFESSIONAL,
      });

      expect(prompt).toContain('Formal');
      expect(prompt).toContain('authoritative');
    });

    it('should include guidance for ENERGETIC tone', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        tone: ContentTone.ENERGETIC,
      });

      expect(prompt).toContain('Enthusiastic');
      expect(prompt).toContain('varied pacing');
    });
  });

  describe('block type guidelines', () => {
    it('should include HOOK guidelines', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('HOOK (required');
      expect(prompt).toContain('First 3-5 seconds');
      expect(prompt).toContain('grab attention');
    });

    it('should include DEVELOPMENT guidelines', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('DEVELOPMENT');
      expect(prompt).toContain('Deep dive');
      expect(prompt).toContain('examples, data');
    });

    it('should include CONCLUSION guidelines', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('CONCLUSION');
      expect(prompt).toContain('Summarize');
      expect(prompt).toContain('Thank viewers');
    });
  });

  describe('output validation', () => {
    it('should emphasize JSON-only output', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('Return ONLY valid JSON');
      expect(prompt).toContain('no markdown');
      expect(prompt).toContain('no preamble');
    });

    it('should require all fields', () => {
      const { prompt } = scriptGapBasedPrompt(defaultInput);

      expect(prompt).toContain('All fields required');
      expect(prompt).toContain('no null values');
    });
  });

  describe('different niche contexts', () => {
    it('should work with FINANCE niche', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        niche: NicheCategory.FINANCE,
      });

      expect(prompt).toContain(NicheCategory.FINANCE);
    });

    it('should work with TECHNOLOGY niche', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        niche: NicheCategory.TECHNOLOGY,
      });

      expect(prompt).toContain(NicheCategory.TECHNOLOGY);
    });

    it('should work with EDUCATION niche', () => {
      const { prompt } = scriptGapBasedPrompt({
        ...defaultInput,
        niche: NicheCategory.EDUCATION,
      });

      expect(prompt).toContain(NicheCategory.EDUCATION);
    });
  });
});
