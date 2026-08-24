import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext<string | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const stored = localStorage.getItem("salawat-theme");
    if (stored) {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("salawat-theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};