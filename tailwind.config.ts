import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#12203A",
          light: "#1B3055",
          dim: "#5A6B85",
        },
        paper: "#F5F6F3",
        brass: {
          DEFAULT: "#B9893E",
          light: "#D6AD6C",
          dark: "#8C6528",
        },
        pine: {
          DEFAULT: "#1F4D3E",
          light: "#2C6B57",
        },
        char: "#1B1F23",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};

export default config;
