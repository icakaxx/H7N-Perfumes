export const EUR_TO_BGN = 1.95583;

export const PRICE_NEW_EUR = 59;
export const PRICE_OLD_EUR = 119;

// Hardcoded BGN equivalents as requested
export const PRICE_NEW_BGN = 115.39;
export const PRICE_OLD_BGN = 232.74;

export const BUNDLE_PRICE_BGN = 180;
export const BUNDLE_PRICE_EUR = 92.03;

export function eurToBgn(eur: number): number {
  return Math.round(eur * EUR_TO_BGN * 100) / 100;
}

export function bgnToEur(bgn: number): number {
  return Math.round((bgn / EUR_TO_BGN) * 100) / 100;
}

export function getPricePair(eur: number) {
  if (eur === PRICE_NEW_EUR) {
    return { eur: PRICE_NEW_EUR, bgn: PRICE_NEW_BGN };
  }
  if (eur === PRICE_OLD_EUR) {
    return { eur: PRICE_OLD_EUR, bgn: PRICE_OLD_BGN };
  }
  const bgn = eurToBgn(eur);
  return { eur, bgn };
}

