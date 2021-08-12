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
      },
      keyframes: {
        updown: {
          '0%': {transform: 'translateY(-1%) translateX(-.15%)'},
          '50%': {transform: 'translateY(1%) translateX(.15%)'},
          '100%': {transform: 'translateY(-1%) translateX(-.15%)'}
        }
      },
      animation: {
        updown: 'updown 3s ease-in-out infinite'
      }
    },
  },
  variants: {
    extend: {
      ringColor: ['hover'],
      ringWidth: ['hover'],
    },
  },
  plugins: [],
}
