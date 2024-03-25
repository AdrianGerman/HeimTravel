/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      sanFrancisco: "url('/public/assets/img/sanFrancisco.jpg')",
      sanFranciscoDesktop: "url('/public/assets/img/sanFranciscoDesktop.jpg')",
      yosemite: "url('/public/assets/img/yosemite.jpg')",
      LA: "url('/public/assets/img/LA.jpg')",
      seattle: "url('/public/assets/img/seattle.jpg')",
      new_york: "url('/public/assets/img/new_york.jpg')",
      norway: "url('/public/assets/img/norway.jpg')",
      sydney: "url('/public/assets/img/sydney.jpg')",
      miami: "url('/public/assets/img/miami.jpg')",
      switzerland: "url('/public/assets/img/switzerland.jpg')",
      bali: "url('/public/assets/img/bali.jpg')",
      chicago: "url('/public/assets/img/chicago.jpg')",
      europe: "url('/public/assets/img/europe.jpg')",
      iceland: "url('/public/assets/img/iceland.jpg')",

      backgroundColor: (theme) => ({
        ...theme("color"),
        primary: "#7611a6",
        secondary: "#d5873b",
        tertiary: "#61AEC9",
      }),
      textColor: {
        primary: "#7611a6",
        secondary: "#d5873b",
        tertiary: "#61AEC9",
      },
    },
    fontFamily: {
      Tauri: ["Tauri", "sans-serif"],
    },
  },
  plugins: [],
};
