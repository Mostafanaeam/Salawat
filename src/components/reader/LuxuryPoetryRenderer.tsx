"use client";

import { motion } from "framer-motion";
import { useTheme } from "../../hooks/useTheme";

interface Verse {
  front: string;
  back: string;
}

interface LuxuryPoetryRendererProps {
  title: string;
  poet?: string;
  verses: Verse[];
  className?: string;
  style?: React.CSSProperties;
}

const ORNAMENTAL_SEPARATORS = [
  "۝", // Quranic rub el hizb
  "❖", // Star
  "۩", // Quranic ornament
  "✦", // Sparkle
  "◆", // Diamond
  "✶", // Six pointed star
];

export const LuxuryPoetryRenderer = ({
  title,
  poet,
  verses,
  className = "",
}: LuxuryPoetryRendererProps) => {
  const { fontSize } = useTheme();

  const separator = ORNAMENTAL_SEPARATORS[0];

  return (
    <motion.section
      className={`luxury-card overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        fontSize: `${fontSize}px`,
      }}
    >
      <div className="absolute inset-0 pattern-geometric opacity-20 pointer-events-none" />

      <div className="relative z-10 p-6 md:p-8 lg:p-10 space-y-8">
        <motion.header
          className="text-center space-y-4 border-b border-amber-500/10 pb-6 relative"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <div className="ornamental-separator">
            <span>{separator}</span>
          </div>

          <h2 className="calligraphic-logo text-3xl md:text-4xl lg:text-5xl leading-tight font-amiri">
            {title}
          </h2>

          {poet && (
            <motion.p
              className="font-cairo text-lg tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "var(--text-gold)" }}
            >
              {poet}
            </motion.p>
          )}

          <div className="ornamental-separator">
            <span>{separator}</span>
          </div>
        </motion.header>

        <motion.div
          className="space-y-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5, staggerChildren: 0.1 }}
        >
          {verses.map((verse, index) => (
            <motion.article
              key={`${verse.front}-${verse.back}-${index}`}
              className="relative"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="grid lg:grid-cols-2 gap-6 lg:gap-10 items-start">
                <motion.div
                  className="relative pr-6 lg:pr-8"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  <div className="absolute right-0 top-0 bottom-0 w-px hidden lg:block" style={{ background: "var(--gradient-gold)" }} />
                  <div className="absolute right-[-6px] top-0 w-3 h-3 rounded-full hidden lg:block" style={{ background: "var(--gradient-gold)", boxShadow: "0 0 12px rgba(251,191,36,0.5)" }} />
                  <div className="absolute right-[-10px] top-0 w-1 h-1 rounded-full hidden lg:block" style={{ background: "var(--text-gold)" }} />

                  <div className="text-poetry text-right pr-4 relative z-10" style={{ lineHeight: 2.8, fontSize: `${fontSize * 1.15}px` }}>
                    <p className="whitespace-pre-wrap" style={{ color: "var(--text-primary)", fontWeight: 500 }}>{verse.front}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative pl-6 lg:pl-8"
                  style={{ fontSize: `${fontSize * 1.1}px` }}
                >
                  <div className="absolute left-0 top-0 bottom-0 w-px hidden lg:block" style={{ background: "var(--gradient-gold)" }} />
                  <div className="absolute left-[-6px] top-0 w-3 h-3 rounded-full hidden lg:block" style={{ background: "var(--gradient-gold)", boxShadow: "0 0 12px rgba(251,191,36,0.5)" }} />
                  <div className="absolute left-[-10px] top-0 w-1 h-1 rounded-full hidden lg:block" style={{ background: "var(--text-gold)" }} />

                  <div className="text-poetry text-right pl-4 relative z-10" style={{ lineHeight: 2.8, fontSize: `${fontSize * 1.15}px` }}>
                    <p className="whitespace-pre-wrap" style={{ color: "var(--text-secondary)", fontWeight: 400 }}>{verse.back}</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                className="ornamental-separator lg:hidden mt-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
              >
                <span>{separator}</span>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          className="pt-6 border-t border-amber-500/10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2" style={{ color: "var(--text-muted)" }}>
            <span className="font-cairo text-sm">إجمالي الأبيات:</span>
            <span className="font-mono text-lg font-bold text-amber-400">{verses.length}</span>
          </div>
          <div className="ornamental-separator w-auto">
            <span className="text-xl">{separator}</span>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-24 pointer-events-none opacity-50">
        <div className="w-full h-full" style={{ background: "linear-gradient(to top, var(--bg-card), transparent)" }} />
      </div>
    </motion.section>
  );
};

export const LuxuryPoetryCard = ({
  title,
  poet,
  verses,
  className = "",
}: LuxuryPoetryRendererProps) => {
  const { fontSize } = useTheme();

  return (
    <motion.article
      className={`luxury-card overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      style={{
        background: "var(--bg-card)",
        borderColor: "var(--border-subtle)",
        fontSize: `${fontSize}px`,
      }}
    >
      <div className="absolute inset-0 pattern-geometric opacity-15 pointer-events-none" />

      <div className="relative z-10 p-5 md:p-6 space-y-5">
        <div className="text-center space-y-3 border-b border-amber-500/10 pb-4">
          <h3 className="calligraphic-logo text-2xl md:text-3xl font-amiri">{title}</h3>
          {poet && (
            <p className="font-cairo text-base tracking-wider" style={{ color: "var(--text-gold)" }}>{poet}</p>
          )}
        </div>

        <div className="space-y-4" style={{ fontSize: `${fontSize * 1.05}px` }}>
          {verses.map((verse, index) => (
            <motion.div
              key={`${verse.front}-${index}`}
              className="relative"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.4 }}
            >
              <div className="grid sm:grid-cols-2 gap-4 items-start">
                <div className="text-poetry text-right pr-3 relative" style={{ lineHeight: 2.6 }}>
                  <div className="absolute right-0 top-0 bottom-0 w-px hidden sm:block" style={{ background: "var(--gradient-gold)" }} />
                  <p className="whitespace-pre-wrap" style={{ color: "var(--text-primary)", fontWeight: 500 }}>{verse.front}</p>
                </div>
                <div className="text-poetry text-right pl-3 relative" style={{ lineHeight: 2.6 }}>
                  <div className="absolute left-0 top-0 bottom-0 w-px hidden sm:block" style={{ background: "var(--gradient-gold)" }} />
                  <p className="whitespace-pre-wrap" style={{ color: "var(--text-secondary)", fontWeight: 400 }}>{verse.back}</p>
                </div>
              </div>

              {index < verses.length - 1 && (
                <div className="ornamental-separator my-3">
                  <span className="text-lg">۝</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.article>
  );
};