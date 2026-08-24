"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Sun,
  Moon,
  Sparkles,
  Volume2,
  VolumeX,
  Search,
  BookOpen,
  Heart,
  Settings,
  ChevronUp,
  Headphones,
  Minus,
  Plus,
  Check,
} from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useState, useRef, useEffect } from "react";

const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 28;

type ToolbarMode = "compact" | "expanded";

export const FloatingControlBar = () => {
  const { theme, toggleTheme, fontSize, increaseFontSize, decreaseFontSize, setFontSize } = useTheme();
  const [mode, setMode] = useState<ToolbarMode>("compact");
  const [isVisible, setIsVisible] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [audioPlaying, setAudioPlaying] = useState(false);
  const lastScrollY = useRef(0);
  const toolbarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const themeIcons = {
    dark: <Moon className="w-5 h-5" />,
    light: <Sun className="w-5 h-5" />,
    sepia: <Sparkles className="w-5 h-5" />,
  };

  const themeLabels = {
    dark: "داكن",
    light: "فاتح",
    sepia: "عتيق",
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      const elements = document.querySelectorAll('[data-searchable="true"]');
      elements.forEach((el) => {
        const text = el.textContent?.toLowerCase() || "";
        if (text.includes(searchQuery.toLowerCase())) {
          el.scrollIntoView({ behavior: "smooth", block: "center" });
          el.classList.add("ring-2", "ring-amber-500/50");
          setTimeout(() => el.classList.remove("ring-2", "ring-amber-500/50"), 3000);
        }
      });
    }
  };

  const themeOptions = [
    { value: "dark" as const, label: "الوضع الداكن", icon: <Moon className="w-4 h-4" /> },
    { value: "light" as const, label: "الوضع الفاتح", icon: <Sun className="w-4 h-4" /> },
    { value: "sepia" as const, label: "الوضع العتيق", icon: <Sparkles className="w-4 h-4" /> },
  ];

  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          ref={toolbarRef}
          className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[300] pointer-events-none"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 150 }}
        >
          <div className="pointer-events-auto w-full max-w-4xl px-4">
            <motion.div
              className={`relative glass-gold rounded-3xl border border-amber-500/20 overflow-hidden transition-luxury ${
                mode === "expanded" ? "max-h-96 py-4" : "max-h-20"
              }`}
              style={{ boxShadow: "var(--shadow-luxury)" }}
              animate={{ height: mode === "expanded" ? "auto" : 72 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex items-center justify-between px-4 py-3">
                <motion.button
                  className="btn-icon-luxury w-12 h-12"
                  onClick={() => setMode((prev) => (prev === "compact" ? "expanded" : "compact"))}
                  whileHover={{ scale: 1.1, rotate: 180 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={mode === "compact" ? "توسيع الشريط" : "طي الشريط"}
                >
                  <motion.div
                    animate={{ rotate: mode === "expanded" ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronUp className="w-5 h-5" />
                  </motion.div>
                </motion.button>

                <div className="flex items-center gap-2 flex-1 mx-4">
                  <motion.button
                    className={`btn-icon-luxury w-12 h-12 flex-1 max-w-[100px] justify-center ${theme === "dark" ? "bg-amber-500/20 border-amber-500/40 text-amber-400" : ""}`}
                    onClick={toggleTheme}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={`التبديل إلى ${themeLabels[theme === "dark" ? "light" : theme === "light" ? "sepia" : "dark" ]}`}
                    style={{ background: theme === "dark" ? "var(--gradient-gold)" : "transparent" }}
                  >
                    {themeIcons[theme]}
                    <span className="hidden sm:inline font-cairo text-xs font-medium ml-1" style={{ color: theme === "dark" ? "#1c1917" : "var(--text-primary)" }}>
                      {themeLabels[theme]}
                    </span>
                  </motion.button>

                  <div className="flex items-center gap-1.5 flex-1 max-w-xs">
                    <motion.button
                      className="btn-icon-luxury w-10 h-10 flex-1"
                      onClick={decreaseFontSize}
                      disabled={fontSize <= MIN_FONT_SIZE}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="تصغير الخط"
                    >
                      <Minus className="w-4 h-4" />
                    </motion.button>

                    <motion.div
                      className="flex-1 text-center px-2 py-1.5 rounded-xl font-mono text-sm font-bold transition-colors"
                      animate={{ backgroundColor: mode === "expanded" ? "var(--gradient-gold)" : "transparent" }}
                      style={{ color: mode === "expanded" ? "#1c1917" : "var(--text-primary)" }}
                    >
                      {fontSize}px
                    </motion.div>

                    <motion.button
                      className="btn-icon-luxury w-10 h-10 flex-1"
                      onClick={increaseFontSize}
                      disabled={fontSize >= MAX_FONT_SIZE}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="تكبير الخط"
                    >
                      <Plus className="w-4 h-4" />
                    </motion.button>
                  </div>

                  <motion.button
                    className="btn-icon-luxury w-12 h-12"
                    onClick={() => setShowSearch(!showSearch)}
                    whileHover={{ scale: 1.05, rotate: 15 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={showSearch ? "إخفاء البحث" : "بحث"}
                  >
                    <Search className="w-5 h-5" />
                  </motion.button>

                  <motion.button
                    className="btn-icon-luxury w-12 h-12"
                    onClick={() => {
                      setAudioPlaying(!audioPlaying);
                      if (audioPlaying) {
                        speechSynthesis.cancel();
                      }
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={audioPlaying ? "إيقاف الصوت" : "تشغيل الصوت"}
                    style={{ background: audioPlaying ? "var(--gradient-gold)" : "transparent" }}
                  >
                    <AnimatePresence mode="wait">
                      {audioPlaying ? (
                        <motion.div key="playing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <VolumeX className="w-5 h-5" style={{ color: audioPlaying ? "#1c1917" : "var(--text-primary)" }} />
                        </motion.div>
                      ) : (
                        <motion.div key="paused" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                          <Volume2 className="w-5 h-5" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.button>
                </div>

                <motion.button
                  className="btn-icon-luxury w-12 h-12"
                  onClick={() => setMode((prev) => (prev === "compact" ? "expanded" : "compact"))}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="المزيد"
                >
                  <Settings className="w-5 h-5" />
                </motion.button>
              </div>

              <AnimatePresence mode="wait">
                {mode === "expanded" && (
                  <motion.div
                    className="px-4 pb-4 pt-0 border-t border-amber-500/10"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    <div className="space-y-4">
                      <div>
                        <label className="block font-cairo text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                          حجم الخط الدقيق
                        </label>
                        <input
                          type="range"
                          min={MIN_FONT_SIZE}
                          max={MAX_FONT_SIZE}
                          value={fontSize}
                          onChange={(e) => setFontSize(parseInt(e.target.value))}
                          className="w-full h-2 appearance-none rounded-full bg-stone-800 cursor-pointer"
                          style={{
                            background: "var(--bg-tertiary)",
                          }}
                        />
                        <div className="flex justify-between text-xs font-cairo mt-1" style={{ color: "var(--text-muted)" }}>
                          <span>{MIN_FONT_SIZE}px</span>
                          <span>{MAX_FONT_SIZE}px</span>
                        </div>
                      </div>

                      <div>
                        <label className="block font-cairo text-sm font-medium mb-3" style={{ color: "var(--text-secondary)" }}>السمة البصرية</label>
                        <div className="grid grid-cols-3 gap-2">
                          {themeOptions.map((option) => (
                            <motion.button
                              key={option.value}
                              className={`relative p-3 rounded-xl transition-luxury border-2 flex flex-col items-center gap-2 ${
                                theme === option.value
                                  ? "border-amber-500/50 bg-amber-500/10"
                                  : "border-stone-800 hover:border-amber-500/30"
                              }`}
                              onClick={() => {
                                if (theme !== option.value) {
                                  toggleTheme();
                                }
                              }}
                              whileHover={{ scale: 1.02, y: -2 }}
                              whileTap={{ scale: 0.98 }}
                            >
                              <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "var(--bg-tertiary)" }}>
                                {option.icon}
                              </div>
                              <span className="font-cairo text-xs font-medium" style={{ color: theme === option.value ? "var(--text-gold)" : "var(--text-secondary)" }}>
                                {option.label}
                              </span>
                              {theme === option.value && (
                                <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full flex items-center justify-center" style={{ background: "var(--gradient-gold)" }}>
                                  <Check className="w-3 h-3 text-stone-950" />
                                </div>
                              )}
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block font-cairo text-sm font-medium mb-2" style={{ color: "var(--text-secondary)" }}>
                          إجراءات سريعة
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                          {[
                            { icon: BookOpen, label: "جميع الصلوات", action: () => document.getElementById("all")?.scrollIntoView({ behavior: "smooth" }) },
                            { icon: Heart, label: "المفضلة", action: () => document.getElementById("favorites")?.scrollIntoView({ behavior: "smooth" }) },
                            { icon: Search, label: "بحث متقدم", action: () => setShowSearch(true) },
                            { icon: Headphones, label: "استماع الكل", action: () => { /* TODO */ } },
                          ].map((item) => (
                            <motion.button
                              key={item.label}
                              className="btn-ghost-luxury p-3 flex flex-col items-center gap-1.5"
                              onClick={item.action}
                              whileHover={{ y: -2, scale: 1.02 }}
                              whileTap={{ scale: 0.98 }}
                              style={{ minHeight: "80px" }}
                            >
                              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--bg-tertiary)" }}>
                                <item.icon className="w-5 h-5 text-stone-400" />
                              </div>
                              <span className="font-cairo text-xs font-medium text-center" style={{ color: "var(--text-secondary)" }}>
                                {item.label}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>

                      <AnimatePresence mode="wait">
                        {showSearch && (
                          <motion.div
                            className="relative"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <form onSubmit={handleSearchSubmit} className="relative">
                              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5" style={{ color: "var(--text-muted)" }} />
                              <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="ابحث في الصلوات والأذكار..."
                                className="input-luxury pr-12"
                                autoFocus
                              />
                              <motion.button
                                type="submit"
                                className="absolute left-3 top-1/2 -translate-y-1/2 btn-icon-luxury w-10 h-10"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                              >
                                <Search className="w-4 h-4 text-amber-400" />
                              </motion.button>
                            </form>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-opacity duration-200"
              style={{ transform: "translateX(-50%) translateY(100%)" }}
            >
              <div className="glass-gold rounded-xl px-3 py-1.5 text-xs font-cairo whitespace-nowrap" style={{ color: "var(--text-secondary)" }}>
                اسحب للأعلى للمزيد
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};