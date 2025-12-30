"use client";

import { Messages } from "@/i18n/messages";
import { Language } from "@/types";

interface FooterProps {
  language: Language;
  messages: Messages;
}

export function Footer({ language, messages }: FooterProps) {
  const isBg = language === "bg";

  return (
    <footer className="mt-12 border-t border-white/5 pt-4 text-[11px] text-slate-400">
      <p className="text-xs text-slate-300">{messages.footer.limitedOffer}</p>
      <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap items-center gap-3">
          <span>{messages.footer.rights}</span>
          <nav className="flex gap-3 text-[11px] text-slate-400">
            <a href="#" className="hover:text-slate-200">
              {messages.footer.privacy}
            </a>
            <span className="opacity-40">·</span>
            <a href="#" className="hover:text-slate-200">
              {messages.footer.terms}
            </a>
          </nav>
        </div>
        <div className="text-[10px] text-slate-500">
          {isBg
            ? "Сайтът е демонстративна продуктова брошура без онлайн плащане."
            : "This site is a brochure-style product landing without online checkout."}
        </div>
      </div>
    </footer>
  );
}

