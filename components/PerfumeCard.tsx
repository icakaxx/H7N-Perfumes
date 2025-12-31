"use client";

import Image from "next/image";
import { Perfume, Language } from "@/types";
import { getPricePair } from "@/utils/pricing";

interface PerfumeCardProps {
  perfume: Perfume;
  language: Language;
  onOrder: (perfume: Perfume) => void;
  onDetails: (perfume: Perfume) => void;
}

export function PerfumeCard({ perfume, language, onOrder, onDetails }: PerfumeCardProps) {
  const { eur, bgn } = getPricePair(perfume.priceEur);
  const { eur: oldEur, bgn: oldBgn } = getPricePair(perfume.oldPriceEur);

  const isBg = language === "bg";

  const genderLabel = perfume.gender === "women" ? (isBg ? "Дамски" : "Women") : isBg ? "Мъжки" : "Men";

  const orderLabel = isBg ? "Поръчай" : "Order";
  const detailsLabel = isBg ? "Детайли" : "Details";

  const discountLabel = isBg ? "-50% промо" : "-50% offer";

  const noteChips = [
    ...perfume.notesTop,
    ...perfume.notesHeart,
    ...perfume.notesBase,
  ].slice(0, 5);

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition-shadow">
      <button
        type="button"
        onClick={() => onDetails(perfume)}
        className="group relative block overflow-hidden"
        aria-label={perfume.name[language]}
      >
        <div className="aspect-[4/5] w-full bg-gray-100 relative overflow-hidden">
          <Image
            src={perfume.image}
            alt={perfume.name[language]}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        <div className="pointer-events-none absolute left-2 top-2 rounded-full bg-white/90 backdrop-blur-sm px-2 py-1 text-[11px] font-medium text-slate-700 ring-1 ring-gray-200">
          {genderLabel}
        </div>
        <div className="pointer-events-none absolute right-2 top-2 rounded-full bg-emerald-400 px-2 py-1 text-[11px] font-semibold text-white shadow-md shadow-emerald-500/40">
          {discountLabel}
        </div>
      </button>

      <div className="flex flex-1 flex-col gap-2 p-3">
        <div>
          <h3 className="text-sm font-semibold text-slate-900">
            {perfume.name[language]}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-slate-600">
            {perfume.summary[language]}
          </p>
        </div>

        <div className="flex flex-wrap gap-1">
          {noteChips.map((note, index) => (
            <span
              key={note[language] + index}
              className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] text-slate-700"
            >
              {note[language]}
            </span>
          ))}
          {perfume.vibeTags.slice(0, 2).map((tag) => (
            <span
              key={tag[language]}
              className="rounded-full bg-rose-50 px-2 py-0.5 text-[10px] text-rose-700"
            >
              {tag[language]}
            </span>
          ))}
        </div>

        <div className="mt-1 flex items-end justify-between gap-2">
          <div>
            <div className="flex items-baseline gap-1 text-sm font-semibold text-rose-600">
              <span>€{eur}</span>
              <span className="text-xs text-rose-600/80">· {bgn.toFixed(2)} лв</span>
            </div>
            <div className="flex items-baseline gap-1 text-[11px] text-slate-400">
              <span className="line-through">€{oldEur}</span>
              <span className="line-through">· {oldBgn.toFixed(2)} лв</span>
            </div>
          </div>
        </div>

        <div className="mt-2 flex gap-2">
          <button
            type="button"
            onClick={() => onOrder(perfume)}
            className="flex-1 rounded-full bg-gradient-to-r from-rose-400 to-rose-500 px-3 py-2 text-center text-xs font-semibold text-white shadow-md shadow-rose-500/30 active:scale-[0.97]"
          >
            {orderLabel}
          </button>
          <button
            type="button"
            onClick={() => onDetails(perfume)}
            className="flex-1 rounded-full border border-gray-300 bg-transparent px-3 py-2 text-center text-xs font-semibold text-slate-700 hover:bg-gray-50 active:scale-[0.97]"
          >
            {detailsLabel}
          </button>
        </div>
      </div>
    </article>
  );
}

