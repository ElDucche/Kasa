/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      colors: {
        primary: '#FF6060',
        secondary: '#F6F6F6',
      },
      keyframes: {
        reveal: {
          '0%' : { 
            transform: 'translateY(-50px)' ,
            opacity: 0,
          },
          // '80%': {
          //   opacity: 0,
          // },
          '100%': { 
            transform: 'translateY(-12px)' , 
            opacity: 1
          }
        },
        hide: {
          from: {
            transform: 'translateY(-12px)' , 
            opacity: 1
          },
          to : { 
            transform: 'translateY(-50px)' ,
            opacity: 0,
            display: 'none',
          },
        },
      },  
      animation: {
        reveal: 'reveal 200ms ease-in-out forwards',
        hide: 'hide 200ms ease-in-out forwards',
      },
    },
    plugins: [],
  }
}