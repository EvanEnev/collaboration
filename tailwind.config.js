/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./components/**/*.js', './app/**/*.js'],
  theme: {
    backgroundColor: {
      DEFAULT: '#000000',
      white: '#FFFFFF',
    },
    textColor: {DEFAULT: '#FFFFFF', black: '#000000'},
  },
  plugins: [],
};
