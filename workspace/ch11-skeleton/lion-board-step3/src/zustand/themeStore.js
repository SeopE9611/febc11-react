import { create } from "zustand";
import { persist } from "zustand/middleware";

const ThemeStore = (set) => ({
  // isDarkMode: false, // 처음에는 ligth 모드

  isDarkMode: window.matchMedia("(prefers-color-scheme: dark)").matches
    ? true
    : false, // window기반으로 모드설정

  toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })), // !로 반전시키기
});

const useThemeStore = create(
  persist(ThemeStore, {
    name: "themeStore",
  })
);

export default useThemeStore;
