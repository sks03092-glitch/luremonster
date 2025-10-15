import type { Config } from "tailwindcss";

export default {
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
      },
    },
  },
  plugins: [],
} satisfies Config;
