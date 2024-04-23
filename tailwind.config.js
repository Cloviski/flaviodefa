/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Open Sans", "sans-serif"],
      cursive: ["Sacramento", "cursive"],
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
