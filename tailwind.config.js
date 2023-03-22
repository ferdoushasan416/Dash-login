/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
        colors: {
          "primary": "#5329FF",
          "black": {
            DEFAULT: "#100937",
          },
          "gray": {
            DEFAULT: "#E5E5E5",
            200: "#EFEFEF",
          }
        }
    },
  },
  plugins: [],
}
