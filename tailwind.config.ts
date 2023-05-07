import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#CC66FF",
        accent: "#CC66FF",
        "accent-dark": "hsl(280,100%,50%)",
        background: "#040209",
      },
    },
  },
  plugins: [],
} satisfies Config;
