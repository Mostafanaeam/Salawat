"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Mail, Phone, Award, Shield, Sparkles } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";

interface CollectorInfo {
  name: string;
  title: string;
  university: string;
  address: string;
  phone_home: string;
  phone_mobile: string;
  email: string;
}

interface IntroDedicationSectionProps {
  quranVerse: string;
  greeting: string;
  collectorInfo: CollectorInfo;
}

export const IntroDedicationSection = ({
  quranVerse,
  greeting,
  collectorInfo,
}: IntroDedicationSectionProps) => {
  const { fontSize } = useTheme();

  return (
    <motion.section
      id="dedication"
      className="relative py-20 md:py-28"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{ fontSize: `${fontSize}px` }}
    >
      <div className="absolute inset-0 pattern-geometric opacity-15 pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 opacity-30 pointer-events-none" style={{ background: "url('data:image/svg+xml,%3Csvg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath fill=\"%23fbbf24\" fill-opacity=\"0.5\" d=\"M32 0c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zm0 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z\"/%3E%3C/svg%3E')" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-30 pointer-events-none rotate-180" style={{ background: "url('data:image/svg+xml,%3Csvg width=\"64\" height=\"64\" viewBox=\"0 0 64 64\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cpath fill=\"%23fbbf24\" fill-opacity=\"0.5\" d=\"M32 0c17.67 0 32 14.33 32 32s-14.33 32-32 32-32-14.33-32-32 14.33-32 32-32zm0 8c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z\"/%3E%3C/svg%3E')" }} />

      <div className="relative max-w-6xl mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{
            background: "rgba(6, 45, 31, 0.6)",
            border: "2px solid rgba(251, 191, 36, 0.3)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "var(--shadow-luxury), inset 0 1px 0 rgba(251, 191, 36, 0.1)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-emerald-500/5 pointer-events-none" />
          <div className="absolute inset-0 pattern-islamic opacity-5 pointer-events-none" />

          <div className="relative z-10 space-y-10">
            <motion.div
              className="text-center space-y-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <div className="ornamental-separator">
                <span className="text-3xl">۩</span>
              </div>

              <motion.h2
                className="calligraphic-logo text-3xl md:text-4xl lg:text-5xl leading-tight font-amiri"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                الإهداء وبيانات الجامع
              </motion.h2>

              <motion.div
                className="flex items-center justify-center gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <Award className="w-6 h-6" style={{ color: "var(--text-gold)" }} />
                <span className="luxury-badge text-sm font-cairo">نسخة فاخرة مجمع الوقف الإسلامي</span>
                <Award className="w-6 h-6" style={{ color: "var(--text-gold)" }} />
              </motion.div>

              <motion.div
                className="ornamental-separator"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                <span className="text-2xl">۝</span>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-2xl p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border-subtle)",
                boxShadow: "var(--shadow-luxury)",
              }}
            >
              <div className="absolute inset-0 pattern-islamic opacity-10 pointer-events-none" />

              <motion.blockquote
                className="relative text-quran text-center text-2xl md:text-3xl font-amiri leading-[2.4] relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                style={{ color: "var(--text-primary)" }}
              >
                {quranVerse}
                <div className="mt-4 flex items-center justify-center gap-2">
                  <span className="w-12 h-px" style={{ background: "var(--gradient-gold)" }} />
                  <Sparkles className="w-5 h-5" style={{ color: "var(--text-gold)" }} />
                  <span className="w-12 h-px" style={{ background: "var(--gradient-gold)" }} />
                </div>
              </motion.blockquote>
            </motion.div>

            <motion.div
              className="relative text-center space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <div className="flex items-center justify-center gap-2">
                <span className="w-16 h-px" style={{ background: "var(--gradient-gold)" }} />
                <Sparkles className="w-5 h-5" style={{ color: "var(--text-gold)" }} />
                <span className="w-16 h-px" style={{ background: "var(--gradient-gold)" }} />
              </div>
              <motion.p
                className="font-cairo text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ color: "var(--text-secondary)" }}
              >
                {greeting}
              </motion.p>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
            >
              <div className="flex items-center justify-center gap-2 mb-6">
                <span className="w-24 h-px" style={{ background: "var(--gradient-gold)" }} />
                <GraduationCap className="w-6 h-6" style={{ color: "var(--text-gold)" }} />
                <span className="w-24 h-px" style={{ background: "var(--gradient-gold)" }} />
              </div>

              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, staggerChildren: 0.1 }}
              >
                <motion.div
                  className="relative p-4 md:p-6 rounded-2xl text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-secondary)" }}>
                    <GraduationCap className="w-7 h-7" style={{ color: "var(--text-gold)" }} />
                  </div>
                  <h3 className="font-cairo font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>
                    {collectorInfo.name}
                  </h3>
                  <p className="font-cairo text-sm text-amber-400 mb-3">{collectorInfo.title}</p>
                  <div className="flex items-center justify-center gap-1.5 text-sm" style={{ color: "var(--text-muted)" }}>
                    <Award className="w-4 h-4" style={{ color: "var(--text-gold)" }} />
                    <span className="font-cairo">{collectorInfo.university}</span>
                  </div>
                </motion.div>

                <motion.div
                  className="relative p-4 md:p-6 rounded-2xl text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-secondary)" }}>
                    <MapPin className="w-7 h-7" style={{ color: "var(--text-gold)" }} />
                  </div>
                  <h3 className="font-cairo font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>العنوان</h3>
                  <p className="font-cairo text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                    {collectorInfo.address}
                  </p>
                </motion.div>

                <motion.div
                  className="relative p-4 md:p-6 rounded-2xl text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-secondary)" }}>
                    <Phone className="w-7 h-7" style={{ color: "var(--text-gold)" }} />
                  </div>
                  <h3 className="font-cairo font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>التواصل</h3>
                  <div className="space-y-1 text-sm font-cairo" style={{ color: "var(--text-secondary)" }}>
                    <p>📞 {collectorInfo.phone_home}</p>
                    <p>📱 {collectorInfo.phone_mobile}</p>
                  </div>
                </motion.div>

                <motion.div
                  className="relative p-4 md:p-6 rounded-2xl text-center group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "var(--bg-tertiary)",
                    border: "1px solid var(--border-subtle)",
                  }}
                >
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-secondary)" }}>
                    <Mail className="w-7 h-7" style={{ color: "var(--text-gold)" }} />
                  </div>
                  <h3 className="font-cairo font-bold text-lg mb-1" style={{ color: "var(--text-primary)" }}>البريد الإلكتروني</h3>
                  <p className="font-cairo text-sm break-all" style={{ color: "var(--text-gold)" }}>
                    {collectorInfo.email}
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            <motion.div
              className="relative pt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center justify-center gap-4 my-6">
                <span className="flex-1 h-px" style={{ background: "var(--gradient-gold)" }} />
                <Shield className="w-8 h-8" style={{ color: "var(--text-gold)" }} />
                <span className="flex-1 h-px" style={{ background: "var(--gradient-gold)" }} />
              </div>

              <motion.div
                className="flex flex-wrap items-center justify-center gap-2 md:gap-4 text-sm font-cairo"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 }}
              >
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "var(--gradient-gold-soft)", color: "var(--text-gold)", border: "1px solid var(--border-gold)" }}>
                  <Sparkles className="w-3 h-3" />
                  مصنوع بإخلاص
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "var(--gradient-gold-soft)", color: "var(--text-gold)", border: "1px solid var(--border-gold)" }}>
                  <Shield className="w-3 h-3" />
                  لخدمة السنة النبوية
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full" style={{ background: "var(--gradient-gold-soft)", color: "var(--text-gold)", border: "1px solid var(--border-gold)" }}>
                  <Award className="w-3 h-3" />
                  مجمع الوقف الإسلامي
                </span>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};