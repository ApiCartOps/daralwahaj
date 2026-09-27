import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#f2f2f3",
        ink: "#1d1f20",
        navy: "#062551",
        "navy-deep": "#041b3d",
        "navy-mid": "#0a3470",
        accent: "#0b4a8f",
        "accent-600": "#093d77",
        "accent-700": "#07315f",
        orange: "#f39a1e",
        "orange-light": "#ffae3d",
      },
      fontFamily: {
        heading: ["var(--font-heading)", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
