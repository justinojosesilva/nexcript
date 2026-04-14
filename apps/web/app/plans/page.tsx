"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation } from "@tanstack/react-query";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  ArrowLeft,
  Zap,
  Crown,
  Building2,
  ExternalLink,
  Loader2,
} from "lucide-react";
import {
  fetchPlans,
  fetchSubscription,
  createCheckoutSession,
  createPortalSession,
  type PlanInfo,
} from "@/lib/billing-client";
import { getStoredToken } from "@/lib/auth-client";

// ─── Plan metadata ────────────────────────────────────────────────────────────

type PlanMeta = {
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
  gradient: string;
  highlight: boolean;
  badge?: string;
  features: string[];
};

const PLAN_META: Record<string, PlanMeta> = {
  free: {
    icon: Zap,
    color: "#6B7280",
    gradient: "from-gray-600/20 to-gray-700/10",
    highlight: false,
    features: [
      "5 roteiros / mês",
      "5 narrações / mês",
      "3 exportações / mês",
      "Análise de tendências",
      "Score de monetização",
    ],
  },
  starter: {
    icon: Sparkles,
    color: "#7C3AED",
    gradient: "from-purple-600/20 to-purple-700/5",
    highlight: true,
    badge: "Mais popular",
    features: [
      "30 roteiros / mês",
      "30 narrações / mês",
      "20 exportações / mês",
      "Análise de tendências avançada",
      "Score de monetização",
      "Exportação de mídia",
      "Suporte por email",
    ],
  },
  professional: {
    icon: Crown,
    color: "#4EDEA3",
    gradient: "from-emerald-600/20 to-emerald-700/5",
    highlight: false,
    features: [
      "Roteiros ilimitados",
      "Narrações ilimitadas",
      "Exportações ilimitadas",
      "Tudo do Starter",
      "Prioridade no suporte",
      "API de acesso",
    ],
  },
  enterprise: {
    icon: Building2,
    color: "#F59E0B",
    gradient: "from-amber-600/20 to-amber-700/5",
    highlight: false,
    features: [
      "Tudo do Professional",
      "SLA dedicado",
      "Onboarding personalizado",
      "Integrações customizadas",
      "Faturamento por nota fiscal",
    ],
  },
};

// ─── Plan Card ────────────────────────────────────────────────────────────────

