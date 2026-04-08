import type { ReactNode } from "react";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <main className="grid grid-cols-1 lg:grid-cols-12 min-h-screen m-8">
        {/* Left Column: Editorial Content (Hidden on mobile) */}
        <section className="hidden lg:flex lg:col-span-7 bg-surface px-12 py-16 flex-col justify-between relative overflow-hidden">
          {/* Background Decoration - Diagonal gradient element */}
          <div className="absolute inset-0 z-0">
            {/* Main diagonal gradient */}
            <div
              className="absolute top-0 right-0 w-full h-full"
              style={{
                background:
                  "linear-gradient(135deg, rgba(78, 222, 163, 0.08) 0%, rgba(210, 187, 255, 0.12) 30%, rgba(153, 203, 255, 0.1) 60%, transparent 100%)",
              }}
            />
            {/* Accent glow */}
            <div
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(153, 203, 255, 0.15) 0%, transparent 70%)",
              }}
            />
          </div>

          {/* Header */}
          <div className="relative z-10 mb-12">
            <h1 className="text-3xl font-black tracking-tighter text-white font-headline">
              Nexcript
            </h1>
          </div>

          {/* Hero Message */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-container/20 border border-outline-variant/15 mb-6">
              <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-secondary">
                ⚡ The Intelligent Monolith
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold font-headline leading-[1.15] tracking-tight text-white mb-8">
              Transforme ideias em{" "}
              <span
                style={{
                  background:
                    "linear-gradient(90deg, var(--primary) 0%, var(--secondary) 50%, var(--tertiary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                scripts virais
              </span>{" "}
              com IA.
            </h2>
            <p className="text-lg text-on-surface-variant leading-relaxed max-w-lg font-body">
              A plataforma definitiva para criadores que buscam precisão
              editorial e escala automatizada.
            </p>
          </div>

          {/* Footer Stats */}
          <div className="relative z-10 grid grid-cols-3 gap-8">
            <div>
              <span
                className="text-mono mb-2 block"
                style={{ color: "var(--outline)" }}
              >
                Status
              </span>
              <span className="text-sm font-medium text-on-surface">
                V3.0 Production
              </span>
            </div>
            <div>
              <span className="text-mono text-outline mb-2 block">Latency</span>
              <span className="text-sm font-medium text-on-surface">
                14ms Global
              </span>
            </div>
            <div>
              <span className="text-mono text-outline mb-2 block">Safety</span>
              <span className="text-sm font-medium text-on-surface">
                AES-256 Encrypted
              </span>
            </div>
          </div>
        </section>

        {/* Right Column: Auth Form */}
        <section className="col-span-1 lg:col-span-5 bg-surface-container-low flex items-center justify-center px-8 py-12 md:px-16 md:py-16">
          <div className="w-full max-w-[420px]">
            {/* Mobile Logo */}
            <div className="lg:hidden mb-12 text-center">
              <h1 className="text-2xl font-black tracking-tighter text-white font-headline">
                Nexcript
              </h1>
            </div>

            {children}
          </div>
        </section>
      </main>

      {/* Ambient Glows are in globals.css */}
    </>
  );
}
