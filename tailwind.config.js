/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        custom: "#A0CC8B",
        line: "#36691C",
      },
      colors: {
        enterRound1: "#275112",
        enterRoundBorder: "#353434",
        body2: "#98B08C",
        blocks: "#D9D9D9",
        community: "#787777",
        social: "#36691C",
      },
      fontFamily: {
        graphik: ["Graphik", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
