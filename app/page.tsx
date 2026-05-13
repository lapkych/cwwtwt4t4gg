"use client"

import { useState } from "react"

export default function ContactPage() {
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="relative min-h-screen bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-black opacity-90" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 py-10">
        <div className="w-full max-w-3xl rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-xl shadow-black/40">
          <p className="text-xs uppercase tracking-[0.35em] text-slate-400">Stay in touch</p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Hi there, let’s connect.</h1>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Fast and simple: Telegram bot and official domains right at your fingertips.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://t.me/fsj89j039wntkfdgbot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
            >
              Message on Telegram
            </a>
            <span className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
              Bot online
            </span>
          </div>
        </div>
      </main>

      {showLinks ? (
        <aside className="fixed left-5 bottom-5 z-20 w-[300px] rounded-[1.75rem] border border-white/10 bg-slate-950/95 p-4 shadow-xl shadow-black/30">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-[10px] uppercase tracking-[0.35em] text-slate-400">Our Links</p>
              <h2 className="mt-1 text-lg font-semibold text-white">Official hubs</h2>
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
          <div className="mt-4 space-y-3">
            <a
              href="https://the-cocaine.bond/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl bg-slate-800 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              the-cocaine.bond
            </a>
            <a
              href="https://the-cocaine.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
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
        © 2026 Contact Page
      </footer>
    </div>
  )
}
