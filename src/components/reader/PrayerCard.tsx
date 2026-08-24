import { Card, CardHeader, CardContent, CardFooter } from "./card";
import { Bookmark, Check, Copy, Loader2 } from "lucide-react";
import { useFavorites } from "../hooks/useFavorites";
import { useToast } from "../ui/Toast";

export const PrayerCard = ({
  id,
  title,
  text,
  source,
}: {
  id: string;
  title: string;
  text: string;
  source?: string;
}) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();

  const handleFavorite = () => {
    toggleFavorite(id);
    toast({
      title: isFavorite ? "Removed from favorites" : "Added to favorites",
      description: `${title} ${isFavorite ? "removed" : "added"} to bookmarks`,
      variant: "default",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied!",
      description: "Text copied to clipboard",
      variant: "default",
    });
  };

  return (
    <Card className="group relative rounded-lg border border-gray-200 bg-white dark:bg-gray-900 overflow-hidden shadow-sm transition-colors duration-300 hover:data-[state=dark]:bg-emerald-900/20 cursor-pointer group-hover:shadow-lg transition-shadow duration-200 max-w-sm mx-auto min-h-[200px]">
      <CardHeader className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900 py-3 px-4">
        <h3 className="font-medium text-gray-900 dark:text-gray-100 text-sm font-medium tracking-widest uppercase tracking-wider">{trendyTitle}</h3>
        {source && <p className="text-xs text-gray-500 dark:text-gray-400">{source}</p>}
      </div>
      <CardContent className="p-4 pt-0">
        <p className="font-amiri text-base text-gray-800 dark:text-gray-100 leading-relaxed">{text}</p>
      </CardContent>
      <CardFooter className="border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900 py-2 px-4 flex items-center justify-between">
        <button
          onClick={handleFavorite}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Toggle favorite"
        >
          {isFavorite ? (
            <Check className="w-4 h-4" />
          ) : (
            <Bookmark className="w-4 h-4" />
          )}
        </button>
        <button
          onClick={handleCopy}
          className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          aria-label="Copy text"
        >
          <Copy className="w-4 h-4" />
        </button>
      </CardFooter>
    </Card>
  );
};