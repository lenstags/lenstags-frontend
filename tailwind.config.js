/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gray: colors.zinc,
        green: colors.emerald,
        purple: colors.violet,
        yellow: colors.yellow,
        brand: colors.violet,
        primary: '#def702',
        hoverPrimary: '#a5b420'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp')
  ]
};
