import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Page surfaces — white-dominant, faint purple tint as it deepens
        ink: {
          950: "#ffffff",
          900: "#faf7ff",
          800: "#f3ecfb",
          700: "#e9dff5",
        },
        // "rose" → bold purples (kept the key so existing class names keep working)
        rose: {
          champagne: "#a78bfa", // soft lavender
          dust:      "#7c3aed", // bold royal purple
          wine:      "#6d28d9",
          burgundy:  "#581c87", // deep plum (used in big gradients)
          blush:     "#2e1065", // primary text — dark purple on white
        },
        // "gold" → bold purple accent (shimmer, dividers, captions)
        gold: {
          DEFAULT: "#7c3aed",
          soft:    "#a78bfa",
          deep:    "#4c1d95",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        sans:    ["var(--font-sans)", "system-ui", "sans-serif"],
        mono:    ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      letterSpacing: {
        luxe: "0.22em",
        cinema: "0.42em",
      },
      animation: {
        "fade-up":   "fadeUp 1.2s cubic-bezier(0.16,1,0.3,1) forwards",
        "shimmer":   "shimmer 8s linear infinite",
        "marquee":   "marquee 40s linear infinite",
        "marquee-reverse": "marquee-reverse 40s linear infinite",
        "grain":     "grain 8s steps(10) infinite",
        "pulse-glow": "pulseGlow 4s ease-in-out infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(28px)" },
          "100%": { opacity: "1", transform: "translateY(0)"   },
        },
        shimmer: {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        marquee: {
          "0%":   { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%":   { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-5%,-10%)" },
          "30%": { transform: "translate(3%,-15%)" },
          "50%": { transform: "translate(12%,9%)" },
          "70%": { transform: "translate(-9%,4%)" },
          "90%": { transform: "translate(-4%,-2%)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.4", transform: "scale(1)" },
          "50%":      { opacity: "0.9", transform: "scale(1.08)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
