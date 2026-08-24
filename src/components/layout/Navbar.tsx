import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { useTheme } from "../../hooks/useTheme";
import { useState, useRef, useEffect } from "react";

export const Navbar = () => {
  const { } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-[100] transition-luxury ${
        isScrolled
          ? "glass-gold backdrop-blur-[40px] shadow-[0_4px_30px_-4px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ willChange: "transform, opacity, background" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20 gap-4">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <motion.div
              className="relative w-12 h-12 rounded-xl flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 animate-rotate-slow" />
              <div className="relative w-10 h-10 rounded-lg bg-stone-950 flex items-center justify-center">
                <span className="text-2xl font-bold text-gold-gradient font-amiri">ص</span>
              </div>
            </motion.div>
            <div className="hidden sm:block">
              <h1 className="calligraphic-logo text-xl md:text-2xl leading-tight">صلوات</h1>
              <p className="text-xs text-stone-400 font-cairo tracking-widest uppercase mt-0.5">كتاب الصلاة والأذكار</p>
            </div>
          </motion.div>

          <div className="flex items-center gap-2 lg:gap-3">
            <motion.button
              className="btn-icon-luxury lg:hidden"
              onClick={() => {}}
              aria-label="فتح القائمة"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92 }}
            >
              <Menu className="w-6 h-6" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};