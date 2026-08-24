import { motion } from "framer-motion";
import { Heart, Sparkles, BookOpen, Star } from "lucide-react";

export const Footer = () => {
  return (
    <motion.footer
      className="relative w-full py-12 px-4 lg:py-16 overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="absolute inset-0 pattern-islamic opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6"
            animate={{ rotate: [0, 0, 360] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            style={{ background: "var(--gradient-gold)" }}
          >
            <div className="w-16 h-16 rounded-xl bg-stone-950 flex items-center justify-center">
              <span className="text-3xl font-bold text-gold-gradient font-amiri">ص</span>
            </div>
          </motion.div>

          <h3 className="calligraphic-logo text-3xl md:text-4xl mb-3">صلوات</h3>
          <p className="text-stone-400 font-cairo text-lg max-w-xl mx-auto leading-relaxed">
            كتاب الصلوات والأذكار النبوية — تجربة قراءة فاخرة بروح التراث الإسلامي
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <motion.div
            className="luxury-card p-6 text-center group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-tertiary)" }}>
              <BookOpen className="w-7 h-7 text-amber-400" />
            </div>
            <h4 className="font-cairo font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>محتوى غني</h4>
            <p className="text-sm font-cairo" style={{ color: "var(--text-muted)" }}>مئات الصلوات والأذكار</p>
          </motion.div>

          <motion.div
            className="luxury-card p-6 text-center group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-tertiary)" }}>
              <Star className="w-7 h-7 text-amber-400" />
            </div>
            <h4 className="font-cairo font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>تصميم إسلامي</h4>
            <p className="text-sm font-cairo" style={{ color: "var(--text-muted)" }}>خطوط وزخارف أصيلة</p>
          </motion.div>

          <motion.div
            className="luxury-card p-6 text-center group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-tertiary)" }}>
              <Sparkles className="w-7 h-7 text-amber-400" />
            </div>
            <h4 className="font-cairo font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>تجربة فاخرة</h4>
            <p className="text-sm font-cairo" style={{ color: "var(--text-muted)" }}>رسوم حركية سلسة</p>
          </motion.div>

          <motion.div
            className="luxury-card p-6 text-center group"
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            style={{ background: "var(--bg-card)", borderColor: "var(--border-subtle)" }}
          >
            <div className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-500/20 transition-colors" style={{ background: "var(--bg-tertiary)" }}>
              <Heart className="w-7 h-7 text-amber-400" />
            </div>
            <h4 className="font-cairo font-bold text-lg mb-2" style={{ color: "var(--text-primary)" }}>مصنوع بحب</h4>
            <p className="text-sm font-cairo" style={{ color: "var(--text-muted)" }}>لخدمة كتاب الله وسنة نبيه</p>
          </motion.div>
        </div>

        <div className="border-t border-amber-500/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-sm">
            <p className="font-cairo text-center" style={{ color: "var(--text-muted)" }}>
              مجمع الوقف الإسلامي &copy; {new Date().getFullYear()}
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-amber-400" style={{ color: "var(--text-muted)" }}>
                <span className="font-cairo text-xs">سياسة الخصوصية</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-amber-400" style={{ color: "var(--text-muted)" }}>
                <span className="font-cairo text-xs">شروط الاستخدام</span>
              </a>
              <a href="#" className="flex items-center gap-1.5 transition-colors hover:text-amber-400" style={{ color: "var(--text-muted)" }}>
                <span className="font-cairo text-xs">تواصل معنا</span>
              </a>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <motion.span
              className="flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-cairo font-medium"
              animate={{ boxShadow: ["0 0 0px rgba(251,191,36,0)", "0 0 20px rgba(251,191,36,0.3)", "0 0 0px rgba(251,191,36,0)"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ background: "var(--gradient-gold-soft)", color: "var(--text-gold)" }}
            >
              <Heart className="w-3 h-3" style={{ color: "var(--text-gold)" }} />
              <span>مصنوع بإخلاص</span>
            </motion.span>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};