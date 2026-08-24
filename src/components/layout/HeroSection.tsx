"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

export const HeroSection = () => {
  const { fontSize } = useTheme();

  return (
    <motion.section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="absolute inset-0 pattern-lattice opacity-20 pointer-events-none" />
      <div className="absolute inset-0 radial-glow-gold pointer-events-none" />
      <div className="absolute inset-0 radial-glow-emerald pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-emerald-950/30 to-stone-950/80 pointer-events-none" />

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #fbbf24 0%, #f59e0b 50%, transparent 70%)" }} />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full blur-3xl opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #22c55e 0%, #16a34a 50%, transparent 70%)" }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center space-y-10">
        <motion.div
          className="relative inline-flex items-center justify-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, type: "spring", stiffness: 100, damping: 15 }}
        >
          <div className="absolute inset-0 w-full h-full rounded-full animate-pulse-glow" style={{ background: "var(--gradient-gold-radial)" }} />
          <div className="absolute inset-0 w-full h-full rounded-full animate-rotate-slow opacity-50" style={{ background: "var(--gradient-gold)" }} />
          <div className="relative w-56 h-56 rounded-full flex items-center justify-center overflow-hidden" style={{ background: "var(--gradient-gold)" }}>
            <div className="w-52 h-52 rounded-full flex items-center justify-center" style={{ background: "var(--bg-primary)" }}>
              <span className="text-6xl font-bold text-gold-gradient font-amiri leading-none">صلوات</span>
            </div>
          </div>
          <motion.div
            className="absolute -inset-4 rounded-full border-2"
            style={{ borderColor: "rgba(251, 191, 36, 0.3)" }}
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>

        <motion.div
          className="relative px-6 py-4 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          style={{ background: "var(--gradient-gold)", borderRadius: "2rem" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 via-amber-500/10 to-emerald-600/20 animate-shimmer" />
          <div className="relative z-10 space-y-2">
            <motion.p
              className="font-cairo text-sm tracking-widest uppercase text-amber-200"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              ﷺ آية كريمة
            </motion.p>
            <motion.blockquote
              className="text-quran font-amiri text-2xl md:text-3xl lg:text-4xl leading-[2.2] text-stone-50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              إِنَّ اللَّهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ ۚ يَا أَيُّهَا الَّذِينَ آمَنُوا صَلُّوا عَلَيْهِ وَسَلِّمُوا تَسْلِيمًا
            </motion.blockquote>
            <motion.p
              className="font-cairo text-sm text-amber-200/80"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              سورة الأحزاب: ٥٦
            </motion.p>
          </div>
        </motion.div>

        <motion.div
          className="space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.p className="font-cairo text-lg md:text-xl tracking-wide" style={{ color: "var(--text-gold)" }}>
            كل عام وأنتم بخير بمناسبة المولد النبوي الشريف
          </motion.p>
          <motion.p className="font-cairo text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--text-secondary)" }}>
            تهنئة من القلب إلى جميع الأحباب والإخوان في الله تعالى، أعاده الله علينا وعليكم وعلى الأمة الإسلامية بالخير والبركة
          </motion.p>
        </motion.div>
      </div>

      <div id="content-start" className="relative z-10" />
    </motion.section>
  );
};