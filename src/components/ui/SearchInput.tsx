"use client";

import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useState } from "react";

interface SearchInputProps {
  placeholder?: string;
  onSearch: (query: string) => void;
}

export const SearchInput = ({
  placeholder = "ابحث في الصلوات والأذكار والعناوين...",
  onSearch,
}: SearchInputProps) => {
  const { fontSize } = useTheme();
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q) {
      onSearch(q);
      setQuery("");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="relative w-full max-w-xl"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <div className="relative">
        <motion.div
          className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none transition-all duration-300"
          animate={{ opacity: isFocused || query ? 0.6 : 1, scale: isFocused || query ? 0.9 : 1 }}
        >
          <Search className="w-5 h-5" style={{ color: "var(--text-muted)" }} />
        </motion.div>

        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          placeholder={placeholder}
          className="input-luxury pr-12 pl-12 text-base"
          style={{ fontSize: `${fontSize}px` }}
          autoComplete="off"
        />

        {query && (
          <motion.button
            type="button"
            onClick={() => setQuery("")}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-1 rounded-lg transition-colors"
            whileHover={{ scale: 1.2, backgroundColor: "var(--bg-tertiary)" }}
            whileTap={{ scale: 0.9 }}
            aria-label="مسح البحث"
            style={{ color: "var(--text-muted)" }}
          >
            <X className="w-4 h-4" />
          </motion.button>
        )}
      </div>

      <motion.div
        className="absolute bottom-[-2px] right-0 left-0 h-0.5 rounded-full overflow-hidden"
        animate={{ width: isFocused ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "var(--gradient-gold)" }}
      />
    </motion.form>
  );
};