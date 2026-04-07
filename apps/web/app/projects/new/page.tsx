'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useQuery, useMutation } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ChevronRight,
  ChevronLeft,
  Check,
  Plus,
  Tv,
  Mic,
  Layers,
  ArrowLeft,
} from 'lucide-react';
import { fetchChannels, createChannel } from '@/lib/channels-client';
import { createProject } from '@/lib/projects-client';

// ─── Constants ───────────────────────────────────────────────────────────────

const NICHES = [
  { value: 'finance', label: 'Finanças' },
  { value: 'technology', label: 'Tecnologia' },
  { value: 'productivity', label: 'Produtividade' },
  { value: 'lifestyle', label: 'Estilo de Vida' },
  { value: 'education', label: 'Educação' },
  { value: 'entertainment', label: 'Entretenimento' },
  { value: 'business', label: 'Negócios' },
  { value: 'health', label: 'Saúde' },
  { value: 'personal_development', label: 'Desenvolvimento Pessoal' },
  { value: 'other', label: 'Outro' },
];

const PLATFORMS = [
  { value: 'youtube', label: 'YouTube' },
  { value: 'youtube_shorts', label: 'YouTube Shorts' },
  { value: 'tiktok', label: 'TikTok' },
  { value: 'instagram_reels', label: 'Instagram Reels' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'linkedin', label: 'LinkedIn' },
  { value: 'podcast', label: 'Podcast' },
];

const FORMATS = [
  {
    value: 'long_form',
    label: 'Long Form',
    description: '10+ minutos, conteúdo aprofundado',
    icon: '📹',
  },
  {
    value: 'short_form',
    label: 'Short Form',
    description: 'Menos de 1 min, Shorts / TikTok',
    icon: '⚡',
  },
  {
    value: 'medium_form',
    label: 'Medium Form',
    description: '5 a 10 minutos, formato equilibrado',
    icon: '🎯',
  },
  {
    value: 'podcast',
    label: 'Podcast',
    description: 'Áudio / vídeo de podcast',
    icon: '🎙️',
  },
];

const TONES = [
  { value: 'educational', label: 'Educativo', description: 'Ensina e informa com clareza', emoji: '📚' },
  { value: 'inspirational', label: 'Inspiracional', description: 'Motiva e engaja emocionalmente', emoji: '✨' },
  { value: 'casual', label: 'Casual', description: 'Descontraído e próximo', emoji: '😊' },
  { value: 'formal', label: 'Formal', description: 'Profissional e estruturado', emoji: '👔' },
  { value: 'funny', label: 'Humorístico', description: 'Leve, engraçado e viralizável', emoji: '😂' },
  { value: 'serious', label: 'Sério', description: 'Direto ao ponto, sem rodeios', emoji: '🎯' },
  { value: 'dark_comedy', label: 'Comédia Negra', description: 'Humor irreverente e ousado', emoji: '🖤' },
  { value: 'sarcastic', label: 'Sarcástico', description: 'Crítico com ironia e wit', emoji: '😏' },
];

const NARRATION_STYLES = [
  { value: 'professional', label: 'Profissional' },
  { value: 'conversational', label: 'Conversacional' },
  { value: 'energetic', label: 'Energético' },
  { value: 'calm', label: 'Calmo' },
  { value: 'dramatic', label: 'Dramático' },
  { value: 'friendly', label: 'Amigável' },
];

const STEPS = [
  { id: 1, label: 'Canal', icon: Tv },
  { id: 2, label: 'Projeto', icon: Layers },
  { id: 3, label: 'Tom', icon: Mic },
];

// ─── Types ────────────────────────────────────────────────────────────────────

interface WizardState {
  // Step 1
  channelId: string;
  isNewChannel: boolean;
  newChannelName: string;
  // Step 2
  title: string;
  keyword: string;
  niche: string;
  format: string;
  platform: string;
  durationMinutes: string;
  // Step 3
  tone: string;
  narrationStyle: string;
}

// ─── Step Indicator ──────────────────────────────────────────────────────────

