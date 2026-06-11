import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        ink: "#060606",
        graphite: "#101010",
        glass: "rgba(255,255,255,0.07)",
        gold: "#f5c76b",
        aqua: "#24f5d2",
        violet: "#ff8a4c"
      },
      boxShadow: {
        glow: "0 0 70px rgba(36, 245, 210, 0.18)",
        premium: "0 28px 90px rgba(0, 0, 0, 0.58)"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 10%, rgba(36,245,210,0.16), transparent 30%), radial-gradient(circle at 84% 18%, rgba(245,199,107,0.13), transparent 28%), radial-gradient(circle at 50% 95%, rgba(255,138,76,0.11), transparent 34%)"
      }
    }
  },
  plugins: []
};

export default config;
