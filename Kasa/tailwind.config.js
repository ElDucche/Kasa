/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
    colors: {
      primary: '#FF6060',
      black: '#000000',
      white: '#FFFFFF',
    },
    extend: {},
  },
  plugins: [],
}