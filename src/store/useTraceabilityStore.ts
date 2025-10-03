import { create } from 'zustand';
import { createActor } from '../declarations/backend';

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
}

export const useTraceabilityStore = create<TraceabilityStore>((set) => ({
  data: null,
  isLoading: false,
  error: null,
  fetchData: async (gtin?: string) => {
    set({ isLoading: true });
    
    // Obtener gtin del parámetro o del localStorage como fallback
    let currentGtin = gtin;
    if (!currentGtin) {
      currentGtin = localStorage.getItem('gtin') || '17751234567890';
    }
    
    if (!currentGtin) throw new Error('No gtin found');
    
    try {
      const backend = createActor(canisterId);
      const res = await backend.getInfo(currentGtin);
      if (!res || res.length === 0) throw new Error('No data found');
      set({ data: res[0] });
      console.log(res[0], 'res');
    } catch (error) {
      console.error('Error fetching product data:', error);
      set({ error: 'Error fetching product data' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
