"use client";

import { useMemo, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PromoMarquee } from "@/components/PromoMarquee";
import { CategoryTabs } from "@/components/CategoryTabs";
import { PerfumeGrid } from "@/components/PerfumeGrid";
import { PerfumeDetailsModal } from "@/components/PerfumeDetailsModal";
import { OrderModal } from "@/components/OrderModal";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { perfumes } from "@/data/perfumes";
import { getMessages } from "@/i18n/messages";
import { Perfume, Language, GenderFilter } from "@/types";

const WHATSAPP_LINK = "https://wa.me/359000000000";
const VIBER_LINK = "viber://chat?number=%2B359000000000";
const PHONE_NUMBER = "+359 00 000 000";

export default function Home() {
  const [language, setLanguage] = useState<Language>("bg");
  const [genderFilter, setGenderFilter] = useState<GenderFilter>("all");
  const [detailsPerfume, setDetailsPerfume] = useState<Perfume | null>(null);
  const [orderPerfume, setOrderPerfume] = useState<Perfume | null>(null);

  const messages = useMemo(() => getMessages(language), [language]);

  const filteredPerfumes = useMemo(() => {
    if (genderFilter === "all") return perfumes;
    return perfumes.filter((p: Perfume) => p.gender === genderFilter);
  }, [genderFilter]);

  const handleOrder = (perfume: Perfume) => {
    setOrderPerfume(perfume);
  };

  const handleDetails = (perfume: Perfume) => {
    setDetailsPerfume(perfume);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-slate-950 to-neutral-950 text-slate-50 font-sans">
      <div className="mx-auto max-w-6xl px-4 pb-16">
        <Header
          language={language}
          onLanguageChange={setLanguage}
          messages={messages}
          whatsappLink={WHATSAPP_LINK}
        />
        <main className="space-y-8 pb-8 pt-20 sm:pt-24">
          <Hero messages={messages} />
          <PromoMarquee language={language} />

          <section id="catalog" className="space-y-4">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                  {messages.catalog.title}
                </h2>
                <p className="mt-1 text-xs text-slate-300 sm:text-sm">
                  {messages.catalog.subtitle}
                </p>
              </div>
            </div>

            <CategoryTabs
              language={language}
              current={genderFilter}
              onChange={setGenderFilter}
            />

            <PerfumeGrid
              language={language}
              perfumes={filteredPerfumes}
              onOrder={handleOrder}
              onDetails={handleDetails}
            />
          </section>

          <FAQ language={language} messages={messages} />
        </main>

        <Footer language={language} messages={messages} />
      </div>

      <PerfumeDetailsModal
        language={language}
        perfume={detailsPerfume}
        open={!!detailsPerfume}
        onClose={() => setDetailsPerfume(null)}
        onOrder={handleOrder}
      />

      <OrderModal
        language={language}
        perfume={orderPerfume}
        open={!!orderPerfume}
        onClose={() => setOrderPerfume(null)}
        whatsappLink={WHATSAPP_LINK}
        viberLink={VIBER_LINK}
        phoneNumber={PHONE_NUMBER}
      />
    </div>
  );
}

