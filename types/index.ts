export type Language = "bg" | "en";

export type Gender = "women" | "men";

export type GenderFilter = "all" | Gender;

export type LocalizedString = {
  bg: string;
  en: string;
};

export interface Perfume {
  id: string;
  gender: Gender;
  name: LocalizedString;
  brandLine: string;
  image: string;
  summary: LocalizedString;
  notesTop: LocalizedString[];
  notesHeart: LocalizedString[];
  notesBase: LocalizedString[];
  vibeTags: LocalizedString[];
  bestFor: LocalizedString;
  season: LocalizedString;
  performance: LocalizedString;
  priceEur: number;
  oldPriceEur: number;
}

