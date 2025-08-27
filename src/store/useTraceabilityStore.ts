import { create } from 'zustand';
import { useSearchParams } from 'react-router-dom';
import { createActor } from '../declarations/backend';

// Obtener el canister ID real
const canisterId = process.env.CANISTER_ID_BACKEND || "uxrrr-q7777-77774-qaaaq-cai";

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
  fetchData: (gtin: string) => Promise<void>;
}

export const useTraceabilityStore = create<TraceabilityStore>((set) => ({
  data: null,
  isLoading: false,
  fetchData: async (gtin: string) => {
    console.log('init gtin:', gtin);
    set({ isLoading: true });
    try {
    const backend = createActor(canisterId);
      console.log('backend imported:', backend);
     const res = await backend.getInfo(gtin);
      if (!res || res.length === 0) throw new Error("No data found");
      set({ data: res[0] });
      console.log(res, 'res');
    } catch (error) {
      console.error('Error fetching product data:', error);
    } finally {
      set({ isLoading: false });
    }
  }
}));

