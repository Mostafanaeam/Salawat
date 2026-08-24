import { useState, useEffect, useCallback } from "react";

export const useSearch = (content: any) => {
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
    for (const category of Object.values(content.categories)) {
      if (category.title?.toLowerCase().includes(lowerQ)) {
        matched.push({ category, items: category.items || [] });
      }
      if (category.verses) {
        const foundVerses = category.verses.filter(
          (v: any) => v.front.toLowerCase().includes(lowerQ) || v.back.toLowerCase().includes(lowerQ)
        );
        if (foundVerses.length > 0) {
          matched.push({ category, verses: foundVerses });
        }
      }
    }
    setResults(matched);
  }, [content]);

  return { query, setQuery, handleSearch, results };
};