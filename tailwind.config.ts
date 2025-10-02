import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        black: "var(--black)",
        blackSecondary: "var(--blackSecondary)",
        text: "var(--text)",
        textSecondary: "var(--textSecondary)",
        background: "var(--background)",
        backgroundSecondary: "var(--backgroundSecondary)",
        gradientStart: "var(--gradient-start)",
        gradientEnd: "var(--gradient-end)",
      },
    },
  },
  plugins: [],
};

export default config;
