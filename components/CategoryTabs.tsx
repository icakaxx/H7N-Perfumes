"use client";

import { GenderFilter, Language } from "@/types";

interface CategoryTabsProps {
  language: Language;
  current: GenderFilter;
  onChange: (filter: GenderFilter) => void;
}

export function CategoryTabs({ language, current, onChange }: CategoryTabsProps) {
  const isBg = language === "bg";

  const tabs: { id: GenderFilter; label: string }[] = [
    { id: "all", label: isBg ? "Всички" : "All" },
    { id: "women", label: isBg ? "Дамски" : "Women" },
    { id: "men", label: isBg ? "Мъжки" : "Men" },
  ];

  return (
    <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1 text-xs text-slate-200">
      {tabs.map((tab) => {
        const active = tab.id === current;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className={`flex-1 rounded-full px-3 py-1.5 transition ${
              active
                ? "bg-amber-400 text-black shadow-sm shadow-amber-500/40"
                : "hover:bg-white/5"
            }`}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}

