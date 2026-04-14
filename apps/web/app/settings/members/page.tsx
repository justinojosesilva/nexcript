"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  ArrowLeft,
  Plus,
  Users,
  Zap,
  X,
  Loader2,
  Mail,
} from "lucide-react";
import { getStoredToken } from "@/lib/auth-client";
import {
  fetchMembers,
  inviteMember,
  MEMBER_LIMITS,
  type Member,
} from "@/lib/organizations-client";
import { fetchSubscription } from "@/lib/billing-client";
import { useToast } from "@/lib/toast-context";

// ─── Avatar ───────────────────────────────────────────────────────────────────

function MemberAvatar({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

  return (
    <div
      aria-hidden="true"
      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#7C3AED]/30 to-[#7C3AED]/10 ring-1 ring-[#7C3AED]/20"
    >
      <span className="font-headline text-sm font-semibold text-[#A78BFA]">
        {initials}
      </span>
    </div>
  );
}

// ─── Role badge ───────────────────────────────────────────────────────────────

function RoleBadge({ role }: { role: string }) {
  const isAdmin = role === "admin";
  return (
    <span
      className={`inline-flex flex-shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
        isAdmin
          ? "bg-[#4EDEA3]/15 text-[#4EDEA3]"
          : "bg-gray-700/50 text-gray-400"
      }`}
    >
      {isAdmin ? "Admin" : "Membro"}
    </span>
  );
}

// ─── Member row ───────────────────────────────────────────────────────────────

function MemberRow({ member }: { member: Member }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-700/30 bg-gray-900/50 px-5 py-4">
      <MemberAvatar name={member.name} />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-semibold text-white">
          {member.name}
        </p>
        <p className="truncate text-xs text-gray-400">{member.email}</p>
      </div>
      <RoleBadge role={member.role} />
    </div>
  );
}

// ─── Invite Modal ─────────────────────────────────────────────────────────────

