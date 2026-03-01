import { create } from 'zustand'
import { createJSONStorage, persist } from 'zustand/middleware'

interface ThemeStore {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  toggleTheme: () => void;
}
export const useThemeStore = create(
  persist<ThemeStore>(
    (set) => ({
      theme: 'dark',
      setTheme: (theme) => set({ theme }),
      toggleTheme: () => set((state) => ({ theme: state.theme === 'light' ? 'dark' : 'light' })),
    }),
    {
      name: 'theme-store',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
