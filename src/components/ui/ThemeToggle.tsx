import { useTheme } from "../../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 border-2 border-white dark:data-[state=dark]:border-transparent transition-colors duration-200 flex items-center justify-center hover:bg-gray-200 hover:data-[state=dark]:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Moon className="w-5 h-5 text-gray-600" />
      ) : (
        <Sun className="w-5 h-5" />
      )}
    </button>
  );
};