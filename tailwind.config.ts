import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC66FF",
        accent: "#CC66FF",
        "accent-dark": "#aa00ff",
        background: "#040209",
      },
    },
  },
  plugins: [],
} satisfies Config;
