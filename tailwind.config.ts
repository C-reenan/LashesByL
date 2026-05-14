import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070406",
          900: "#0b0709",
          800: "#120c10",
          700: "#1a1116",
        },
        rose: {
          champagne: "#d8b896",
          dust:      "#c89b8a",
          wine:      "#5a1f30",
          burgundy:  "#3a121d",
          blush:     "#e8c4b8",
        },
        gold: {
          DEFAULT: "#c9a16a",
          soft:    "#e3c79a",
          deep:    "#8a6a40",
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
