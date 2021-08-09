module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-background': '#121212'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
