"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bookmark, Check, Copy, Heart, Volume2, Loader2, BookOpen } from "lucide-react";
import { useState, useCallback } from "react";
import { useTheme } from "../../hooks/useTheme";
import { useToast } from "../ui/Toast";
import { useFavorites } from "../../hooks/useFavorites";

export interface LuxuryCardProps {
  id: string;
  title: string;
  text: string;
  source?: string;
  category?: string;
  type?: "prayer" | "hadith" | "poetry" | "default";
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

type CategoryKey = "prayer" | "hadith" | "poetry" | "default";

const categoryIcons: Record<CategoryKey, typeof BookOpen> = {
  prayer: BookOpen,
  hadith: BookOpen,
  poetry: BookOpen,
  default: BookOpen,
};

const categoryLabels: Record<CategoryKey, string> = {
  prayer: "صلاة مأثورة",
  hadith: "حديث فضل",
  poetry: "قصيدة شعرية",
  default: "ذكر",
};

export const LuxuryCard = ({
  id,
  title,
  text,
  source,
  category = "default",
  type = "default",
  onClick,
  className = "",
  style,
}: LuxuryCardProps) => {
  const { fontSize } = useTheme();
  const { isFavorite, toggleFavorite } = useFavorites();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);
  const favoriteStatus = isFavorite(id);

  const catKey = category as CategoryKey;

  const handleFavorite = useCallback(() => {
    toggleFavorite(id);
    toast({
      title: favoriteStatus ? "أُزيل من المفضلة" : "أُضيف للمفضلة",
      description: `${title.slice(0, 30)}... ${favoriteStatus ? "أُزيل" : "أُضيف"} للإشارات`,
      variant: "default",
    });
  }, [id, title, favoriteStatus, toggleFavorite, toast]);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      toast({
        title: "تم النسخ",
        description: "تم نسخ النص إلى الحافظة",
        variant: "default",
      });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast({
        title: "خطأ",
        description: "تعذر النسخ، يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    }
  }, [text, toast]);

  const handleAudio = useCallback(() => {
    setAudioPlaying(true);
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ar-SA";
    utterance.rate = 0.85;
    utterance.pitch = 1;
    utterance.onend = () => setAudioPlaying(false);
    utterance.onerror = () => setAudioPlaying(false);
    speechSynthesis.speak(utterance);
  }, [text]);

  const CategoryIcon = categoryIcons[catKey] || BookOpen;
  const categoryLabel = categoryLabels[catKey] || categoryLabels.default;

  return (
    <motion.article
      className={`luxury-card group relative ${className}`}
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        fontSize: `${fontSize}px`,
        ...style,
      }}
      whileHover={{ y: -6, boxShadow: "var(--shadow-card-hover)" }}
      transition={{ type: "spring", damping: 20, stiffness: 150 }}
      onClick={onClick}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full max-w-[300px] max-h-[300px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "var(--gradient-gold-radial)" }} />
      </div>

      <div className="relative z-10 p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <motion.div
              className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.1, type: "spring", stiffness: 200, damping: 15 }}
              style={{ background: "var(--gradient-gold)" }}
            >
              <CategoryIcon className="w-6 h-6 text-stone-950" />
            </motion.div>
            <div className="min-w-0">
              <motion.span
                className="luxury-badge text-xs"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {categoryLabel}
              </motion.span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 flex-shrink-0">
            <motion.button
              className="btn-icon-luxury w-10 h-10"
              onClick={(e) => { e.stopPropagation(); handleFavorite(); }}
              aria-label={favoriteStatus ? "إزالة من المفضلة" : "إضافة للمفضلة"}
              whileHover={{ scale: 1.12, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {favoriteStatus ? (
                  <motion.div
                    key="filled"
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: 90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Heart className="w-5 h-5 fill-current text-amber-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="outline"
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: 1, rotate: 0 }}
                    exit={{ scale: 0, rotate: -90 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <Bookmark className="w-5 h-5 text-stone-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="btn-icon-luxury w-10 h-10"
              onClick={(e) => { e.stopPropagation(); handleCopy(); }}
              aria-label={copied ? "تم النسخ" : "نسخ النص"}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.div
                    key="copied"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Check className="w-5 h-5 text-emerald-400" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="copy"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Copy className="w-5 h-5 text-stone-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>

            <motion.button
              className="btn-icon-luxury w-10 h-10"
              onClick={(e) => { e.stopPropagation(); handleAudio(); }}
              aria-label={audioPlaying ? "إيقاف الاستماع" : "استماع"}
              whileHover={{ scale: 1.12 }}
              whileTap={{ scale: 0.9 }}
              disabled={audioPlaying}
            >
              <AnimatePresence mode="wait">
                {audioPlaying ? (
                  <motion.div
                    key="playing"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Loader2 className="w-5 h-5 text-amber-400 animate-spin" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="play"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Volume2 className="w-5 h-5 text-stone-400" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
        >
          <h3 className="font-amiri text-xl md:text-2xl font-bold leading-tight mb-3 group-hover:text-amber-300 transition-colors" style={{ color: "var(--text-primary)" }}>
            {title}
          </h3>
          {source && (
            <p className="text-sm font-cairo flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--text-gold)" }} />
              <span>{source}</span>
            </p>
          )}
        </motion.div>

        <motion.div
          className="prose dark:prose-invert max-w-none overflow-wrap-anywhere"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          style={{
            color: "var(--text-secondary)",
            fontSize: `${fontSize}px`,
            lineHeight: 2,
            fontFamily: type === "poetry" ? '"Scheherazade New", "Amiri Quran", serif' : '"Amiri", serif',
          }}
        >
          <p className="text-hadith leading-[2.2] whitespace-pre-wrap overflow-wrap-anywhere">{text}</p>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ type: "spring", stiffness: 100 }}
        style={{ background: "var(--gradient-gold)", transformOrigin: "right" }}
      />
    </motion.article>
  );
};