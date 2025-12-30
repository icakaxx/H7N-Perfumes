import { Perfume } from "../types";
import { PRICE_NEW_EUR, PRICE_OLD_EUR } from "../utils/pricing";

// Image URLs from Supabase storage
const IMAGE_BASE = "https://ndcgnswvhpnffvbzqcrn.supabase.co/storage/v1/object/public/Perfumes%20Site/";

export const perfumes: Perfume[] = [
  {
    id: "fame",
    gender: "women",
    name: {
      bg: "Fame (Paco Rabanne)",
      en: "Fame (Paco Rabanne)",
    },
    brandLine: "Paco Rabanne",
    image: `${IMAGE_BASE}girl1.jpg`,
    summary: {
      bg: "Модерен, игрив и кремообразно сладък аромат, който подчертава женствеността и оставя запомняща се следа.",
      en: "Modern, playful and creamy-sweet fragrance that highlights femininity and leaves a memorable trail.",
    },
    notesTop: [
      { bg: "манго", en: "mango" },
      { bg: "бергамот", en: "bergamot" },
    ],
    notesHeart: [{ bg: "жасмин", en: "jasmine" }],
    notesBase: [
      { bg: "сандалово дърво", en: "sandalwood" },
      { bg: "ванилия / кремообразен амбър", en: "vanilla / creamy amber" },
    ],
    vibeTags: [
      { bg: "игрив", en: "playful" },
      { bg: "сладък", en: "sweet" },
      { bg: "кремообразен", en: "creamy" },
    ],
    bestFor: {
      bg: "Подходящ за вечери, срещи и партита; стои добре през цялата година.",
      en: "Perfect for evenings, dates and parties; works beautifully all year round.",
    },
    season: {
      bg: "Целогодишен аромат с леко по-сладко присъствие за по-хладно време.",
      en: "All-year fragrance with a creamy sweetness that shines in cooler weather.",
    },
    performance: {
      bg: "Добра трайност и осезаемо присъствие, без да бъде натрапчив.",
      en: "Good longevity with noticeable presence without being overwhelming.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "bombshell",
    gender: "women",
    name: {
      bg: "Victoria's Secret Bombshell",
      en: "Victoria's Secret Bombshell",
    },
    brandLine: "Victoria's Secret",
    image: `${IMAGE_BASE}girl2.jpg`,
    summary: {
      bg: "Светъл, секси и свеж плодово-флорален аромат, който усещаш като чист душ и хубаво настроение.",
      en: "Bright, sexy and fresh fruity-floral scent that feels like a clean shower and good mood in a bottle.",
    },
    notesTop: [
      { bg: "цитруси", en: "citrus" },
      { bg: "пасифлора", en: "passionfruit" },
    ],
    notesHeart: [
      { bg: "божур", en: "peony" },
      { bg: "луксозни цветя", en: "orchid-like florals" },
    ],
    notesBase: [
      { bg: "мек мускус", en: "soft musk" },
      { bg: "леки дървесни нотки", en: "light woods" },
    ],
    vibeTags: [
      { bg: "свеж", en: "fresh" },
      { bg: "флорален", en: "floral" },
      { bg: "плодов", en: "fruity" },
    ],
    bestFor: {
      bg: "Подходящ за всеки ден, офис и неангажиращи срещи – дава чисто и женствено излъчване.",
      en: "Great for everyday wear, office and casual dates – gives a clean, feminine impression.",
    },
    season: {
      bg: "Най-добре стои през пролет и лято, когато търсиш лек и освежаващ аромат.",
      en: "Shines in spring and summer when you want something light and refreshing.",
    },
    performance: {
      bg: "Умерена трайност с въздушно, леко излъчване около теб.",
      en: "Moderate longevity with an airy, light projection around you.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "coco-mademoiselle",
    gender: "women",
    name: {
      bg: "Coco Mademoiselle (Chanel)",
      en: "Coco Mademoiselle (Chanel)",
    },
    brandLine: "Chanel",
    image: `${IMAGE_BASE}girl3.jpg`,
    summary: {
      bg: "Елегантен и изискан аромат с цитруси, роза и топъл пачули – модерна класика за уверени жени.",
      en: "Elegant and refined scent with citrus, rose and warm patchouli – a modern classic for confident women.",
    },
    notesTop: [
      { bg: "портокал", en: "orange" },
      { bg: "бергамот", en: "bergamot" },
    ],
    notesHeart: [
      { bg: "роза", en: "rose" },
      { bg: "жасмин", en: "jasmine" },
    ],
    notesBase: [
      { bg: "пачули", en: "patchouli" },
      { bg: "ветивер", en: "vetiver" },
      { bg: "ванилия / мускус", en: "vanilla / musk" },
    ],
    vibeTags: [
      { bg: "елегантен", en: "elegant" },
      { bg: "класен", en: "classy" },
      { bg: "цитрусов", en: "citrusy" },
    ],
    bestFor: {
      bg: "Перфектен като подписен аромат – от офис до вечерно излизане.",
      en: "Perfect as a signature scent – from office days to evening outings.",
    },
    season: {
      bg: "Стои страхотно целогодишно, с особено присъствие през есен и зима.",
      en: "Works beautifully all year, with extra character in autumn and winter.",
    },
    performance: {
      bg: "Силна трайност и фина, но отчетлива парфюмна пътека.",
      en: "Strong longevity with a refined yet noticeable trail.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "baccarat-rouge-540",
    gender: "women",
    name: {
      bg: "Baccarat Rouge 540 (MFK)",
      en: "Baccarat Rouge 540 (MFK)",
    },
    brandLine: "Maison Francis Kurkdjian",
    image: `${IMAGE_BASE}girl4.jpg`,
    summary: {
      bg: "Сладък кехлибарен аромат, напомнящ кристална захар с дървесна топлина – изключително разпознаваем.",
      en: "Sweet amber fragrance with a ‘crystal sugar’ feel and warm woods – instantly recognizable.",
    },
    notesTop: [
      { bg: "шафран", en: "saffron" },
      { bg: "жасмин", en: "jasmine" },
    ],
    notesHeart: [{ bg: "кехлибарено дърво", en: "amberwood accord" }],
    notesBase: [
      { bg: "кедър", en: "cedar" },
      { bg: "смола от ела", en: "fir resin" },
    ],
    vibeTags: [
      { bg: "кехлибарен", en: "ambery" },
      { bg: "сладък", en: "sweet" },
      { bg: "луксозен", en: "luxurious" },
    ],
    bestFor: {
      bg: "Идеален за вечери, специални поводи и моменти, в които искаш комплименти.",
      en: "Ideal for evenings, special occasions and moments when you want compliments.",
    },
    season: {
      bg: "Най-силен е в по-хладно време – есен, зима и по-хладни вечери.",
      en: "Performs best in cooler weather – autumn, winter and chilly evenings.",
    },
    performance: {
      bg: "Много силна трайност и осезаем шлейф, който остава дълго.",
      en: "Very strong longevity with a bold projection that lasts for hours.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "scandal",
    gender: "women",
    name: {
      bg: "Scandal (Jean Paul Gaultier)",
      en: "Scandal (Jean Paul Gaultier)",
    },
    brandLine: "Jean Paul Gaultier",
    image: `${IMAGE_BASE}girl5.jpg`,
    summary: {
      bg: "Смел, медено-сладък гурме аромат, който привлича внимание и носи нощен, съблазнителен характер.",
      en: "Bold honeyed gourmand fragrance that draws attention and feels seductive and night-ready.",
    },
    notesTop: [
      { bg: "кървава портокал / цитрус", en: "blood orange / citrus" },
    ],
    notesHeart: [
      { bg: "мед", en: "honey" },
      { bg: "бели цветя", en: "white florals" },
    ],
    notesBase: [
      { bg: "пачули", en: "patchouli" },
      { bg: "карамелен нюанс", en: "caramel-like sweetness" },
    ],
    vibeTags: [
      { bg: "съблазнителен", en: "seductive" },
      { bg: "меден", en: "honeyed" },
      { bg: "гурме", en: "gourmand" },
    ],
    bestFor: {
      bg: "Най-подходящ за вечерни излизания, клуб и специални поводи.",
      en: "Best for nights out, clubbing and special occasions.",
    },
    season: {
      bg: "Изгрява най-силно през есен и зима.",
      en: "Shines the most in autumn and winter.",
    },
    performance: {
      bg: "Силен, запомнящ се аромат с дълга трайност.",
      en: "Strong, attention-grabbing scent with long-lasting performance.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "good-girl",
    gender: "women",
    name: {
      bg: "Good Girl (Carolina Herrera)",
      en: "Good Girl (Carolina Herrera)",
    },
    brandLine: "Carolina Herrera",
    image: `${IMAGE_BASE}girl6.jpg`,
    summary: {
      bg: "Сладко-пикантен, кремообразен и съблазнителен аромат с прочутото ‘обувка на висок ток’ усещане.",
      en: "Sweet, spicy, creamy and seductive fragrance with that famous high-heels energy.",
    },
    notesTop: [
      { bg: "бадем", en: "almond" },
      { bg: "кафе", en: "coffee" },
    ],
    notesHeart: [
      { bg: "жасмин", en: "jasmine" },
      { bg: "тубероза", en: "tuberose" },
    ],
    notesBase: [
      { bg: "тонка", en: "tonka bean" },
      { bg: "какао", en: "cacao" },
      { bg: "ванилия", en: "vanilla" },
    ],
    vibeTags: [
      { bg: "съблазнителен", en: "sexy" },
      { bg: "сладък", en: "sweet" },
      { bg: "пикантен", en: "spicy" },
    ],
    bestFor: {
      bg: "Перфектен за срещи, вечери и специални поводи.",
      en: "Perfect for dates, evenings and special occasions.",
    },
    season: {
      bg: "Стои най-добре през есен и зима.",
      en: "Performs best in autumn and winter.",
    },
    performance: {
      bg: "Силна трайност и секси шлейф.",
      en: "Strong longevity with a sexy trail.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "egoiste",
    gender: "men",
    name: {
      bg: "Chanel Égoïste",
      en: "Chanel Égoïste",
    },
    brandLine: "Chanel",
    image: `${IMAGE_BASE}man1.jpg`,
    summary: {
      bg: "Класически, уверен и дървесно-пикантен аромат с истинска 'джентълменска' енергия.",
      en: "Classic, confident woody-spicy fragrance with true gentleman energy.",
    },
    notesTop: [
      { bg: "кориандър / подправки", en: "coriander / spice" },
      { bg: "розово дърво", en: "rosewood vibe" },
    ],
    notesHeart: [
      { bg: "роза", en: "rose" },
      { bg: "карамфилова подправка", en: "carnation-like spice" },
    ],
    notesBase: [
      { bg: "сандалово дърво", en: "sandalwood" },
      { bg: "ванилия", en: "vanilla" },
      { bg: "амбър", en: "amber" },
    ],
    vibeTags: [
      { bg: "класически", en: "classic" },
      { bg: "дървесен", en: "woody" },
      { bg: "подправков", en: "spicy" },
    ],
    bestFor: {
      bg: "Подходящ за елегантно ежедневие, вечери и срещи.",
      en: "Great for elegant daily wear, dinners and dates.",
    },
    season: {
      bg: "Най-добър през есен и зима.",
      en: "Best in autumn and winter.",
    },
    performance: {
      bg: "Добра трайност и премерена проекция.",
      en: "Good longevity with tasteful projection.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "tobacco-vanille",
    gender: "men",
    name: {
      bg: "Tom Ford Tobacco Vanille",
      en: "Tom Ford Tobacco Vanille",
    },
    brandLine: "Tom Ford",
    image: `${IMAGE_BASE}man2.jpg`,
    summary: {
      bg: "Богат аромат на тютюн и сладка ванилия – луксозен, плътен и топъл.",
      en: "Rich blend of tobacco and sweet vanilla – luxurious, dense and warm.",
    },
    notesTop: [
      { bg: "тютюнев лист", en: "tobacco leaf" },
      { bg: "подправки", en: "spicy notes" },
    ],
    notesHeart: [
      { bg: "тонка", en: "tonka bean" },
      { bg: "какао", en: "cacao" },
    ],
    notesBase: [
      { bg: "ванилия", en: "vanilla" },
      { bg: "сушени плодове", en: "dried fruits" },
      { bg: "дървесни нотки", en: "woods" },
    ],
    vibeTags: [
      { bg: "тютюнев", en: "tobacco" },
      { bg: "ванилов", en: "vanillic" },
      { bg: "луксозен", en: "luxurious" },
    ],
    bestFor: {
      bg: "Идеален за студено време, вечери и официални събития.",
      en: "Ideal for cold weather, evenings and formal events.",
    },
    season: {
      bg: "Най-силен през есен и зима.",
      en: "At its best in autumn and winter.",
    },
    performance: {
      bg: "Много силен и дълготраен аромат.",
      en: "Very strong and long-lasting fragrance.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "bitter-peach",
    gender: "men",
    name: {
      bg: "Tom Ford Bitter Peach",
      en: "Tom Ford Bitter Peach",
    },
    brandLine: "Tom Ford",
    image: `${IMAGE_BASE}man3.jpg`,
    summary: {
      bg: "Сочна праскова с лек алкохолен нюанс – сладко, дръзко и провокативно излъчване.",
      en: "Juicy peach with a boozy twist – sweet, bold and provocative.",
    },
    notesTop: [
      { bg: "праскова", en: "peach" },
      { bg: "кървава портокал", en: "blood orange" },
    ],
    notesHeart: [
      { bg: "ром / коняк", en: "rum / cognac nuance" },
      { bg: "жасмин", en: "jasmine" },
    ],
    notesBase: [
      { bg: "пачули", en: "patchouli" },
      { bg: "ванилия / тонка", en: "vanilla / tonka" },
      { bg: "дървесни нотки", en: "woods" },
    ],
    vibeTags: [
      { bg: "плодов", en: "fruity" },
      { bg: "дръзък", en: "bold" },
      { bg: "провокативен", en: "provocative" },
    ],
    bestFor: {
      bg: "Подходящ за нощни излизания и моменти, в които искаш да те забележат.",
      en: "Great for nights out and moments when you want to stand out.",
    },
    season: {
      bg: "Носи се отлично през пролет и есен.",
      en: "Wears beautifully in spring and autumn.",
    },
    performance: {
      bg: "Силен и добре забележим аромат.",
      en: "Strong scent with a noticeable trail.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
  {
    id: "phantom",
    gender: "men",
    name: {
      bg: "Phantom (Paco Rabanne)",
      en: "Phantom (Paco Rabanne)",
    },
    brandLine: "Paco Rabanne",
    image: `${IMAGE_BASE}man4.jpg`,
    summary: {
      bg: "Модерен свежо-сладък аромат с енергично и леко кремообразно усещане – лесен за харесване.",
      en: "Modern fresh-sweet fragrance with energetic and slightly creamy feel – very easy to like.",
    },
    notesTop: [
      { bg: "лимонова кора", en: "lemon zest" },
      { bg: "лавандула", en: "lavender" },
    ],
    notesHeart: [
      { bg: "зелена ябълка / земни нюанси", en: "apple / earthy nuance" },
      { bg: "леки опушени нотки", en: "light smoky hints" },
    ],
    notesBase: [
      { bg: "ванилия", en: "vanilla" },
      { bg: "дървесни акорди", en: "woods" },
    ],
    vibeTags: [
      { bg: "свеж", en: "fresh" },
      { bg: "сладък", en: "sweet" },
      { bg: "модерен", en: "modern" },
    ],
    bestFor: {
      bg: "Чудесен за ежедневие, неформални срещи и дори от фитнес до среща.",
      en: "Great for daily wear, casual meetups and even gym-to-date situations.",
    },
    season: {
      bg: "Гъвкав аромат за почти всеки сезон.",
      en: "Versatile fragrance for almost any season.",
    },
    performance: {
      bg: "Добра трайност и приятен, непретенциозен шлейф.",
      en: "Good longevity with a pleasant, crowd-pleasing trail.",
    },
    priceEur: PRICE_NEW_EUR,
    oldPriceEur: PRICE_OLD_EUR,
  },
];
