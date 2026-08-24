import { createContext, useContext, useState, useCallback } from "react";

interface SearchContextType {
  query: string;
  setQuery: (q: string) => void;
  handleSearch: (q: string) => void;
  results: any[];
  content: any;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = (content?: any) => {
  const context = useContext(SearchContext);
  if (!context && !content) {
    throw new Error("useSearch must be used within SearchProvider or with content parameter");
  }
  return context || { query: "", setQuery: () => {}, handleSearch: () => {}, results: [], content };
};

export const SearchProvider = ({ children, content }: { children: React.ReactNode; content: any }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = useCallback((q: string) => {
    setQuery(q);
    const lowerQ = q.toLowerCase();
    if (!q.trim()) {
      setResults([]);
      return;
    }

    const matched: any[] = [];
    for (const category of Object.values(content.categories || {})) {
      const cat = category as any;
      if (cat.title?.toLowerCase().includes(lowerQ)) {
        matched.push({ category, items: cat.items || [] });
      }
      if (cat.verses) {
        const foundVerses = cat.verses.filter(
          (v: any) => v.front.toLowerCase().includes(lowerQ) || v.back.toLowerCase().includes(lowerQ)
        );
        if (foundVerses.length > 0) {
          matched.push({ category, verses: foundVerses });
        }
      }
    }
    setResults(matched);
  }, [content]);

  return (
    <SearchContext.Provider value={{ query, setQuery, handleSearch, results, content }}>
      {children}
    </SearchContext.Provider>
  );
};