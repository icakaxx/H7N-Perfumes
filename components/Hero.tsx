"use client";

import { Messages } from "@/i18n/messages";

interface HeroProps {
  messages: Messages;
}

export function Hero({ messages }: HeroProps) {
  return (
    <section className="pt-4 sm:pt-8" aria-labelledby="hero-heading">
      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-zinc-950/90 via-black to-zinc-900/90 p-4 shadow-2xl shadow-amber-500/10 sm:p-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/10 px-2.5 py-1 text-[11px] font-medium text-amber-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>Limited promo · -50%</span>
          </div>

          <div>
            <h1
              id="hero-heading"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
            >
              {messages.hero.title}
            </h1>
            <p className="mt-2 text-sm text-slate-300 sm:text-base">
              {messages.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-2 text-sm font-semibold text-black shadow-lg shadow-amber-500/30 active:scale-[0.97]"
            >
              {messages.hero.primaryCta}
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full border border-amber-300/60 bg-transparent px-4 py-2 text-sm font-semibold text-amber-100/90 hover:bg-amber-500/10 active:scale-[0.97]"
            >
              {messages.hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-2 grid grid-cols-1 gap-1.5 text-[11px] text-slate-300 sm:grid-cols-3">
            {messages.hero.trustBullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 rounded-full border border-white/5 bg-black/40 px-2 py-1"
              >
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-amber-400/90 text-[9px] text-black">
                  •
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

