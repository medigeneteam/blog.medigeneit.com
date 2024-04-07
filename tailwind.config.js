/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      typography: require("./typography"),
      colors: {
        primary: {
          400: "rgb(244 114 182)",
          500: "rgb(236 72 153)",
          600: "rgb(219 39 119)",
        },
      },
      container: {
        center: true,
        padding: "2rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          lg: "1024px",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