function PlanCard({
  plan,
  isCurrent,
  isAuthenticated,
  onSubscribe,
  isPending,
  pendingSlug,
}: {
  plan: PlanInfo;
  isCurrent: boolean;
  isAuthenticated: boolean;
  onSubscribe: (slug: string) => void;
  isPending: boolean;
  pendingSlug: string | null;
}) {
  const meta = (PLAN_META[plan.slug] ?? PLAN_META["free"])!;
  const Icon = meta.icon;
  const isThisPending = isPending && pendingSlug === plan.slug;
  const isFree = plan.slug === "free";

  const formattedPrice =
    parseFloat(plan.priceMonthlyBrl) === 0
      ? "Grátis"
      : `R$ ${parseFloat(plan.priceMonthlyBrl).toFixed(2).replace(".", ",")}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative flex flex-col rounded-2xl border p-6 transition-all duration-300 ${
        meta.highlight
          ? "border-purple-500/60 bg-gradient-to-b from-purple-600/10 to-purple-700/5 shadow-lg shadow-purple-500/10"
          : isCurrent
            ? "border-emerald-500/40 bg-neutral-900"
            : "border-neutral-700/50 bg-neutral-900 hover:border-neutral-600"
      }`}
    >
      {/* Most popular badge */}
      {meta.badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2">
          <span className="rounded-full bg-purple-600 px-4 py-1 text-xs font-semibold text-white">
            {meta.badge}
          </span>
        </div>
      )}

      {/* Current plan badge */}
      {isCurrent && (
        <div className="mb-3 flex justify-end">
          <span className="rounded-full border border-emerald-500/40 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            Seu plano atual
          </span>
        </div>
      )}

      {/* Icon + Name */}
      <div className="mb-4 flex items-center gap-3">
        <div
          className={`flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${meta.gradient} border`}
          style={{ borderColor: `${meta.color}30` }}
        >
          <Icon className="h-5 w-5" style={{ color: meta.color }} />
        </div>
        <h3 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
          {plan.name}
        </h3>
      </div>

      {/* Price */}
      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          {formattedPrice === "Grátis" ? (
            <span className="text-3xl font-bold text-white">Grátis</span>
          ) : (
            <>
              <span className="text-3xl font-bold text-white">{formattedPrice}</span>
              <span className="text-sm text-neutral-400">/mês</span>
            </>
          )}
        </div>
      </div>

      {/* Features */}
      <ul className="mb-8 flex-1 space-y-2.5">
        {meta.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2.5 text-sm">
            <span
              className="flex h-4.5 w-4.5 flex-shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: `${meta.color}20` }}
            >
              <Check className="h-2.5 w-2.5" style={{ color: meta.color }} />
            </span>
            <span className="text-neutral-300">{feature}</span>
          </li>
        ))}
      </ul>

      {/* CTA Button */}
      {isCurrent ? (
        <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/5 py-2.5 text-center text-sm font-medium text-emerald-400">
          Plano atual
        </div>
      ) : isFree ? (
        <div className="rounded-lg border border-neutral-700 bg-neutral-800 py-2.5 text-center text-sm font-medium text-neutral-400">
          Plano gratuito
        </div>
      ) : (
        <button
          onClick={() => onSubscribe(plan.slug)}
          disabled={isPending || !isAuthenticated}
          className={`flex w-full items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50 ${
            meta.highlight
              ? "bg-purple-600 text-white hover:bg-purple-500 shadow-md shadow-purple-500/20"
              : "border border-neutral-600 bg-neutral-800 text-white hover:bg-neutral-700 hover:border-neutral-500"
          }`}
        >
          {isThisPending ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Redirecionando...
            </>
          ) : (
            <>
              Assinar
              <ExternalLink className="h-3.5 w-3.5" />
            </>
          )}
        </button>
      )}
    </motion.div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PlansPage() {
  const router = useRouter();
  const isAuthenticated = !!getStoredToken();
  const [pendingSlug, setPendingSlug] = useState<string | null>(null);
  const [portalError, setPortalError] = useState<string | null>(null);

  const { data: plansData, isLoading: isLoadingPlans } = useQuery({
    queryKey: ["billing-plans"],
    queryFn: fetchPlans,
  });

  const { data: subscription } = useQuery({
    queryKey: ["billing-subscription"],
    queryFn: fetchSubscription,
    enabled: isAuthenticated,
    retry: false,
  });

  const { mutate: subscribe, isPending: isCheckoutPending } = useMutation({
    mutationFn: (planSlug: string) => createCheckoutSession(planSlug),
    onSuccess: ({ checkoutUrl }) => {
      window.location.href = checkoutUrl;
    },
    onError: () => {
      setPendingSlug(null);
    },
  });

  const { mutate: openPortal, isPending: isPortalPending } = useMutation({
    mutationFn: createPortalSession,
    onSuccess: ({ portalUrl }) => {
      window.location.href = portalUrl;
    },
    onError: (err: Error) => {
      setPortalError(err.message || "Erro ao abrir portal de assinatura.");
    },
  });

  const handleSubscribe = (slug: string) => {
    setPendingSlug(slug);
    subscribe(slug);
  };

  const currentPlanSlug = subscription?.plan.slug ?? "free";
  const plans = plansData?.plans ?? [];

  return (
    <div className="min-h-screen bg-neutral-950">
      {/* Header */}
      <div className="border-b border-neutral-800 bg-neutral-950/80 backdrop-blur-sm">
        <div className="mx-auto max-w-5xl px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-1.5 text-sm text-neutral-400 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </button>
            <div className="h-4 w-px bg-neutral-700" />
            <h1 className="text-base font-semibold text-white" style={{ fontFamily: "var(--font-space-grotesk)" }}>
              Planos
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl px-6 py-12">
        {/* Hero */}
        <div className="mb-12 text-center">
          <h2
            className="mb-3 text-4xl font-bold text-white"
            style={{ fontFamily: "var(--font-space-grotesk)", lineHeight: 1.15 }}
          >
            Escolha seu plano
          </h2>
          <p className="mx-auto max-w-md text-neutral-400">
            Produza mais conteúdo com IA. Cancele quando quiser.
          </p>
        </div>

        {/* Plans grid */}
        {isLoadingPlans ? (
          <div className="grid gap-6 sm:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-2xl border border-neutral-800 bg-neutral-900"
              />
            ))}
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-3">
            {plans
              .filter((p) => ["free", "starter", "professional"].includes(p.slug))
              .map((plan) => (
                <PlanCard
                  key={plan.slug}
                  plan={plan}
                  isCurrent={plan.slug === currentPlanSlug}
                  isAuthenticated={isAuthenticated}
                  onSubscribe={handleSubscribe}
                  isPending={isCheckoutPending}
                  pendingSlug={pendingSlug}
                />
              ))}
          </div>
        )}

        {/* Manage subscription */}
        {isAuthenticated && currentPlanSlug !== "free" && (
          <div className="mt-10 text-center">
            {portalError && (
              <p className="mb-3 text-sm text-red-400">{portalError}</p>
            )}
            <button
              onClick={() => {
                setPortalError(null);
                openPortal();
              }}
              disabled={isPortalPending}
              className="inline-flex items-center gap-2 text-sm text-neutral-400 transition-colors hover:text-white disabled:opacity-50"
            >
              {isPortalPending ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <ExternalLink className="h-4 w-4" />
              )}
              Gerenciar assinatura
            </button>
          </div>
        )}

        {/* Not logged in notice */}
        {!isAuthenticated && (
          <p className="mt-8 text-center text-sm text-neutral-500">
            <button
              onClick={() => router.push("/login")}
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Entre na sua conta
            </button>{" "}
            para assinar um plano.
          </p>
        )}
      </div>
    </div>
  );
}
