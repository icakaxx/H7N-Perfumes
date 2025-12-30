"use client";

import { Perfume, Language } from "@/types";
import { PerfumeCard } from "./PerfumeCard";

interface PerfumeGridProps {
  perfumes: Perfume[];
  language: Language;
  onOrder: (perfume: Perfume) => void;
  onDetails: (perfume: Perfume) => void;
}

export function PerfumeGrid({ perfumes, language, onOrder, onDetails }: PerfumeGridProps) {
  return (
    <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
  );
}

