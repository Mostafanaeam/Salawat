import "./index.css";
import { ThemeProvider } from "./hooks/useTheme";
import { FavoritesProvider } from "./hooks/useFavorites";
import { ToastProvider } from "./components/ui/Toast";
import { SearchProvider } from "./hooks/useSearch";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/layout/HeroSection";
import { IntroDedicationSection } from "./components/layout/IntroDedicationSection";
import { LuxuryCard } from "./components/reader/LuxuryCard";
import { LuxuryPoetryCard } from "./components/reader/LuxuryPoetryRenderer";
import { useSearch } from "./hooks/useSearch";
import { motion } from "framer-motion";
import contentData from "./data/content.json";

const content = contentData as any[];

const AppContent = () => {
  const { results, query } = useSearch(content);

  const categoryConfig: Record<string, { icon: string; type: "prayer" | "hadith" | "poetry" | "default" }> = {
    "فضائل الصلاة على النبي": { icon: "📜", type: "hadith" },
    "الصلوات المأثورة والجامعة": { icon: "🤲", type: "prayer" },
    "صلوات الصالحين والأولياء": { icon: "💎", type: "prayer" },
    "القصائد الشعرية": { icon: "✍️", type: "poetry" },
  };

  const renderCategory = (categoryData: any, catIndex: number) => {
    const categoryName = categoryData.category;
    const config = categoryConfig[categoryName] || { icon: "📄", type: "default" };

    let categoryItems: any[] = [];

    if (categoryData.items) {
      categoryItems = categoryData.items;
    } else if (categoryData.verses) {
      categoryItems = [{ ...categoryData }];
    }

    const filteredItems: any[] = results.length > 0
      ? results.flatMap((r: any) => r.verses || r.items || [r]).filter(
          (item: any) =>
            item.title?.toLowerCase().includes(query.toLowerCase()) ||
            item.text?.toLowerCase().includes(query.toLowerCase())
        )
      : categoryItems;

    if (filteredItems.length === 0 && results.length > 0) {
      return null;
    }

    if (categoryName === "القصائد الشعرية") {
      return (
        <motion.div
          key={catIndex}
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: catIndex * 0.1 }}
        >
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-amber-500/10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{config.icon}</span>
              <h2 className="calligraphic-logo text-2xl md:text-3xl font-amiri">{categoryName}</h2>
            </div>
            <span className="luxury-badge text-xs font-cairo">{filteredItems.length} قصيدة</span>
          </div>

          <div className="space-y-6">
            {filteredItems.map((poem: any, poemIndex: number) => (
              <LuxuryPoetryCard
                key={poem.id || poemIndex}
                title={poem.title}
                poet={poem.author}
                verses={poem.verses}
                className="animate-fade-in-up"
              />
            ))}
          </div>
        </motion.div>
      );
    }

    if (categoryName === "فضائل الصلاة على النبي") {
      return (
        <motion.div
          key={catIndex}
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: catIndex * 0.1 }}
        >
          <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-amber-500/10">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{config.icon}</span>
              <h2 className="calligraphic-logo text-2xl md:text-3xl font-amiri">{categoryName}</h2>
            </div>
            <span className="luxury-badge text-xs font-cairo">{filteredItems.length} حديث</span>
          </div>

          <div className="space-y-4">
            {filteredItems.map((item: any, itemIndex: number) => (
              <LuxuryCard
                key={item.id || itemIndex}
                id={`hadith-${itemIndex}`}
                title={`حديث ${itemIndex + 1}`}
                text={item}
                category="hadith"
                type="hadith"
                className="animate-fade-in-up"
                style={{ animationDelay: `${itemIndex * 0.08}s` }}
              />
            ))}
          </div>
        </motion.div>
      );
    }

    return (
      <motion.div
        key={catIndex}
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: catIndex * 0.1 }}
      >
        <div className="flex items-center justify-between gap-4 mb-8 pb-4 border-b border-amber-500/10">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{config.icon}</span>
            <h2 className="calligraphic-logo text-2xl md:text-3xl font-amiri">{categoryName}</h2>
          </div>
          <span className="luxury-badge text-xs font-cairo">{filteredItems.length} ذكر</span>
        </div>

        <div className="space-y-4">
          {filteredItems.map((item: any, itemIndex: number) => {
            let displayTitle = item.name || item.title || `صلاة ${itemIndex + 1}`;
            let displayText = item.text || item.content;
            let source = item.note;

            if (typeof displayText === 'object') {
              displayText = JSON.stringify(displayText, null, 2);
            }

            return (
              <LuxuryCard
                key={item.id || itemIndex}
                id={item.id || `${categoryName}-${itemIndex}`}
                title={displayTitle}
                text={displayText}
                source={source}
                category={config.type}
                type={config.type}
                className="animate-fade-in-up"
                style={{ animationDelay: `${itemIndex * 0.08}s` }}
              />
            );
          })}
        </div>
      </motion.div>
    );
  };

  const dedicationData = content.find((c: any) => c.category === "المقدمة والإهداء");

  return (
    <div className="min-h-screen relative" style={{ background: "var(--bg-primary)" }}>
      <div className="fixed inset-0 pattern-lattice opacity-30 pointer-events-none" />
      <div className="fixed inset-0 radial-glow-gold pointer-events-none" />
      <div className="fixed inset-0 radial-glow-emerald pointer-events-none" />

      <Navbar />

      <main className="relative z-10 pb-32 px-4">
        <HeroSection />

        {dedicationData && (
          <IntroDedicationSection
            quranVerse={dedicationData.content?.quran_verse || ""}
            greeting={dedicationData.content?.greeting || ""}
            collectorInfo={dedicationData.content?.collector_info || {}}
          />
        )}

        <div className="relative z-10 max-w-4xl mx-auto px-4 pt-8">
          {content
            .filter((c: any) => c.category !== "المقدمة والإهداء")
            .map((categoryData, catIndex) =>
              renderCategory(categoryData, catIndex)
            )}
        </div>

        {results.length > 0 && query && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="font-cairo text-lg" style={{ color: "var(--text-secondary)" }}>
              تم العثور على <span className="font-bold text-amber-400">{results.length}</span> نتيجة لـ
              <span className="font-bold text-amber-400 ml-2">«{query}»</span>
            </p>
          </motion.div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export const App = () => {
  return (
    <ThemeProvider>
      <FavoritesProvider>
        <ToastProvider>
          <SearchProvider content={content}>
            <AppContent />
          </SearchProvider>
        </ToastProvider>
      </FavoritesProvider>
    </ThemeProvider>
  );
};