/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#EA5514",
          50: "#FFF3EC",
          100: "#FFE4D6",
          200: "#FFC2AC",
          300: "#FF996F",
          400: "#FF723B",
          500: "#EA5514",
          600: "#C7460F",
          700: "#A1380C",
          800: "#6E2307",
          900: "#3B1203",
        },
      },
      container: {
        center: true,
        padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.75rem",
      },
      boxShadow: {
        soft: "0 6px 24px rgba(0,0,0,.06), 0 2px 6px rgba(0,0,0,.04)",
        softLg: "0 10px 28px rgba(0,0,0,.08), 0 4px 10px rgba(0,0,0,.06)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
          "100%": { transform: "translateY(0px)" },
        },
        blob: {
          "0%": { transform: "translate(0px,0px) scale(1)" },
          "33%": { transform: "translate(10px,-10px) scale(1.05)" },
          "66%": { transform: "translate(-10px,5px) scale(0.98)" },
          "100%": { transform: "translate(0px,0px) scale(1)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        blob: "blob 12s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
