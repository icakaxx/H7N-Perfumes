"use client";

import { Perfume, Language } from "@/types";

interface PerfumeDetailsModalProps {
  perfume: Perfume | null;
  language: Language;
  open: boolean;
  onClose: () => void;
  onOrder: (perfume: Perfume) => void;
}

export function PerfumeDetailsModal({
  perfume,
  language,
  open,
  onClose,
  onOrder,
}: PerfumeDetailsModalProps) {
  if (!open || !perfume) return null;

  const isBg = language === "bg";

  const titleLabel = isBg ? "Детайли за аромата" : "Fragrance details";
  const notesTopLabel = isBg ? "Връхни ноти" : "Top notes";
  const notesHeartLabel = isBg ? "Сърдечни ноти" : "Heart notes";
  const notesBaseLabel = isBg ? "Базови ноти" : "Base notes";
  const bestForLabel = isBg ? "Подходящ за" : "Best for";
  const seasonLabel = isBg ? "Сезон" : "Season";
  const performanceLabel = isBg ? "Трайност и проекция" : "Performance";
  const orderLabel = isBg ? "Поръчай" : "Order";

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 px-3 pb-4 pt-10 sm:items-center sm:px-4"
      role="dialog"
      aria-modal="true"
      aria-label={titleLabel}
      onClick={onClose}
    >
      <div
        className="max-h-[90vh] w-full max-w-md overflow-y-auto rounded-3xl border border-white/15 bg-gradient-to-b from-zinc-950 via-black to-zinc-950 p-4 shadow-2xl shadow-black/70"
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
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-slate-200 hover:bg-white/10"
          >
            ✕
          </button>
        </div>

        <p className="text-xs text-slate-300">{perfume.summary[language]}</p>

        <div className="mt-3 space-y-2 text-xs text-slate-200">
          <div>
            <p className="font-semibold text-slate-100">{notesTopLabel}</p>
            <p className="mt-0.5 text-slate-300">
              {perfume.notesTop.map((n) => n[language]).join(", ")}
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{notesHeartLabel}</p>
            <p className="mt-0.5 text-slate-300">
              {perfume.notesHeart.map((n) => n[language]).join(", ")}
            </p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{notesBaseLabel}</p>
            <p className="mt-0.5 text-slate-300">
              {perfume.notesBase.map((n) => n[language]).join(", ")}
            </p>
          </div>
        </div>

        <div className="mt-3 space-y-2 border-t border-white/10 pt-3 text-xs text-slate-200">
          <div>
            <p className="font-semibold text-slate-100">{bestForLabel}</p>
            <p className="mt-0.5 text-slate-300">{perfume.bestFor[language]}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{seasonLabel}</p>
            <p className="mt-0.5 text-slate-300">{perfume.season[language]}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">{performanceLabel}</p>
            <p className="mt-0.5 text-slate-300">{perfume.performance[language]}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-2">
          <button
            type="button"
            onClick={() => onOrder(perfume)}
            className="flex-1 rounded-full bg-amber-400 px-3 py-2 text-center text-xs font-semibold text-black shadow-md shadow-amber-500/40 active:scale-[0.97]"
          >
            {orderLabel}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-full border border-white/15 bg-transparent px-3 py-2 text-center text-xs font-semibold text-slate-100 hover:bg-white/5 active:scale-[0.97]"
          >
            {isBg ? "Затвори" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
}

