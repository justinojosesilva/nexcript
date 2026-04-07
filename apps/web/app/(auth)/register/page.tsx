'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { register as registerUser, storeToken } from '@/lib/auth-client'

const registerSchema = z.object({
  name: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  password: z
    .string()
    .min(8, 'Senha deve ter pelo menos 8 caracteres')
    .regex(/[A-Z]/, 'Senha deve conter pelo menos uma letra maiúscula')
    .regex(/[0-9]/, 'Senha deve conter pelo menos um número'),
})

type RegisterFormData = z.infer<typeof registerSchema>

export default function RegisterPage() {
  const router = useRouter()
  const [globalError, setGlobalError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  })

  const onSubmit = async (data: RegisterFormData) => {
    setGlobalError(null)
    setIsLoading(true)

    try {
      const response = await registerUser(data)
      storeToken(response.accessToken)
      router.push('/dashboard')
    } catch (error) {
      setGlobalError(
        error instanceof Error ? error.message : 'Erro ao criar conta'
      )
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2 text-center">
        <h1 className="text-4xl font-bold text-white font-display">
          Nexcript
        </h1>
        <p className="text-secondary text-sm">
          Produção de conteúdo com IA
        </p>
      </div>

      {/* Form Card */}
      <div className="card space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-white font-display">
            Criar Conta
          </h2>
          <p className="text-secondary text-sm">
            Comece sua jornada com Nexcript
          </p>
        </div>

        {globalError && (
          <div className="px-4 py-3 bg-red-900/20 border border-red-500/50 rounded-lg">
            <p className="text-red-400 text-sm font-medium">{globalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Nome Completo
            </label>
            <input
              {...register('name')}
              type="text"
              id="name"
              placeholder="Seu nome"
              className="input-field"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">
                {errors.name.message}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Email
            </label>
            <input
              {...register('email')}
              type="email"
              id="email"
              placeholder="seu@email.com"
              className="input-field"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-red-400 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white"
            >
              Senha
            </label>
            <input
              {...register('password')}
              type="password"
              id="password"
              placeholder="Mínimo 8 caracteres"
              className="input-field"
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Password Requirements */}
          <div className="text-xs text-muted space-y-1">
            <p>Sua senha deve conter:</p>
            <ul className="list-disc list-inside space-y-0.5">
              <li>Mínimo 8 caracteres</li>
              <li>Pelo menos uma letra maiúscula</li>
              <li>Pelo menos um número</li>
            </ul>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Criando conta...' : 'Criar Conta'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-muted text-sm">ou</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        {/* Sign In Link */}
        <Link href="/login" className="btn-secondary w-full text-center block">
          Já tem uma conta? Entrar
        </Link>
      </div>

      {/* Footer */}
      <p className="text-center text-muted text-xs">
        Ao criar uma conta, você concorda com nossos termos de serviço
      </p>
    </div>
  )
}
