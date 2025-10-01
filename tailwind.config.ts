// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  // <— use a string here instead of ["class"]
  darkMode: "class",
  content: [
    // NOTE: these paths must start with "./", not ".src"
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neonCyan: "#00f5ff",
        neonMagenta: "#ff00f5",
        bgDark: "#0a0a0a",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(ellipse at center, #1a1a2e 0%, #0a0a0a 70%)",
        "grad-accent": "linear-gradient(45deg, #00f5ff, #ff00f5)",
      },
      keyframes: {
        gradientShift: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      animation: {
        gradientShift: "gradientShift 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
