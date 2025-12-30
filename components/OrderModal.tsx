"use client";

import { Language, Perfume } from "@/types";
import { getPricePair } from "@/utils/pricing";

interface OrderModalProps {
  perfume: Perfume | null;
  language: Language;
  open: boolean;
  onClose: () => void;
  whatsappLink: string;
  viberLink: string;
  phoneNumber: string;
}

export function OrderModal({
  perfume,
  language,
  open,
  onClose,
  whatsappLink,
  viberLink,
  phoneNumber,
}: OrderModalProps) {
  if (!open || !perfume) return null;

  const isBg = language === "bg";

  const titleLabel = isBg ? "Поръчка" : "Order";
  const viaLabel = isBg ? "Избери как да поръчаш" : "Choose how to order";

  const { eur, bgn } = getPricePair(perfume.priceEur);

  const message = encodeURIComponent(
    `${titleLabel}: ${perfume.name[language]} · €${eur} / ${bgn.toFixed(2)} BGN`
  );

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-3 pb-3 pt-10 sm:items-center sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-label={titleLabel}
      onClick={onClose}
    >
      <div
        className="w-full max-w-md rounded-t-3xl border border-white/15 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-4 shadow-2xl shadow-black/70 sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-2 flex items-start justify-between gap-2">
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-amber-200/80">
              {titleLabel}
            </p>
            <h3 className="mt-1 text-sm font-semibold text-slate-50">
              {perfume.name[language]}
            </h3>
            <p className="mt-1 text-xs text-amber-100">
              €{eur} · {bgn.toFixed(2)} лв
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200 hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-300">{viaLabel}</p>

        <div className="mt-3 flex flex-col gap-2 text-xs font-semibold">
          <a
            href={`${whatsappLink}?text=${message}`}
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center gap-2 rounded-full bg-emerald-400 px-4 py-2 text-black shadow-md shadow-emerald-500/40 active:scale-[0.97]"
          >
            <span>WhatsApp</span>
            <span className="text-[11px] font-normal opacity-80">
              {isBg ? "Натисни за чат" : "Tap to open chat"}
            </span>
          </a>
          <a
            href={`${viberLink}`}
            className="flex items-center justify-center gap-2 rounded-full bg-purple-400 px-4 py-2 text-black shadow-md shadow-purple-500/40 active:scale-[0.97]"
          >
            <span>Viber</span>
            <span className="text-[11px] font-normal opacity-80">
              {isBg ? "Натисни за чат" : "Tap to open chat"}
            </span>
          </a>
          <a
            href={`tel:${phoneNumber.replace(/\s+/g, "")}`}
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-2 text-slate-50 hover:bg-white/5 active:scale-[0.97]"
          >
            <span>{isBg ? "Телефон" : "Call"}</span>
            <span className="text-[11px] font-normal opacity-80">{phoneNumber}</span>
          </a>
        </div>

        <p className="mt-3 text-[10px] leading-relaxed text-slate-400">
          {isBg
            ? "С натискане на бутон за контакт изпращаш заявка, а наш представител ще ти върне съобщение или обаждане за потвърждение."
            : "By tapping a contact button you send us a request and our representative will reply or call you back to confirm the order."}
        </p>
      </div>
    </div>
  );
}

