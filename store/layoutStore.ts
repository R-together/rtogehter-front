import { create } from "zustand";

interface LayoutStore {
  isMobile: boolean;
  setIsMobile: (status: boolean) => void;
}

export const useLayoutStore = create<LayoutStore>()((set) => ({
  isMobile: false,
  setIsMobile: (status) => set(() => ({ isMobile: status })),
}));
