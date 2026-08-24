import "./index.css";
import { SearchProvider } from "./hooks/useSearch";
import { ThemeProvider } from "./hooks/useTheme";
import { FontSizeProvider } from "./hooks/useFontSize";
import { FavoritesProvider } from "./hooks/useFavorites";
import { SearchInput } from "./components/ui/SearchInput";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import { Sidebar } from "./components/layout/Sidebar";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { PoemRenderer } from "./components/reader/PoemRenderer";
import { HadithList } from "./components/reader/HadithList";
import { MetadataHeader } from "./components/reader/MetadataHeader";
import { useSearch } from "./hooks/useSearch";
import { content } from "./data/content";
import { FontResizer } from "./components/ui/FontResizer";
import { useFontSize } from "./hooks/useFontSize";

export const App = () => {
  const { fontSize, increaseSize, decreaseSize } = useFontSize();
  const { handleSearch, results } = useSearch(content);

  return (
    <FontSizeProvider>
      <div className="min-h-screen bg-background dark:bg-gray-900 min-h-screen">
        <Navbar />
        <main className="ml-64 md:ml-64 w-full transition-all duration-300 bg-background dark:bg-gray-900">
          <div className="flex items-center justify-between mb-4">
            <SearchInput
              placeholder="Search prayers, titles, or verses..."
              onSearch={handleSearch}
            />
            <FontResizer fontSize={fontSize} onSizeChange={increaseSize} />
          </div>
          <div className="p-4 pt-4 overflow-y-auto max-w-2xl mx-auto">
            <MetadataHeader meta={content.meta} />
            {Object.entries(content.categories).map(([categoryName, categoryItems], catIndex) => {
              const filteredItems = results.length > 0 ? results.flatMap(r => r.verses || r.items || []).filter(
                (item: any) => item.title?.toLowerCase().includes((results[0]?.query?.toLowerCase() || '')) ||
                                item.text?.toLowerCase().includes((results[0]?.query?.toLowerCase() || ''))
              ) : categoryItems;

              if (categoryName === "القصائد الشعرية") {
                return (
                  <div key={catIndex} className="mb-8">
                    <h2 className="font-amiri text-xl font-bold text-gray-900 dark:text-emerald-900 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">{categoryName}</h2>
                    {filteredItems?.map((poem: any, poemIndex: number) => (
                      <PoemRenderer
                        key={poemIndex}
                        verses={poem.verses}
                      />
                    ))}
                  </div>
                );
              }
              if (categoryName === "أحاديث الفضل") {
                return (
                  <div key={catIndex} className="mb-8">
                    <h2 className="font-amiri text-xl font-bold text-gray-900 dark:text-emerald-900 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">{categoryName}</h2>
                    <HadithList hadiths={filteredItems as string[]} />
                  </div>
                );
              }
              return (
                <div key={catIndex} className="mb-8">
                  <h2 className="font-amiri text-xl font-bold text-gray-900 dark:text-emerald-900 mb-4 border-b border-gray-200 dark:border-gray-800 pb-2">{categoryName}</h2>
                  {filteredItems?.map((item: any, itemIndex: number) => (
                    <div key={itemIndex} className="prose dark:prose-invert mb-4">
                      <p className="font-amiri text-base text-gray-800 dark:text-gray-100">
                        {item.text || item.title}
                      </p>
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </main>
        <Footer />
      </div>
    </FontSizeProvider>
  );
};