import { createContext, useContext, useState } from "react";

const SearchContext = createContext<string>("");

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
};

export const SearchProvider = ({ children }: { children: React.ReactNode }) => {
  const [query, setQuery] = useState<string>("");

  return (
    <SearchContext.Provider value={query}>
      {children}
    </SearchContext.Provider>
  );
};

export const useFilteredContent = (content: any[]) => {
  const query = useSearch();
  if (!query.trim()) {
    return content;
  }
  const lowerQuery = query.toLowerCase();
  return content.filter(
    (item) =>
      (item.title && item.title.toLowerCase().includes(lowerQuery)) ||
      (item.text && item.text.toLowerCase().includes(lowerQuery)) ||
      (item.titleAr && item.titleAr.toLowerCase().includes(lowerQuery)) ||
      (item.content && item.content.toLowerCase().includes(lowerQuery))
  );
};