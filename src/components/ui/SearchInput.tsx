import { SearchIcon, X } from "lucide-react";
import { useSearch } from "../hooks/useSearch";

export const SearchInput = ({
  placeholder = "Search...",
  onSearch,
  onClear,
}: {
  placeholder?: string;
  onSearch: (query: string) => void;
  onClear: () => void;
}) => {
  const [query, setQuery] = React.useState("");
  const { results, setResults } = useSearchContent();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = query.trim();
    if (q && onSearch) {
      setQuery("");
      onSearch(q);
    }
  };

  return (
    <div className="relative w-full max-w-md rounded-lg border border-gray-200 bg-white dark:bg-gray-800 overflow-hidden shadow-sm transition-colors duration-200">
      <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 pl-3 text-gray-400 text-sm" />
      <input
        type="text"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={e => { if e.key === "Enter" && onSearch, setQuery(""), onSearch(query.trim()) }, placeholder={placeholder}
      } className="w-full rounded-lg pl-10 pr-3 pb-3 text-sm text-gray-700 outline-none bg-transparent placeholder-gray-400" placeholder={placeholder}
    </div>
  );
};