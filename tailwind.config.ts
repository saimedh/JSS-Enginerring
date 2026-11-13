import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette
        navy: {
          DEFAULT: "#0B2A4A",
          50: "#E8F0F8",
          100: "#C5D8ED",
          200: "#9DBEDE",
          300: "#74A3CE",
          400: "#4C89BE",
          500: "#2F6FA0",
          600: "#1D557E",
          700: "#0B2A4A",
          800: "#071D33",
          900: "#03101C",
        },
        orange: {
          DEFAULT: "#F26B1D",
          50: "#FEF3EC",
          100: "#FDD9BA",
          200: "#FBBF87",
          300: "#F9A454",
          400: "#F78A22",
          500: "#F26B1D",
          600: "#C4511A",
          700: "#943C13",
          800: "#63280D",
          900: "#321406",
        },
        steel: {
          DEFAULT: "#6B7785",
          50: "#F2F3F5",
          100: "#D9DCE1",
          200: "#BFC5CC",
          300: "#A5ADB8",
          400: "#8B96A3",
          500: "#6B7785",
          600: "#555F6B",
          700: "#3F4650",
          800: "#2A2F36",
          900: "#14171B",
        },
        arcblue: {
          DEFAULT: "#1E88E5",
          light: "#64B5F6",
          dark: "#1565C0",
        },
        furnace: "#10151C",
        mill: "#F5F7FA",
        ash: "#D9DFE6",
        safegreen: "#2E9E5B",
        caution: "#F2B01E",
        alertred: "#D64545",
      },
      fontFamily: {
        heading: ["var(--font-rajdhani)", "Rajdhani", "Barlow Condensed", "sans-serif"],
        body: ["var(--font-inter)", "Inter", "sans-serif"],
      },
      scale: {
        "102": "1.02",
        "105": "1.05",
        "108": "1.08",
      },
      transitionDuration: {
        "400": "400ms",
      },
      fontWeight: {
        "500": "500",
        "600": "600",
        "700": "700",
        "800": "800",
      },
      animation: {
        "marquee": "marquee 32s linear infinite",
        "marquee2": "marquee2 32s linear infinite",
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        fadeUp: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.85" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
