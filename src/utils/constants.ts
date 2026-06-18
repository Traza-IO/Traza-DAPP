export const DEFAULT_GTIN = '07750530110016';
export const DEMO_LOT = 'OP1925';
export const DEMO_SERIAL = '1';

export const DEFAULT_PATH = `/01/${DEFAULT_GTIN}/10/${DEMO_LOT}/21/${DEMO_SERIAL}`;

export const TABS = ['product', 'traceability', 'sustainability', 'blockchain', 'share'] as const;
export type Tab = typeof TABS[number];
export const DEFAULT_TAB: Tab = 'product';
