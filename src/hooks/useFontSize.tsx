import { createContext, useContext, useState, useEffect } from "react";

interface FontSizeContextType {
  fontSize: number;
  increaseSize: () => void;
  decreaseSize: () => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(undefined);

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

  const increaseSize = () => setFontSize((prev) => Math.min(prev + 1, 20));
  const decreaseSize = () => setFontSize((prev) => Math.max(prev - 1, 14));

  return (
    <FontSizeContext.Provider value={{ fontSize, increaseSize, decreaseSize }}>
      {children}
    </FontSizeContext.Provider>
  );
};