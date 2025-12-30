import { Language } from "@/types";

export type Messages = ReturnType<typeof getMessages>;

export function getMessages(lang: Language) {
  const isBg = lang === "bg";

  return {
    lang,
    header: {
      logo: "H7N Perfumes",
      orderCta: isBg ? "Поръчай сега" : "Order now",
      languageBg: "BG",
      languageEn: "EN",
    },
    hero: {
      title: isBg
        ? "Луксозен аромат. Бърза доставка. Цена, която няма да видиш втори път."
        : "Luxury scent. Fast delivery. A price you won't see twice.",
      subtitle: isBg
        ? "Вдъхновени от любими парфюми, с плътно и дълготрайно ухание на достъпна цена."
        : "Inspired by iconic fragrances with rich, long-lasting scent at an accessible price.",
      primaryCta: isBg ? "Виж каталога" : "Browse catalog",
      secondaryCta: isBg ? "Поръчай по WhatsApp" : "Order on WhatsApp",
      trustBullets: isBg
        ? [
            "Ограничена оферта",
            "Висококачествени вдъхновени аромати",
            "Бърза доставка в България",
          ]
        : [
            "Limited-time offer",
            "High-quality inspired scents",
            "Fast delivery within Bulgaria",
          ],
    },
    catalog: {
      title: isBg ? "Каталог парфюми" : "Perfume catalog",
      subtitle: isBg
        ? "Избери дамски или мъжки аромат. Всички по 59 € / 115.39 лв с -50% отстъпка."
        : "Choose a women's or men's fragrance. All at €59 / 115.39 BGN with 50% off.",
    },
    faq: {
      title: isBg ? "Често задавани въпроси" : "Frequently asked questions",
      items: isBg
        ? [
            {
              q: "Оригинални ли са парфюмите?",
              a: "Предлагаме висококачествени парфюми, вдъхновени от популярни маркови аромати. Силни, дълготрайни и с плътна миризма – без да плащаш за лого.",
            },
            {
              q: "Как става доставката?",
              a: "Изпращаме с куриер до офис или до адрес. Обикновено доставката е 1–2 работни дни в зависимост от населеното място.",
            },
            {
              q: "Как мога да поръчам?",
              a: "Натисни бутона 'Поръчай' при избрания парфюм и ще видиш бързи бутони за WhatsApp, Viber или телефонно обаждане.",
            },
          ]
        : [
            {
              q: "Are these original designer perfumes?",
              a: "We offer high-quality fragrances inspired by popular designer scents. Strong, long-lasting and rich – without paying for the big brand logo.",
            },
            {
              q: "How does delivery work?",
              a: "We ship with a courier service to office or home address. Delivery usually takes 1–2 business days within Bulgaria, depending on your location.",
            },
            {
              q: "How can I place an order?",
              a: "Tap the 'Order' button on your chosen perfume to open quick actions for WhatsApp, Viber or a direct phone call.",
            },
          ],
    },
    footer: {
      rights: isBg
        ? "© " + new Date().getFullYear() + " H7N Perfumes. Всички права запазени."
        : "© " + new Date().getFullYear() + " H7N Perfumes. All rights reserved.",
      privacy: isBg ? "Поверителност" : "Privacy",
      terms: isBg ? "Условия" : "Terms",
      limitedOffer: isBg
        ? "Промоционалните цени са валидни за ограничен период или до изчерпване на количествата."
        : "Promotional prices are valid for a limited time or while stocks last.",
    },
  } as const;
}

