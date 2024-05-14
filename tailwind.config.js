/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    extend: {
      colors: {
        gray: {
          light: "#ededed",
          base: "#f6f6f6",
          dark: "#fafafa",
          disabled: "#d5d5d5",
        },
        typography: {
          title: "#000000",
          title_reverse: "#ffffff",
          subtitle: "#545454",
          subdued: "#a4a4a4",
          disabled: "#d5d5d5",
        }


      },
    },
  },
  plugins: [],
}

