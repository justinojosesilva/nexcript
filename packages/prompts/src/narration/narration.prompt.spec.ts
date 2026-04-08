import { narrationPromptTemplate, NarrationBlock } from "./narration.prompt";

describe("narrationPromptTemplate", () => {
  const mockScriptBlocks: NarrationBlock[] = [
    {
      id: "hook-1",
      type: "HOOK",
      content: "Welcome to our YouTube channel!",
      estimatedDuration: 3,
    },
    {
      id: "intro-1",
      type: "INTRO",
      content: "Today we are going to discuss something important.",
      estimatedDuration: 5,
    },
    {
      id: "dev-1",
      type: "DEVELOPMENT",
      content: "The key points are: first, second, and third.",
      estimatedDuration: 15,
    },
    {
      id: "conclusion-1",
      type: "CONCLUSION",
      content: "Thank you for watching!",
      estimatedDuration: 3,
    },
  ];

  describe("prompt generation", () => {
    it("should generate a valid narration prompt", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toBeTruthy();
      expect(typeof prompt).toBe("string");
      expect(prompt.length).toBeGreaterThan(100);
    });

    it("should include tone guidelines in prompt", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "DRAMATIC",
        speed: "NORMAL",
        voiceStyle: "casual",
      });

      expect(prompt).toContain("short, impactful sentences");
      expect(prompt).toContain("DRAMATIC");
    });

    it("should include speed information in prompt", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "ENERGETIC",
        speed: "FAST",
        voiceStyle: "enthusiastic",
      });

      expect(prompt).toContain("FAST");
      expect(prompt).toContain("1.2x");
    });

    it("should include voice style guidance", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "SLOW",
        voiceStyle: "soft",
      });

      expect(prompt).toContain("soft");
      expect(prompt).toContain("0.8x");
    });
  });

  describe("script block processing", () => {
    it("should include all script blocks in prompt", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("[HOOK]");
      expect(prompt).toContain("[INTRO]");
      expect(prompt).toContain("[DEVELOPMENT]");
      expect(prompt).toContain("[CONCLUSION]");
      expect(prompt).toContain("Welcome to our YouTube channel!");
    });

    it("should adjust durations based on speed multiplier", () => {
      const slowPrompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "SLOW",
        voiceStyle: "professional",
      });

      const fastPrompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "FAST",
        voiceStyle: "professional",
      });

      // Slow should have longer durations (~3 * 0.8 = 2.4 ≈ 2)
      // Fast should have shorter durations (~3 * 1.2 = 3.6 ≈ 4)
      expect(slowPrompt).toContain("Duration:");
      expect(fastPrompt).toContain("Duration:");
    });
  });

  describe("tone-specific output", () => {
    it("should include calm tone guidelines", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("long, flowing sentences");
      expect(prompt).toContain("minimal pauses");
    });

    it("should include dramatic tone guidelines", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "DRAMATIC",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("short, impactful sentences");
      expect(prompt).toContain("strategic pauses");
    });

    it("should include energetic tone guidelines", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "ENERGETIC",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("medium sentences");
      expect(prompt).toContain("moderate pauses");
    });

    it("should include suspenseful tone guidelines", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "SUSPENSEFUL",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("mixed:");
      expect(prompt).toContain("tension");
    });
  });

  describe("pause marker instructions", () => {
    it("should include pause marker guidance", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "DRAMATIC",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("[pausa]");
      expect(prompt).toContain("[pausa longa]");
      expect(prompt).toContain("[pausa curta]");
    });

    it("should explain pause marker removal", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("will be removed by the adapter");
    });
  });

  describe("output format requirements", () => {
    it("should include output format instructions", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("OUTPUT FORMAT");
      expect(prompt).toContain("Return ONLY");
      expect(prompt).toContain("No explanations or meta-commentary");
    });

    it("should instruct removal of formatting", () => {
      const prompt = narrationPromptTemplate({
        scriptBlocks: mockScriptBlocks,
        tone: "CALM",
        speed: "NORMAL",
        voiceStyle: "professional",
      });

      expect(prompt).toContain("Remove all markdown formatting");
      expect(prompt).toContain("Remove brackets, parentheses, emojis");
      expect(prompt).toContain("Remove visual references");
    });
  });
});