function StepIndicator({
  currentStep,
  onNavigate,
  completedSteps,
}: {
  currentStep: number;
  onNavigate: (step: number) => void;
  completedSteps: Set<number>;
}) {
  return (
    <div className="flex items-center justify-center gap-0">
      {STEPS.map((step, idx) => {
        const isActive = currentStep === step.id;
        const isCompleted = completedSteps.has(step.id);
        const isNavigable = isCompleted || step.id <= currentStep;
        const Icon = step.icon;

        return (
          <div key={step.id} className="flex items-center">
            <button
              onClick={() => isNavigable && onNavigate(step.id)}
              disabled={!isNavigable}
              className={`flex items-center gap-2 rounded-lg px-4 py-2 transition-all duration-200 ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : isCompleted
                    ? 'cursor-pointer bg-purple-600/20 text-purple-400 hover:bg-purple-600/30'
                    : 'cursor-not-allowed text-neutral-600'
              }`}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold ${
                  isCompleted
                    ? 'bg-purple-500 text-white'
                    : isActive
                      ? 'bg-white/20 text-white'
                      : 'bg-neutral-700 text-neutral-500'
                }`}
              >
                {isCompleted ? <Check className="h-3 w-3" /> : <Icon className="h-3 w-3" />}
              </div>
              <span className="hidden text-sm font-medium sm:block">{step.label}</span>
            </button>

            {idx < STEPS.length - 1 && (
              <div
                className={`h-px w-8 transition-colors duration-300 ${
                  completedSteps.has(step.id) ? 'bg-purple-500/50' : 'bg-neutral-700'
                }`}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Step 1: Channel Selection ────────────────────────────────────────────────

function Step1Channel({
  state,
  onChange,
}: {
  state: WizardState;
  onChange: (updates: Partial<WizardState>) => void;
}) {
  const { data: channels = [], isLoading } = useQuery({
    queryKey: ['channels'],
    queryFn: fetchChannels,
  });

  const [creatingNew, setCreatingNew] = useState(state.isNewChannel);

  const handleSelectExisting = (channelId: string) => {
    onChange({ channelId, isNewChannel: false, newChannelName: '' });
    setCreatingNew(false);
  };

  const handleCreateNew = () => {
    onChange({ channelId: '', isNewChannel: true });
    setCreatingNew(true);
  };

  const platformLabel = (platform: string) =>
    PLATFORMS.find((p) => p.value === platform)?.label ?? platform;

  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-white">
          Selecione um canal
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Escolha um canal existente ou crie um novo para esse projeto.
        </p>
      </div>

      {isLoading ? (
        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="h-20 animate-pulse rounded-lg bg-neutral-800"
            />
          ))}
        </div>
      ) : (
        <div className="space-y-3">
          {channels.map((channel) => (
            <button
              key={channel.id}
              onClick={() => handleSelectExisting(channel.id)}
              className={`w-full rounded-lg border p-4 text-left transition-all duration-200 ${
                state.channelId === channel.id && !state.isNewChannel
                  ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30'
                  : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600 hover:bg-neutral-750'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-white">{channel.name}</p>
                  <p className="mt-0.5 text-sm text-neutral-400">
                    {platformLabel(channel.platform)} ·{' '}
                    {NICHES.find((n) => n.value === channel.niche)?.label ??
                      channel.niche}
                  </p>
                </div>
                {state.channelId === channel.id && !state.isNewChannel && (
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-500">
                    <Check className="h-3.5 w-3.5 text-white" />
                  </div>
                )}
              </div>
            </button>
          ))}

          <button
            onClick={handleCreateNew}
            className={`w-full rounded-lg border p-4 text-left transition-all duration-200 ${
              creatingNew
                ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30'
                : 'border-dashed border-neutral-600 bg-neutral-800/50 hover:border-neutral-500'
            }`}
          >
            <div className="flex items-center gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-neutral-700">
                <Plus className="h-4 w-4 text-neutral-300" />
              </div>
              <div>
                <p className="font-medium text-white">Criar novo canal</p>
                <p className="text-sm text-neutral-400">
                  Configure um canal rápido para esse projeto
                </p>
              </div>
            </div>
          </button>
        </div>
      )}

      {creatingNew && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="space-y-2"
        >
          <label className="block text-sm font-medium text-white">
            Nome do canal
          </label>
          <input
            type="text"
            value={state.newChannelName}
            onChange={(e) =>
              onChange({ newChannelName: e.target.value })
            }
            placeholder="Ex: Canal do João"
            className="input-field"
            autoFocus
          />
        </motion.div>
      )}
    </div>
  );
}

