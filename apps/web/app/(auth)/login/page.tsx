'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import Link from 'next/link'
import { login, storeToken } from '@/lib/auth-client'

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'Senha deve ter pelo menos 6 caracteres'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function LoginPage() {
  const router = useRouter()
  const [globalError, setGlobalError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (data: LoginFormData) => {
    setGlobalError(null)
    setIsLoading(true)

    try {
      const response = await login(data)
      storeToken(response.accessToken)
      router.push('/dashboard')
    } catch (error) {
      setGlobalError(
        error instanceof Error ? error.message : 'Erro ao fazer login'
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
            Entrar
          </h2>
          <p className="text-secondary text-sm">
            Acesse sua conta para continuar
          </p>
        </div>

        {globalError && (
          <div className="px-4 py-3 bg-red-900/20 border border-red-500/50 rounded-lg">
            <p className="text-red-400 text-sm font-medium">{globalError}</p>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
              placeholder="Sua senha"
              className="input-field"
              disabled={isLoading}
            />
            {errors.password && (
              <p className="text-red-400 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-3">
          <div className="flex-1 h-px bg-neutral-700" />
          <span className="text-muted text-sm">ou</span>
          <div className="flex-1 h-px bg-neutral-700" />
        </div>

        {/* Sign Up Link */}
        <Link
          href="/register"
          className="btn-secondary w-full text-center block"
        >
          Criar nova conta
        </Link>
      </div>

      {/* Footer */}
      <p className="text-center text-muted text-xs">
        Ao entrar, você concorda com nossos termos de serviço
      </p>
    </div>
  )
}
