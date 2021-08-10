module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.ts"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-background': '#121212'
      },
      zIndex: {
        '-100': '-100'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