function InviteModal({
  onClose,
  onSuccess,
}: {
  onClose: () => void;
  onSuccess: (email: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [inlineError, setInlineError] = useState<string | null>(null);
  const queryClient = useQueryClient();

  const { mutate, isPending } = useMutation({
    mutationFn: () => inviteMember(email.trim()),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: ["org-members"] });
      onSuccess(email.trim());
      onClose();
    },
    onError: (err: { response?: { data?: { message?: string } } }) => {
      setInlineError(
        err.response?.data?.message ?? "Erro ao enviar convite. Tente novamente.",
      );
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setInlineError(null);
    mutate();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="invite-modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-md rounded-2xl border border-gray-700/30 bg-[#1a1a1a] p-6 shadow-2xl">
        {/* Header */}
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2
              id="invite-modal-title"
              className="font-headline text-lg font-bold text-white"
            >
              Convidar membro
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Um email de convite será enviado para o endereço informado.
            </p>
          </div>
          <button
            onClick={onClose}
            className="flex-shrink-0 text-gray-500 transition-colors hover:text-gray-300 cursor-pointer"
            aria-label="Fechar modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="invite-email"
            className="mb-1.5 block text-sm font-medium text-gray-300"
          >
            Email <span className="text-red-400" aria-label="obrigatório">*</span>
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              id="invite-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="membro@empresa.com"
              autoComplete="email"
              required
              className="input-field pl-9"
              disabled={isPending}
              aria-describedby={inlineError ? "invite-email-error" : undefined}
              aria-invalid={!!inlineError}
            />
          </div>

          {/* Inline error */}
          {inlineError && (
            <p
              id="invite-email-error"
              className="mt-2 text-sm text-red-400"
              role="alert"
            >
              {inlineError}
            </p>
          )}

          {/* Actions */}
          <div className="mt-5 flex gap-3">
            <button
              type="button"
              onClick={onClose}
              disabled={isPending}
              className="btn-secondary flex-1 py-2.5 text-sm"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={isPending || !email.trim()}
              className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#7C3AED] py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                "Enviar convite"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function MembersPage() {
  const router = useRouter();
  const isAuthenticated = !!getStoredToken();
  const { addToast } = useToast();
  const [modalOpen, setModalOpen] = useState(false);

  const {
    data: membersData,
    isLoading: isLoadingMembers,
    error: membersError,
  } = useQuery({
    queryKey: ["org-members"],
    queryFn: fetchMembers,
    enabled: isAuthenticated,
  });

  const { data: subscription } = useQuery({
    queryKey: ["billing-subscription"],
    queryFn: fetchSubscription,
    enabled: isAuthenticated,
    retry: false,
  });

  const planSlug = subscription?.plan.slug ?? "free";
  const memberLimit = MEMBER_LIMITS[planSlug] ?? null;
  const memberCount = membersData?.count ?? 0;
  const isAtLimit = memberLimit !== null && memberCount >= memberLimit;
  const isUnlimited = memberLimit === null;

  const handleInviteSuccess = (email: string) => {
    addToast({
      type: "success",
      title: "Convite enviado",
      message: `Um email foi enviado para ${email}.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      {/* Header */}
      <div className="border-b border-gray-800/50 bg-[#0E0E0E]/50 backdrop-blur-sm">
        <div className="mx-auto max-w-3xl px-6 py-5">
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/dashboard")}
              className="flex items-center gap-1.5 text-sm text-gray-400 transition-colors hover:text-white cursor-pointer"
            >
              <ArrowLeft className="h-4 w-4" />
              Dashboard
            </button>
            <div className="h-4 w-px bg-gray-700" aria-hidden="true" />
            <h1
              className="font-headline text-base font-semibold text-white"
            >
              Membros
            </h1>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-10">
        {/* Title row */}
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h2 className="font-headline text-2xl font-bold text-white">
              Equipe
            </h2>
            <p className="mt-1 text-sm text-gray-400">
              Gerencie os membros da sua organização.
            </p>
          </div>
          <button
            onClick={() => setModalOpen(true)}
            disabled={isAtLimit}
            title={isAtLimit ? "Limite de membros atingido — faça upgrade para convidar mais" : undefined}
            className="flex items-center gap-2 rounded-lg bg-[#7C3AED] px-4 py-2.5 text-sm font-bold text-white transition-all hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-40 cursor-pointer"
          >
            <Plus className="h-4 w-4" />
            Convidar membro
          </button>
        </div>

        {/* Member count / limit bar */}
        {subscription && (
          <div
            className={`mb-6 flex items-center justify-between rounded-xl border px-5 py-4 ${
              isAtLimit
                ? "border-amber-500/20 bg-amber-500/5"
                : "border-gray-700/30 bg-gray-900/40"
            }`}
          >
            <div className="flex items-center gap-3">
              <Users
                className={`h-5 w-5 ${isAtLimit ? "text-amber-400" : "text-gray-400"}`}
                aria-hidden="true"
              />
              <span
                className={`text-sm font-medium ${isAtLimit ? "text-amber-300" : "text-gray-300"}`}
              >
                {isUnlimited
                  ? `${memberCount} ${memberCount === 1 ? "membro" : "membros"} (ilimitado)`
                  : `${memberCount} de ${memberLimit} ${memberLimit === 1 ? "membro" : "membros"}`}
              </span>
            </div>
            {isAtLimit && (
              <button
                onClick={() => router.push("/plans")}
                className="flex items-center gap-1.5 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-semibold text-black transition-colors hover:bg-amber-400 cursor-pointer"
              >
                <Zap className="h-3.5 w-3.5" aria-hidden="true" />
                Fazer upgrade
              </button>
            )}
          </div>
        )}

        {/* Members list */}
        {isLoadingMembers ? (
          <div className="space-y-3" aria-label="Carregando membros" aria-busy="true">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex animate-pulse items-center gap-4 rounded-xl border border-gray-700/30 bg-gray-900/50 p-4"
              >
                <div className="h-10 w-10 rounded-full bg-gray-800" />
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/3 rounded bg-gray-800" />
                  <div className="h-3 w-1/2 rounded bg-gray-800" />
                </div>
                <div className="h-5 w-16 rounded-full bg-gray-800" />
              </div>
            ))}
          </div>
        ) : membersError ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4">
            <p className="text-sm text-red-300">
              Erro ao carregar membros. Por favor, tente novamente.
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            {membersData?.members.map((member) => (
              <MemberRow key={member.id} member={member} />
            ))}
          </div>
        )}
      </div>

      {/* Invite Modal */}
      {modalOpen && (
        <InviteModal
          onClose={() => setModalOpen(false)}
          onSuccess={handleInviteSuccess}
        />
      )}
    </div>
  );
}
