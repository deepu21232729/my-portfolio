import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: "#07080a", 900: "#0b0c0f", 800: "#111317", 700: "#181b20" },
        mist: { DEFAULT: "#ecebe6", 400: "#a4a6ab", 500: "#7d8087", 600: "#53565c" },
        accent: "#d7b98a",
      },
      fontFamily: {
        sans: ['"Inter Variable"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
      },
      transitionTimingFunction: { cine: "cubic-bezier(0.22, 1, 0.36, 1)" },
    },
  },
  plugins: [],
};
export default config;
