"use client";

import { Perfume, Language } from "@/types";
import { PerfumeCard } from "./PerfumeCard";
import { PromoMarquee } from "./PromoMarquee";

interface PerfumeGridProps {
  perfumes: Perfume[];
  language: Language;
  onOrder: (perfume: Perfume) => void;
  onDetails: (perfume: Perfume) => void;
}

export function PerfumeGrid({ perfumes, language, onOrder, onDetails }: PerfumeGridProps) {
  return (
    <div className="mt-4 space-y-4 sm:space-y-0">
      {/* Desktop grid */}
      <div className="hidden grid-cols-1 gap-4 sm:grid sm:grid-cols-2 lg:grid-cols-3">
        {perfumes.map((perfume) => (
          <PerfumeCard
            key={perfume.id}
            perfume={perfume}
            language={language}
            onOrder={onOrder}
            onDetails={onDetails}
          />
        ))}
      </div>

      {/* Mobile: cards with promo marquee between each */}
      <div className="space-y-4 sm:hidden">
        {perfumes.map((perfume, index) => (
          <div key={perfume.id} className="space-y-4">
            <PerfumeCard
              perfume={perfume}
              language={language}
              onOrder={onOrder}
              onDetails={onDetails}
            />
            {index < perfumes.length - 1 && (
              <div className="px-1">
                <PromoMarquee language={language} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

