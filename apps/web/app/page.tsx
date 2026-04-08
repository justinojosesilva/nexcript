'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { getStoredToken } from '@/lib/auth-client'
import Link from 'next/link'

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    const token = getStoredToken()
    if (token) {
      router.push('/dashboard')
    }
  }, [router])

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 flex flex-col items-center justify-center px-4 m-8">
      <div className="text-center space-y-8 max-w-2xl">
        <div className="space-y-4">
          <h1 className="text-6xl font-bold text-white font-display leading-tight">
            Nexcript
          </h1>
          <p className="text-2xl text-secondary font-display">
            Produção de Conteúdo com IA
          </p>
        </div>

        <p className="text-lg text-muted leading-relaxed">
          Transforme suas ideias em conteúdo profissional usando inteligência
          artificial. Crie scripts, roteiros e narrativas automaticamente.
        </p>

        <div className="flex gap-4 justify-center pt-6">
          <Link href="/login" className="btn-primary px-8 py-3 text-lg">
            Entrar
          </Link>
          <Link href="/register" className="btn-secondary px-8 py-3 text-lg">
            Criar Conta
          </Link>
        </div>
      </div>
    </div>
  )
}
