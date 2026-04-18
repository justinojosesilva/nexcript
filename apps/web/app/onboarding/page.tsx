"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Sparkles,
  TrendingUp,
  FileText,
  Mic,
  Play,
} from "lucide-react";
import { createChannel } from "@/lib/channels-client";
import { createProject } from "@/lib/projects-client";
import { completeOnboarding } from "@/lib/onboarding-client";

// ─── Constants ───────────────────────────────────────────────────────────────

const NICHES = [
  { value: "finance", label: "Finanças" },
  { value: "technology", label: "Tecnologia" },
  { value: "productivity", label: "Produtividade" },
  { value: "lifestyle", label: "Estilo de Vida" },
  { value: "education", label: "Educação" },
  { value: "entertainment", label: "Entretenimento" },
  { value: "business", label: "Negócios" },
  { value: "health", label: "Saúde" },
  { value: "personal_development", label: "Desenvolvimento Pessoal" },
  { value: "other", label: "Outro" },
];

const PLATFORMS = [
  { value: "youtube", label: "YouTube" },
  { value: "youtube_shorts", label: "YouTube Shorts" },
  { value: "tiktok", label: "TikTok" },
  { value: "instagram_reels", label: "Instagram Reels" },
  { value: "instagram", label: "Instagram" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "podcast", label: "Podcast" },
];

const TONES = [
  { value: "educational", label: "Educativo", description: "Ensina e informa com clareza" },
  { value: "inspirational", label: "Inspiracional", description: "Motiva e engaja emocionalmente" },
  { value: "casual", label: "Casual", description: "Descontraído e próximo" },
  { value: "formal", label: "Formal", description: "Profissional e estruturado" },
  { value: "funny", label: "Humorístico", description: "Leve, engraçado e viralizável" },
  { value: "serious", label: "Sério", description: "Direto ao ponto, sem rodeios" },
];

const FORMATS = [
  { value: "long_form", label: "Long Form", description: "10+ minutos, conteúdo aprofundado" },
  { value: "short_form", label: "Short Form", description: "Menos de 1 min, Shorts / TikTok" },
  { value: "medium_form", label: "Medium Form", description: "5 a 10 minutos, equilibrado" },
  { value: "podcast", label: "Podcast", description: "Áudio / vídeo de podcast" },
];

const NARRATION_STYLES = [
  { value: "professional", label: "Profissional" },
  { value: "conversational", label: "Conversacional" },
  { value: "energetic", label: "Energético" },
  { value: "calm", label: "Calmo" },
  { value: "dramatic", label: "Dramático" },
  { value: "friendly", label: "Amigável" },
];