// ─── Step 2: Project Details ──────────────────────────────────────────────────

function Step2Project({
  state,
  onChange,
}: {
  state: WizardState;
  onChange: (updates: Partial<WizardState>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-white">
          Detalhes do projeto
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Defina o tema, formato e plataforma do seu conteúdo.
        </p>
      </div>

      {/* Title & Keyword */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Título do projeto <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={state.title}
            onChange={(e) => onChange({ title: e.target.value })}
            placeholder="Ex: Como sair das dívidas em 2025"
            className="input-field"
          />
        </div>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Palavra-chave principal <span className="text-red-400">*</span>
          </label>
          <input
            type="text"
            value={state.keyword}
            onChange={(e) => onChange({ keyword: e.target.value })}
            placeholder="Ex: sair das dívidas"
            className="input-field"
          />
        </div>
      </div>

      {/* Format */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Formato <span className="text-red-400">*</span>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          {FORMATS.map((fmt) => (
            <button
              key={fmt.value}
              onClick={() => onChange({ format: fmt.value })}
              className={`rounded-lg border p-4 text-left transition-all duration-200 ${
                state.format === fmt.value
                  ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30'
                  : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{fmt.icon}</span>
                <div>
                  <p className="font-medium text-white">{fmt.label}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">{fmt.description}</p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Niche & Platform */}
      <div className="grid gap-4 sm:grid-cols-2">
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
        <div className="space-y-2">
          <label className="block text-sm font-medium text-white">
            Plataforma <span className="text-red-400">*</span>
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
      </div>

      {/* Duration (optional) */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Duração estimada (minutos){' '}
          <span className="text-neutral-500">— opcional</span>
        </label>
        <input
          type="number"
          min={1}
          max={480}
          value={state.durationMinutes}
          onChange={(e) => onChange({ durationMinutes: e.target.value })}
          placeholder="Ex: 12"
          className="input-field w-40"
        />
      </div>
    </div>
  );
}

// ─── Step 3: Narration Tone ──────────────────────────────────────────────────

function Step3Tone({
  state,
  onChange,
}: {
  state: WizardState;
  onChange: (updates: Partial<WizardState>) => void;
}) {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="font-display text-2xl font-bold text-white">
          Tom de narração
        </h2>
        <p className="mt-1 text-sm text-neutral-400">
          Como seu conteúdo deve soar para o público?
        </p>
      </div>

      {/* Content Tone */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Tom do conteúdo <span className="text-red-400">*</span>
        </label>
        <div className="grid gap-3 sm:grid-cols-2">
          {TONES.map((tone) => (
            <button
              key={tone.value}
              onClick={() => onChange({ tone: tone.value })}
              className={`rounded-lg border p-4 text-left transition-all duration-200 ${
                state.tone === tone.value
                  ? 'border-purple-500 bg-purple-500/10 ring-1 ring-purple-500/30'
                  : 'border-neutral-700 bg-neutral-800 hover:border-neutral-600'
              }`}
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl">{tone.emoji}</span>
                <div>
                  <p className="font-medium text-white">{tone.label}</p>
                  <p className="mt-0.5 text-xs text-neutral-400">
                    {tone.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Narration Style */}
      <div className="space-y-3">
        <label className="block text-sm font-medium text-white">
          Estilo de narração{' '}
          <span className="text-neutral-500">— opcional</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {NARRATION_STYLES.map((style) => (
            <button
              key={style.value}
              onClick={() =>
                onChange({
                  narrationStyle:
                    state.narrationStyle === style.value ? '' : style.value,
                })
              }
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-200 ${
                state.narrationStyle === style.value
                  ? 'border-purple-500 bg-purple-500/20 text-purple-300'
                  : 'border-neutral-700 bg-neutral-800 text-neutral-300 hover:border-neutral-500'
              }`}
            >
              {style.label}
            </button>
          ))}
        </div>
      </div>

      {/* Summary */}
      {(state.title || state.tone) && (
        <div className="rounded-lg border border-neutral-700 bg-neutral-800/50 p-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-neutral-500">
            Resumo do projeto
          </p>
          <div className="space-y-1 text-sm text-neutral-300">
            {state.title && (
              <p>
                <span className="text-neutral-500">Título:</span> {state.title}
              </p>
            )}
            {state.niche && (
              <p>
                <span className="text-neutral-500">Nicho:</span>{' '}
                {NICHES.find((n) => n.value === state.niche)?.label}
              </p>
            )}
            {state.format && (
              <p>
                <span className="text-neutral-500">Formato:</span>{' '}
                {FORMATS.find((f) => f.value === state.format)?.label}
              </p>
            )}
            {state.tone && (
              <p>
                <span className="text-neutral-500">Tom:</span>{' '}
                {TONES.find((t) => t.value === state.tone)?.label}
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Main Wizard Page ─────────────────────────────────────────────────────────

const INITIAL_STATE: WizardState = {
  channelId: '',
  isNewChannel: false,
  newChannelName: '',
  title: '',
  keyword: '',
  niche: '',
  format: '',
  platform: '',
  durationMinutes: '',
  tone: '',
  narrationStyle: '',
};

export default function NewProjectPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [state, setState] = useState<WizardState>(INITIAL_STATE);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [error, setError] = useState<string | null>(null);

  const updateState = (updates: Partial<WizardState>) => {
    setState((prev) => ({ ...prev, ...updates }));
  };

  const { mutate: submit, isPending } = useMutation({
    mutationFn: async () => {
      let channelId = state.channelId;

      if (state.isNewChannel) {
        const channel = await createChannel({
          name: state.newChannelName,
          platform: state.platform,
          niche: state.niche,
          tone: state.tone,
          narrationStyle: state.narrationStyle || 'conversational',
        });
        channelId = channel.id;
      }

      return createProject({
        title: state.title,
        keyword: state.keyword,
        niche: state.niche,
        format: state.format,
        channelProfileId: channelId,
        durationMinutes: state.durationMinutes
          ? parseInt(state.durationMinutes, 10)
          : undefined,
      });
    },
    onSuccess: (project) => {
      router.push(`/projects/${project.id}`);
    },
    onError: (err: Error) => {
      setError(err.message || 'Erro ao criar projeto. Tente novamente.');
    },
  });

  const canProceedStep1 = () => {
    if (state.isNewChannel) return state.newChannelName.trim().length > 0;
    return state.channelId.length > 0;
  };

  const canProceedStep2 = () =>
    state.title.trim().length > 0 &&
    state.keyword.trim().length > 0 &&
    state.niche.length > 0 &&
    state.format.length > 0 &&
    state.platform.length > 0;

  const canProceedStep3 = () => state.tone.length > 0;

  const handleNext = () => {
    setCompletedSteps((prev) => new Set([...prev, step]));
    setStep((s) => s + 1);
    setError(null);
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    setError(null);
  };

  const handleNavigate = (targetStep: number) => {
    if (targetStep < step || completedSteps.has(targetStep)) {
      setStep(targetStep);
    }
  };

  const handleSubmit = () => {
    setError(null);
    submit();
  };

  const canProceed =
    step === 1
      ? canProceedStep1()
      : step === 2
        ? canProceedStep2()
        : canProceedStep3();

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-2xl px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push('/dashboard')}
              className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Voltar
            </button>
            <div className="h-4 w-px bg-neutral-700" />
            <h1 className="font-display text-lg font-semibold text-white">
              Novo Projeto
            </h1>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="border-b border-neutral-800 bg-neutral-900/50">
        <div className="mx-auto max-w-2xl px-6 py-4">
          <StepIndicator
            currentStep={step}
            onNavigate={handleNavigate}
            completedSteps={completedSteps}
          />
        </div>
      </div>

      {/* Step Content */}
      <div className="mx-auto max-w-2xl px-6 py-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            {step === 1 && (
              <Step1Channel state={state} onChange={updateState} />
            )}
            {step === 2 && (
              <Step2Project state={state} onChange={updateState} />
            )}
            {step === 3 && (
              <Step3Tone state={state} onChange={updateState} />
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
        <div className="mt-8 flex items-center justify-between">
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
              className="btn-primary flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Próximo
              <ChevronRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={!canProceed || isPending}
              className="btn-primary flex items-center gap-2 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {isPending ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                  Criando...
                </>
              ) : (
                <>
                  <Check className="h-4 w-4" />
                  Criar Projeto
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
