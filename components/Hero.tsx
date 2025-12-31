"use client";

import { Messages } from "@/i18n/messages";

interface HeroProps {
  messages: Messages;
  isMobileBottom?: boolean;
}

export function Hero({ messages, isMobileBottom = false }: HeroProps) {
  return (
    <section className={isMobileBottom ? "pt-0" : "pt-4 sm:pt-8"} aria-labelledby="hero-heading">
      <div className="rounded-3xl border border-gray-200 bg-white p-4 shadow-lg shadow-rose-500/5 sm:p-6">
        <div className="space-y-4">
          <div className="inline-flex items-center gap-1 rounded-full border border-rose-400/30 bg-rose-50 px-2.5 py-1 text-[11px] font-medium text-rose-700">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
            <span>Limited promo · -50%</span>
          </div>

          <div>
            <h1
              id="hero-heading"
              className="text-balance text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              {messages.hero.title}
            </h1>
            <p className="mt-2 text-sm text-slate-600 sm:text-base">
              {messages.hero.subtitle}
            </p>
          </div>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-rose-400 to-rose-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-rose-500/30 active:scale-[0.97]"
            >
              {messages.hero.primaryCta}
            </a>
            <a
              href="#catalog"
              className="inline-flex items-center justify-center rounded-full border border-rose-300 bg-transparent px-4 py-2 text-sm font-semibold text-rose-600 hover:bg-rose-50 active:scale-[0.97]"
            >
              {messages.hero.secondaryCta}
            </a>
          </div>

          <ul className="mt-2 grid grid-cols-1 gap-1.5 text-[11px] text-slate-600 sm:grid-cols-3">
            {messages.hero.trustBullets.map((item) => (
              <li
                key={item}
                className="flex items-center gap-1.5 rounded-full border border-gray-200 bg-gray-50 px-2 py-1"
              >
                <span className="inline-flex h-3 w-3 items-center justify-center rounded-full bg-rose-400 text-[9px] text-white">
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

