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
      height: {
        "10v": "10vh",
        "20v": "20vh",
        "30v": "30vh",
        "40v": "40vh",
        "50v": "50vh",
        "60v": "60vh",
        "70v": "70vh",
        "80v": "80vh",
        "90v": "90vh",
        "100v": "100vh",
      },
    },
  },
  plugins: [],
}

