import { create } from 'zustand';
import { createActor } from '../declarations/backend';
import { DEFAULT_GTIN, DEFAULT_TAB, Tab } from '../utils/constants';

// Obtener el canister ID real
const canisterId =
  process.env.CANISTER_ID_BACKEND || 'uxrrr-q7777-77774-qaaaq-cai';

// Crear el actor

interface Ttips {
  description: string;
  list: string[];
}

interface ProductData {
  description_model?: any;
  information_product?: any;
  materials?: any;
  packing?: any;
  care?: any;
  tips?: Ttips[];
  [key: string]: any;
}

interface TraceabilityStore {
  data: ProductData | null;
  isLoading: boolean;
  fetchData: (gtin?: string) => Promise<void>;
  error: string | null;
  notFound: boolean;
  activeTab: Tab;
  setActiveTab: (tab: Tab) => void;
}

export const useTraceabilityStore = create<TraceabilityStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  notFound: false,
  activeTab: DEFAULT_TAB,
  setActiveTab: (tab) => set({ activeTab: tab }),
  fetchData: async (gtin?: string) => {
    set({ isLoading: true, notFound: false, error: null });

    let currentGtin = gtin;
    if (!currentGtin) {
      currentGtin = localStorage.getItem('gtin') || DEFAULT_GTIN;
    }
    if (!currentGtin) throw new Error('No gtin found');

    // El backend guarda los GTIN sin normalizar: algunos están con 14 dígitos y
    // otros con 13. La URL siempre lleva el GTIN GS1 de 14 dígitos (AI 01), así
    // que si el primer lookup viene vacío y el GTIN empieza con `0`, se reintenta
    // con la versión sin el cero inicial.
    const candidates = [currentGtin];
    if (currentGtin.length === 14 && currentGtin.startsWith('0')) {
      candidates.push(currentGtin.slice(1));
    }

    try {
      const backend = createActor(canisterId);
      let info: any = null;
      let usedGtin = candidates[0];
      for (const candidate of candidates) {
        const res = await backend.getInfo(candidate);
        if (res && res.length > 0) {
          info = res[0];
          usedGtin = candidate;
          break;
        }
      }
      if (!info) {
        set({ notFound: true, data: null });
        return;
      }
      const colorBrand = await backend.getColorBrand(usedGtin);
      set({ data: { ...info, colorBrand: colorBrand } });
    } catch (error) {
      console.error('Error fetching product data:', error);
      set({ error: 'Error fetching product data' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
