"use client"

import { useState } from "react"

export default function ContactPage() {
  const [showLinks, setShowLinks] = useState(true)

  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(168,85,247,0.16),_transparent_35%)] pointer-events-none" />
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        <div className="max-w-xl w-full rounded-[2rem] border border-white/10 bg-white/5 p-10 shadow-2xl shadow-cyan-500/5 backdrop-blur-xl ring-1 ring-white/10">
          <div className="space-y-6 text-center">
            <p className="text-sm uppercase tracking-[0.35em] text-cyan-300">Welcome to the Studio</p>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Make contact. Stay connected.
            </h1>
            <p className="mx-auto max-w-2xl text-base text-gray-300 sm:text-lg">
              Быстро и стильно: свяжитесь с нами в Telegram, если хотите обсудить сотрудничество или задать вопрос.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://t.me/fsj89j039wntkfdgbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-cyan-500 px-8 py-4 text-sm font-semibold text-black transition hover:bg-cyan-400"
              >
                Contact Us
              </a>
              <span className="rounded-full border border-white/10 bg-white/5 px-6 py-4 text-sm text-gray-200">
                Telegram bot ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {showLinks ? (
        <aside className="fixed left-6 bottom-6 z-20 w-[320px] rounded-[1.75rem] border border-white/15 bg-slate-950/90 p-5 shadow-2xl shadow-slate-950/40 backdrop-blur-xl ring-1 ring-white/10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-cyan-300">Our Links:</p>
              <h2 className="mt-1 text-xl font-semibold text-white">Official hubs</h2>
            </div>
            <button
              type="button"
              onClick={() => setShowLinks(false)}
              className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs uppercase tracking-[0.18em] text-white transition hover:bg-white/10"
            >
              Close
            </button>
          </div>
          <div className="mt-5 grid gap-3">
            <a
              href="https://the-cocaine.bond/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-4 py-3 text-sm font-semibold text-black transition hover:bg-cyan-400"
            >
              the-cocaine.bond
            </a>
            <a
              href="https://the-cocaine.art/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              the-cocaine.art
            </a>
          </div>
        </aside>
      ) : null}

      <footer className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-gray-500 text-sm">
        &copy; 2026 Contact Page
      </footer>
    </div>
  )
}
