import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#AA96DA",
        accent: "hsl(280,100%,70%)",
        "accent-dark": "hsl(280,100%,50%)",
        background: "#040209",
      },
    },
  },
  plugins: [],
} satisfies Config;
