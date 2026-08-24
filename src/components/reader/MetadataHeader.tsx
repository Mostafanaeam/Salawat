"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles, Calendar, Clock } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface MetadataHeaderProps {
  meta: {
    title: string;
    subtitle: string;
    collector: string;
    quranVerse: string;
  };
}

export const MetadataHeader = ({ meta }: MetadataHeaderProps) => {
  const { fontSize } = useTheme();

  return (
    <motion.header
      className="relative overflow-hidden"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="absolute inset-0 pattern-islamic opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />

      <div className="relative max-w-4xl mx-auto px-4 py-8 md:py-12 lg:py-16 text-center space-y-6">
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
          style={{ background: "var(--gradient-gold-soft)", border: "1px solid var(--border-gold)" }}
        >
          <Sparkles className="w-4 h-4" style={{ color: "var(--text-gold)" }} />
          <span className="font-cairo text-xs font-bold tracking-widest uppercase" style={{ color: "var(--text-gold)" }}>
            إصدار فاخر
          </span>
        </motion.div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="ornamental-separator">
            <span className="text-3xl">۩</span>
          </div>

          <h1 className="calligraphic-logo text-4xl md:text-5xl lg:text-6xl leading-tight font-amiri">
            {meta.title}
          </h1>

          <p className="font-cairo text-lg md:text-xl leading-relaxed max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            {meta.subtitle}
          </p>

          <div className="ornamental-separator">
            <span className="text-2xl">۝</span>
          </div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8 text-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)" }}>
            <BookOpen className="w-4 h-4" style={{ color: "var(--text-gold)" }} />
            <span className="font-cairo" style={{ color: "var(--text-secondary)" }}>
              جامع: {meta.collector}
            </span>
          </div>

          <div className="w-px h-6 hidden sm:block" style={{ background: "var(--gradient-gold)" }} />

          <div className="flex items-center gap-2 px-4 py-2 rounded-xl" style={{ background: "var(--bg-tertiary)", border: "1px solid var(--border-subtle)" }}>
            <Calendar className="w-4 h-4" style={{ color: "var(--text-gold)" }} />
            <span className="font-cairo" style={{ color: "var(--text-secondary)" }}>
              نسخة رقمية فاخرة 2024
            </span>
          </div>
        </motion.div>

        <motion.blockquote
          className="relative px-6 py-4 my-2 max-w-2xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.5, type: "spring" }}
        >
          <div className="absolute inset-0 rounded-2xl opacity-10" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative">
            <p className="text-quran text-center relative z-10" style={{ color: "var(--text-primary)", fontSize: `${fontSize * 1.1}px` }}>
              {meta.quranVerse}
            </p>
          </div>
        </motion.blockquote>

        <motion.div
          className="flex items-center justify-center gap-6 text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <div className="flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            <Clock className="w-3 h-3" style={{ color: "var(--text-gold)" }} />
            <span className="font-cairo">وقت القراءة: ~١٥ دقيقة</span>
          </div>
          <div className="w-px h-4" style={{ background: "var(--border-subtle)" }} />
          <div className="flex items-center gap-1.5" style={{ color: "var(--text-muted)" }}>
            <Sparkles className="w-3 h-3" style={{ color: "var(--text-gold)" }} />
            <span className="font-cairo">تجربة قراءة غامرة</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" style={{ background: "linear-gradient(to top, var(--bg-primary), transparent)" }} />
    </motion.header>
  );
};