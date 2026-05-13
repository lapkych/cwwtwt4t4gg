"use client"

import { useState } from "react"

export default function ContactPage() {
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_25%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.18),_transparent_30%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_20%),linear-gradient(180deg,_rgba(15,23,42,0.75),_rgba(15,23,42,0.95))] pointer-events-none" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-10">
        <div className="relative mx-auto flex w-full max-w-5xl flex-col overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/90 shadow-[0_35px_120px_-30px_rgba(56,189,248,0.55)] backdrop-blur-xl ring-1 ring-white/10">
          <div className="absolute right-0 top-0 h-40 w-40 -translate-x-1/3 translate-y-1/3 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="absolute left-0 bottom-0 h-44 w-44 -translate-y-1/3 rounded-full bg-violet-500/15 blur-3xl" />

          <div className="relative z-10 grid gap-10 px-8 py-10 md:grid-cols-[1.2fr_0.8fr] md:px-14 md:py-14">
            <section className="space-y-6">
              <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Welcome to the studio</p>
              <h1 className="max-w-3xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
                Свяжитесь со мной в стиле cyber‑glow.
              </h1>
              <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
                Удобная связь через Telegram + быстрые доступы к официальным доменам. Крутой интерфейс, атмосфера и ощущение скорости.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="https://t.me/fsj89j039wntkfdgbot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-cyan-300 to-sky-300 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_25px_80px_-40px_rgba(56,189,248,0.9)] transition hover:scale-[1.02] hover:brightness-110"
                >
                  Open Telegram
                </a>
                <span className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-slate-200">
                  Bot online & ready
                </span>
              </div>
            </section>

            <section className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-6 shadow-xl shadow-slate-950/20 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Our Links</p>
                  <p className="mt-2 text-lg font-semibold text-white">Fast access</p>
                </div>
                <button
                  type="button"
                  onClick={() => setShowLinks(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl font-medium text-white transition hover:bg-white/10"
                  aria-label="Close links panel"
                >
                  ×
                </button>
              </div>

              <div className="mt-6 grid gap-3">
                <a
                  href="https://the-cocaine.bond/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-cyan-500/10 bg-slate-950/80 px-4 py-4 text-sm font-semibold text-white outline-none transition hover:border-cyan-400/30 hover:bg-slate-900"
                >
                  <span>the-cocaine.bond</span>
                  <span className="rounded-full bg-cyan-500 px-3 py-1 text-xs font-semibold text-slate-950 transition group-hover:bg-cyan-400">
                    GO
                  </span>
                </a>
                <a
                  href="https://the-cocaine.art/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-3xl border border-white/10 bg-white/5 px-4 py-4 text-sm font-semibold text-white outline-none transition hover:border-white/20 hover:bg-white/10"
                >
                  <span>the-cocaine.art</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white transition group-hover:bg-white/20">
                    GO
                  </span>
                </a>
              </div>

              <div className="mt-6 rounded-3xl bg-slate-950/80 p-4 text-xs text-slate-400">
                Быстрый доступ к официальным адресам. Кликни и переходи.
              </div>
            </section>
          </div>
        </div>
      </div>

      {showLinks ? null : (
        <div className="fixed left-6 bottom-6 z-20 rounded-[1.5rem] border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-300 shadow-2xl shadow-slate-950/40 backdrop-blur-xl ring-1 ring-white/10">
          <button
            type="button"
            onClick={() => setShowLinks(true)}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white transition hover:bg-white/10"
          >
            Open links
          </button>
        </div>
      )}

      <footer className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gray-500 text-sm">
        &copy; 2026 Contact Page
      </footer>
    </div>
  )
}
