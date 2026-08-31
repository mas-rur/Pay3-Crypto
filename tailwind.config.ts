import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0B1220",
          800: "#141C2E",
          600: "#3A4356",
          400: "#5B6472",
          200: "#AEB4BF",
        },
        paper: {
          DEFAULT: "#FFFFFF",
          soft: "#F7F8FA",
          line: "#E6E9EF",
        },
        brand: {
          DEFAULT: "#2F6FED",
          50: "#EEF3FE",
          100: "#DCE7FD",
          400: "#5A8FF3",
          600: "#2559C9",
          700: "#1B449E",
        },
        teal: {
          DEFAULT: "#2FCFC0",
        },
        violet: {
          DEFAULT: "#7C5CFC",
        },
        amber: {
          DEFAULT: "#F2A93B",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        content: "1180px",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(11,18,32,0.04)",
        glow: "0 30px 80px -20px rgba(47,111,237,0.35)",
        modal: "0 24px 64px -16px rgba(11,18,32,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-14px) rotate(1.5deg)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "spin-slow-reverse": {
          from: { transform: "rotate(360deg)" },
          to: { transform: "rotate(0deg)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96) translateY(8px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "spin-slow": "spin-slow 22s linear infinite",
        "spin-slow-reverse": "spin-slow-reverse 30s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
        "scale-in": "scale-in 0.2s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
