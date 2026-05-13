"use client"

import { useState } from "react"

export default function ContactPage() {
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.16),_transparent_26%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.14),_transparent_30%)] pointer-events-none" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-12">
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-950/95 p-8 shadow-[0_24px_80px_-40px_rgba(56,189,248,0.8)] backdrop-blur-xl">
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Welcome to the Studio</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Свяжитесь в стиле cyber‑glow.</h1>
          <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
            Telegram, официальные домены и аккуратная панель ссылок — всё в одном месте.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://t.me/fsj89j039wntkfdgbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]"
            >
              Open Telegram
            </a>
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
              Bot online
            </span>
          </div>
        </div>
      </main>

      {showLinks ? (
        <aside className="fixed left-5 bottom-5 z-20 w-[300px] rounded-[1.75rem] border border-white/15 bg-slate-950/95 p-4 shadow-2xl shadow-slate-950/40 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-cyan-300">Our Links</p>
              <h2 className="mt-1 text-lg font-semibold">Official hubs</h2>
            </div>
            <button
              type="button"
              onClick={() => setShowLinks(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-xl text-white transition hover:bg-white/10"
              aria-label="Close links"
            >
              ×
            </button>
          </div>
          <div className="mt-4 grid gap-3">
            <a
              href="https://the-cocaine.bond/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-slate-950 text-center transition hover:bg-cyan-400"
            >
              the-cocaine.bond
            </a>
            <a
              href="https://the-cocaine.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white text-center transition hover:bg-white/10"
            >
              the-cocaine.art
            </a>
          </div>
        </aside>
      ) : (
        <button
          type="button"
          onClick={() => setShowLinks(true)}
          className="fixed left-5 bottom-5 z-20 rounded-full border border-white/15 bg-slate-950/95 px-4 py-2 text-sm text-white transition hover:bg-white/10"
        >
          Open links
        </button>
      )}

      <footer className="absolute bottom-4 left-1/2 z-10 -translate-x-1/2 text-slate-500 text-sm">
        &copy; 2026 Contact Page
      </footer>
    </div>
  )
}
