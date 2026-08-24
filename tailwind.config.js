/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        amiri: ["Amiri", "serif"],
        cairo: ["Cairo", "sans-serif"],
        readex: ["Readex Pro", "sans-serif"],
      },
      colors: {
        emerald: {
          50: "#F0FDF4",
          100: "#E8F8F5",
          200: "#CFFDF1",
          300: "#AFFFCF",
          400: "#86EFAC",
          500: "#67E8F9",
          600: "#48DFF0",
          700: "#2ACFCF",
          800: "#0E878F",
          900: "#0F766E",
        },
        amber: {
          50: "#FFFBEB",
          100 "#FEF3C7",
          200 "#FDE68A",
          300 "#FCD34D",
          400 "#FBBf24",
          500 "#F59E0B",
          600 "#FBBF24",
          700 "#F87171",
          800 "#EA580C",
          900 "#DC2626",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
  ],
}