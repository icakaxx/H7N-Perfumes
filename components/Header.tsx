"use client";

import { Messages } from "@/i18n/messages";
import { Language } from "@/types";

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  messages: Messages;
  whatsappLink: string;
}

export function Header({ language, onLanguageChange, messages, whatsappLink }: HeaderProps) {
  const isBg = language === "bg";

  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-white/5 bg-black/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <h1 className="text-sm font-semibold text-slate-50 sm:text-base">
            {messages.header.logo}
          </h1>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1 text-xs">
            <button
              type="button"
              onClick={() => onLanguageChange("bg")}
              className={`rounded-full px-2.5 py-1 transition ${
                language === "bg"
                  ? "bg-amber-400 text-black"
                  : "text-slate-300 hover:text-slate-50"
              }`}
            >
              {messages.header.languageBg}
            </button>
            <button
              type="button"
              onClick={() => onLanguageChange("en")}
              className={`rounded-full px-2.5 py-1 transition ${
                language === "en"
                  ? "bg-amber-400 text-black"
                  : "text-slate-300 hover:text-slate-50"
              }`}
            >
              {messages.header.languageEn}
            </button>
          </div>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-emerald-400 px-3 py-1.5 text-xs font-semibold text-black shadow-md shadow-emerald-500/40 hover:bg-emerald-300 active:scale-[0.97]"
          >
            {messages.header.orderCta}
          </a>
        </div>
      </div>
    </header>
  );
}

