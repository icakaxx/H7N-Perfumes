"use client";

import { Language } from "@/types";
import { BUNDLE_PRICE_BGN, BUNDLE_PRICE_EUR } from "@/utils/pricing";

interface PromoMarqueeProps {
  language: Language;
}

export function PromoMarquee({ language }: PromoMarqueeProps) {
  const isBg = language === "bg";

  const text = isBg
    ? `Вземи 1 дамски + 1 мъжки за ${BUNDLE_PRICE_BGN} лв / €${BUNDLE_PRICE_EUR.toFixed(
        2
      )}`
    : `Buy 1 women + 1 men for ${BUNDLE_PRICE_BGN} BGN / €${BUNDLE_PRICE_EUR.toFixed(
        2
      )}`;

  return (
    <section
      aria-label={isBg ? "Промо комплект" : "Bundle promotion"}
      className="relative mt-4 overflow-hidden rounded-2xl border border-rose-200 bg-gradient-to-r from-rose-50 via-rose-50/50 to-rose-50"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.5),_transparent_55%)] opacity-50" />

      <div className="relative flex items-center gap-4 px-3 py-3 sm:px-4">
        <div className="hidden h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl border border-rose-200 bg-white text-[10px] text-slate-700 sm:flex">
          <span>{isBg ? "Дамски" : "Women"}</span>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee items-center gap-6 whitespace-nowrap motion-reduce:animate-none">
              {Array.from({ length: 3 }).map((_, index) => (
                <p
                  key={index}
                  className="flex items-center gap-3 text-xs font-medium text-rose-900 sm:text-sm"
                >
                  <span className="rounded-full bg-white px-3 py-1 text-[11px] text-rose-700 font-semibold">
                    ПРОМОЦИЯ! САМО СЕГА!
                  </span>
                  <span>{text}</span>
                  <span className="text-[11px] text-rose-700/70">
                    {isBg ? "Спести повече, комбинирай дамски и мъжки." : "Save more when you pair women's and men's scents."}
                  </span>
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl border border-rose-200 bg-white text-[10px] text-slate-700 sm:flex">
          <span>{isBg ? "Мъжки" : "Men"}</span>
        </div>
      </div>
    </section>
  );
}

