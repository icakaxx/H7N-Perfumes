"use client";

import { Messages } from "@/i18n/messages";
import { Language } from "@/types";

interface FAQProps {
  language: Language;
  messages: Messages;
}

export function FAQ({ messages }: FAQProps) {
  return (
    <section className="mt-10 space-y-4" aria-labelledby="faq-heading">
      <div>
        <h2
          id="faq-heading"
          className="text-lg font-semibold tracking-tight text-slate-50 sm:text-xl"
        >
          {messages.faq.title}
        </h2>
      </div>
      <div className="space-y-2 rounded-2xl border border-gray-200 bg-white p-3 sm:p-4">
        {messages.faq.items.map((item) => (
          <details
            key={item.q}
            className="group rounded-xl border border-gray-200 bg-gray-50 p-2 text-xs text-slate-700 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-xs font-semibold text-slate-900">
              <span>{item.q}</span>
              <span className="rounded-full bg-gray-200 px-2 py-0.5 text-[10px] text-slate-600 group-open:bg-rose-400 group-open:text-white">
                {"+"}
              </span>
            </summary>
            <p className="mt-1.5 text-[11px] leading-relaxed text-slate-600">
              {item.a}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

