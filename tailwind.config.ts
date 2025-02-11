import animate from "tailwindcss-animate";
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1440px",
    },
    fontFamily: {
      primary: ["var(--font-exo2)", "sans-serif"],
    },
    extend: {
      colors: {
        body: "#1d1f23",
        primary: "#151618",
        accent: {
          DEFAULT: "#f6cd46",
          hover: "#e1b72e",
        },
      },
      backgroundImage: {
        mainSlider: "url('/mainSlider_bg.png')",
      },
      keyframes: {
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0,0 )",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0,0 )",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0,0 )",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0,0 )",
          },
        },
      },
      animation: {
        shake: "shake 1s ease-in-out",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
