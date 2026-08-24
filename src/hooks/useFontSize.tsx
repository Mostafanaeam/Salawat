import { createContext, useContext, useState, useEffect } from "react";

const FontSizeContext = createContext<number>(16);

export const useFontSize = () => {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error("useFontSize must be used within FontSizeProvider");
  }
  return context;
};

export const FontSizeProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontSize, setFontSize] = useState<number>(16);

  useEffect(() => {
    const stored = localStorage.getItem("salawat-fontSize");
    if (stored) {
      setFontSize(parseFloat(stored));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("salawat-fontSize", fontSize.toString());
    document.body.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  return (
    <FontSizeContext.Provider value={fontSize}>
      {children}
    </FontSizeContext.Provider>
  );
};