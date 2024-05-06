import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      sans: ['var(--font-open-sans)'],
      handwritten: ['var(--font-sacramento)'],
      inter: ['var(--font-inter)']
    },
    extend: {    
      colors: {
        sell: "#7ed956",
        glass: "#ffffff1a",
        border: "#ffffff33",
      },
    },
  },
  plugins: [],
};
export default config;
