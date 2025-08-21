import { create } from 'zustand';
import { useSearchParams } from 'react-router-dom';

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
      const { backend } = await import('../declarations/backend');
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

