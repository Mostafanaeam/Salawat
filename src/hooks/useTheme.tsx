import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

type ThemeMode = "dark" | "light" | "sepia";

interface ThemeContextType {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
  fontSize: number;
  setFontSize: (size: number) => void;
  increaseFontSize: () => void;
  decreaseFontSize: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = "salawat-theme";
const FONT_SIZE_STORAGE_KEY = "salawat-font-size";

const DEFAULT_FONT_SIZE = 18;
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 28;

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setThemeState] = useState<ThemeMode>("dark");
  const [fontSize, setFontSizeState] = useState<number>(DEFAULT_FONT_SIZE);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode | null;
    const storedFontSize = localStorage.getItem(FONT_SIZE_STORAGE_KEY);

    if (storedTheme && ["dark", "light", "sepia"].includes(storedTheme)) {
      setThemeState(storedTheme);
    }

    if (storedFontSize) {
      const parsed = parseFloat(storedFontSize);
      if (!isNaN(parsed) && parsed >= MIN_FONT_SIZE && parsed <= MAX_FONT_SIZE) {
        setFontSizeState(parsed);
      }
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;

    document.documentElement.removeAttribute("data-theme");
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme, mounted]);

  useEffect(() => {
    if (!mounted) return;
    document.documentElement.style.fontSize = `${fontSize}px`;
    localStorage.setItem(FONT_SIZE_STORAGE_KEY, fontSize.toString());
  }, [fontSize, mounted]);

  const setTheme = useCallback((newTheme: ThemeMode) => {
    setThemeState(newTheme);
  }, []);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => {
      if (prev === "dark") return "light";
      if (prev === "light") return "sepia";
      return "dark";
    });
  }, []);

  const setFontSize = useCallback((size: number) => {
    setFontSizeState(Math.max(MIN_FONT_SIZE, Math.min(MAX_FONT_SIZE, size)));
  }, []);

  const increaseFontSize = useCallback(() => {
    setFontSizeState((prev) => Math.min(MAX_FONT_SIZE, prev + 1));
  }, []);

  const decreaseFontSize = useCallback(() => {
    setFontSizeState((prev) => Math.max(MIN_FONT_SIZE, prev - 1));
  }, []);

  if (!mounted) {
    return (
      <ThemeContext.Provider value={{
        theme: "dark",
        setTheme: () => {},
        toggleTheme: () => {},
        fontSize: DEFAULT_FONT_SIZE,
        setFontSize: () => {},
        increaseFontSize: () => {},
        decreaseFontSize: () => {},
      }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  return (
    <ThemeContext.Provider value={{
      theme,
      setTheme,
      toggleTheme,
      fontSize,
      setFontSize,
      increaseFontSize,
      decreaseFontSize,
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};