const STEPS = [
  { id: 1, label: "Boas-vindas" },
  { id: 2, label: "Seu canal" },
  { id: 3, label: "Primeiro projeto" },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface OnboardingState {
  // Step 2 — Channel
  channelName: string;
  platform: string;
  niche: string;
  tone: string;
  narrationStyle: string;
  // Step 3 — Project
  projectTitle: string;
  projectKeyword: string;
  projectFormat: string;
}

const INITIAL_STATE: OnboardingState = {
  channelName: "",
  platform: "",
  niche: "",
  tone: "",
  narrationStyle: "",
  projectTitle: "",
  projectKeyword: "",
  projectFormat: "",
};

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepIndicator({
  currentStep,
  completedSteps,
}: {
  currentStep: number;
  completedSteps: Set<number>;
}) {
  return (
    <div className="flex items-center justify-center gap-0">
      {STEPS.map((step, idx) => {
        const isActive = currentStep === step.id;
        const isCompleted = completedSteps.has(step.id);

        return (
          <div key={step.id} className="flex items-center">
            <div
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
                isActive
                  ? "bg-purple-600 text-white"
                  : isCompleted
                    ? "bg-purple-600/20 text-purple-400"
                    : "text-neutral-600"
              }`}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  isCompleted
                    ? "bg-purple-500 text-white"
                    : isActive
                      ? "bg-white/20 text-white"
                      : "bg-neutral-700 text-neutral-500"
                }`}
              >
                {isCompleted ? (
                  <Check className="h-3 w-3" />
                ) : (
                  <span>{step.id}</span>
                )}
              </div>
              <span className="hidden text-sm font-medium sm:block">
                {step.label}
              </span>
            </div>

            {idx < STEPS.length - 1 && (
              <div
                className={`h-px w-8 transition-colors duration-300 ${
                  completedSteps.has(step.id)
                    ? "bg-purple-500/50"
                    : "bg-neutral-700"
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Boas-vindas ─────────────────────────────────────────────────────

function Step1Welcome() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="font-headline text-3xl font-bold text-white mb-3">
          Bem-vindo ao nexvideo
        </h2>
        <p className="text-neutral-400 text-base max-w-md mx-auto">
          Veja como funciona antes de começar. Em menos de 2 minutos você terá
          seu primeiro projeto pronto.
        </p>
      </div>

      {/* Animated product demo */}
      <div className="relative rounded-2xl border border-neutral-700/60 bg-neutral-900/80 overflow-hidden mx-auto max-w-lg">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 60%)",
          }}
        />

        {/* Header bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/60" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
            <div className="h-3 w-3 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 h-5 rounded-full bg-neutral-800/80 flex items-center px-3">
            <span className="text-xs text-neutral-500 font-mono">nexvideo.app</span>
          </div>
        </div>

        {/* Product flow */}
        <div className="p-6 space-y-4">
          {[
            {
              icon: TrendingUp,
              color: "#7C3AED",
              title: "Analise tendências",
              desc: "Descubra o que seu público quer assistir agora",
              delay: 0,
            },
            {
              icon: FileText,
              color: "#4EDEA3",
              title: "Gere roteiros com IA",
              desc: "Scripts completos e otimizados para monetização",
              delay: 0.15,
            },
            {
              icon: Mic,
              color: "#7C3AED",
              title: "Exporte e publique",
              desc: "Narração, título, descrição e tags em um clique",
              delay: 0.3,
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: item.delay + 0.3, duration: 0.5, ease: "easeOut" }}
              className="flex items-center gap-4 rounded-xl border border-neutral-700/40 bg-neutral-800/50 p-4"
            >
              <div
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg"
                style={{ backgroundColor: `${item.color}20`, border: `1px solid ${item.color}30` }}
              >
                <item.icon className="h-5 w-5" style={{ color: item.color }} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{item.title}</p>
                <p className="text-xs text-neutral-400 mt-0.5">{item.desc}</p>
              </div>
              <div className="ml-auto">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: item.delay + 0.6, type: "spring", stiffness: 300 }}
                  className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/20"
                >
                  <Check className="h-3 w-3 text-emerald-400" />
                </motion.div>
              </div>
            </motion.div>
          ))}

          {/* Animated score badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="flex items-center justify-between rounded-xl border border-purple-500/20 bg-purple-500/5 p-4"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-purple-500/20">
                <Sparkles className="h-5 w-5 text-purple-400" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Score de monetização</p>
                <p className="text-xs text-neutral-400">Análise de risco em tempo real</p>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="text-right"
            >
              <span className="text-2xl font-bold text-emerald-400">87</span>
              <span className="text-xs text-neutral-400">/100</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Play button overlay hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 right-4"
        >
          <div className="flex items-center gap-1.5 rounded-full bg-purple-600/20 border border-purple-500/30 px-3 py-1.5">
            <Play className="h-3 w-3 text-purple-400 fill-purple-400" />
            <span className="text-xs text-purple-300">demo ao vivo</span>
          </div>
        </motion.div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 max-w-lg mx-auto">
        {[
          { value: "30s", label: "Para analisar" },
          { value: "3x", label: "Mais rápido" },
          { value: "87%", label: "Score médio" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center rounded-xl border border-neutral-700/40 bg-neutral-800/30 py-3"
          >
            <p className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              {stat.value}
            </p>
            <p className="text-xs text-neutral-500 mt-0.5">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Step 2: Criar Canal ──────────────────────────────────────────────────────

function Step2Channel({
  state,
  onChange,
}: {
  state: OnboardingState;
  onChange: (updates: Partial<OnboardingState>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-2xl font-bold text-white">
          Configure seu canal
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Essas informações ajudam a IA a criar conteúdo alinhado com sua
          identidade.
        </p>
      </div>

      {/* Channel name */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Nome do canal <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={state.channelName}
          onChange={(e) => onChange({ channelName: e.target.value })}
          placeholder="Ex: Canal do João"
          className="input-field"
          autoFocus
        />
      </div>

      {/* Platform */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Plataforma principal <span className="text-red-400">*</span>
        </label>
        <select
          value={state.platform}
          onChange={(e) => onChange({ platform: e.target.value })}
          className="input-field"
        >
          <option value="">Selecione a plataforma</option>
          {PLATFORMS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </div>

      {/* Niche */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Nicho <span className="text-red-400">*</span>
        </label>
        <select
          value={state.niche}
          onChange={(e) => onChange({ niche: e.target.value })}
          className="input-field"
        >
          <option value="">Selecione o nicho</option>
          {NICHES.map((n) => (
            <option key={n.value} value={n.value}>
              {n.label}
            </option>
          ))}
        </select>
      </div>

      {/* Tone */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Tom do canal <span className="text-red-400">*</span>
        </label>
        <div className="grid gap-2 sm:grid-cols-2">
          {TONES.map((tone) => (
            <button
              key={tone.value}
              type="button"
              onClick={() => onChange({ tone: tone.value })}
              className={`rounded-lg border p-3 text-left transition-all duration-200 ${
                state.tone === tone.value
                  ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30"
                  : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
              }`}
            >
              <p className="text-sm font-medium text-white">{tone.label}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{tone.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Narration style */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Estilo de narração{" "}
          <span className="text-neutral-500">— opcional</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {NARRATION_STYLES.map((style) => (
            <button
              key={style.value}
              type="button"
              onClick={() =>
                onChange({
                  narrationStyle:
                    state.narrationStyle === style.value ? "" : style.value,
                })
              }
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                state.narrationStyle === style.value
                  ? "border-purple-500 bg-purple-500/20 text-purple-300"
                  : "border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-500"
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Step 3: Criar Projeto ────────────────────────────────────────────────────

function Step3Project({
  state,
  onChange,
}: {
  state: OnboardingState;
  onChange: (updates: Partial<OnboardingState>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-headline text-2xl font-bold text-white">
          Crie seu primeiro projeto
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Defina o tema do seu conteúdo. Vamos analisar as tendências
          automaticamente.
        </p>
      </div>

      {/* Project title */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Título do projeto <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={state.projectTitle}
          onChange={(e) => onChange({ projectTitle: e.target.value })}
          placeholder="Ex: Como sair das dívidas em 2025"
          className="input-field"
          autoFocus
        />
      </div>

      {/* Keyword */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Palavra-chave principal <span className="text-red-400">*</span>
        </label>
        <input
          type="text"
          value={state.projectKeyword}
          onChange={(e) => onChange({ projectKeyword: e.target.value })}
          placeholder="Ex: sair das dívidas"
          className="input-field"
        />
        <p className="text-xs text-neutral-500">
          Usada para analisar tendências e otimizar SEO do conteúdo.
        </p>
      </div>

      {/* Format */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Formato <span className="text-red-400">*</span>
        </label>
        <div className="grid gap-2 sm:grid-cols-2">
          {FORMATS.map((fmt) => (
            <button
              key={fmt.value}
              type="button"
              onClick={() => onChange({ projectFormat: fmt.value })}
              className={`rounded-lg border p-3 text-left transition-all duration-200 ${
                state.projectFormat === fmt.value
                  ? "border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30"
                  : "border-neutral-700 bg-neutral-800 hover:border-neutral-600"
              }`}
            >
              <p className="text-sm font-medium text-white">{fmt.label}</p>
              <p className="text-xs text-neutral-400 mt-0.5">{fmt.description}</p>
            </button>
          ))}
        </div>
      </div>

      {/* Summary preview */}
      {(state.channelName || state.niche) && (
        <div className="rounded-xl border border-neutral-700/40 bg-neutral-800/30 p-4 space-y-1">
          <p className="text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-2">
            Canal selecionado
          </p>
          {state.channelName && (
            <p className="text-sm text-neutral-300">
              <span className="text-neutral-500">Nome:</span> {state.channelName}
            </p>
          )}
          {state.niche && (
            <p className="text-sm text-neutral-300">
              <span className="text-neutral-500">Nicho:</span>{" "}
              {NICHES.find((n) => n.value === state.niche)?.label}
            </p>
          )}
          {state.tone && (
            <p className="text-sm text-neutral-300">
              <span className="text-neutral-500">Tom:</span>{" "}
              {TONES.find((t) => t.value === state.tone)?.label}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Main Onboarding Page ─────────────────────────────────────────────────────

export default function OnboardingPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<OnboardingState>(INITIAL_STATE);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const updateState = (updates: Partial<OnboardingState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const { mutate: submit, isPending } = useMutation({
    mutationFn: async () => {
      // Create channel from step 2 data
      const channel = await createChannel({
        name: state.channelName,
        platform: state.platform,
        niche: state.niche,
        tone: state.tone,
        narrationStyle: state.narrationStyle || "conversational",
      });

      // Create project from step 3 data
      const project = await createProject({
        title: state.projectTitle,
        keyword: state.projectKeyword,
        niche: state.niche,
        format: state.projectFormat,
        channelProfileId: channel.id,
      });

      // Mark onboarding as completed
      await completeOnboarding();

      return { project, keyword: state.projectKeyword, niche: state.niche };
    },
    onSuccess: ({ project, keyword, niche }) => {
      // Redirect to /trends with context loaded
      const params = new URLSearchParams({
        projectId: project.id,
        keyword,
        niche,
      });
      router.push(`/trends?${params.toString()}`);
    },
    onError: (err: Error) => {
      setError(err.message || "Erro ao criar projeto. Tente novamente.");
    },
  });

  const canProceedStep1 = () => true;

  const canProceedStep2 = () =>
    state.channelName.trim().length > 0 &&
    state.platform.length > 0 &&
    state.niche.length > 0 &&
    state.tone.length > 0;

  const canProceedStep3 = () =>
    state.projectTitle.trim().length > 0 &&
    state.projectKeyword.trim().length > 0 &&
    state.projectFormat.length > 0;

  const canProceed =
    step === 1
      ? canProceedStep1()
      : step === 2
        ? canProceedStep2()
        : canProceedStep3();

  const handleNext = () => {
    setCompletedSteps((prev) => new Set([...prev, step]));
    setStep((s) => s + 1);
    setError(null);
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    setError(null);
  };

  const handleSubmit = () => {
    setError(null);
    submit();
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: "linear-gradient(135deg, #7C3AED, #4EDEA3)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span
                className="text-base font-bold text-white"
                style={{ fontFamily: "var(--font-space-grotesk)" }}
              >
                nexvideo
              </span>
            </div>
            <span className="text-xs text-neutral-500 font-mono">
              Configuração inicial
            </span>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="mx-auto max-w-2xl px-6 py-4">
          <StepIndicator currentStep={step} completedSteps={completedSteps} />
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {step === 1 && <Step1Welcome />}
            {step === 2 && (
              <Step2Channel state={state} onChange={updateState} />
            )}
            {step === 3 && (
              <Step3Project state={state} onChange={updateState} />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Error */}
        {error && (
          <div className="mt-6 rounded-lg border border-red-500/50 bg-red-500/10 p-4">
            <p className="text-sm text-red-400">{error}</p>
          </div>
        )}

        {/* Navigation */}
        <div className="mt-8 flex items-center justify-between gap-4">
          <button
            onClick={handleBack}
            disabled={step === 1}
            className="flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white disabled:pointer-events-none disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" />
            Anterior
          </button>

          {step < 3 ? (
            <button
              onClick={handleNext}
              disabled={!canProceed}
              className="btn-primary w-36 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {step === 1 ? "Começar" : "Próximo"}
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed || isPending}
              className="btn-primary w-52 flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isPending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Criando projeto...
                </>
              ) : (
                <>
                  <TrendingUp className="h-4 w-4" />
                  Analisar tendências
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
