/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        infinitescroll: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '50%': {
            transform: 'translateX(-154%)'
          },
          '100%': {
            transform: 'translateX(0%)'
          }
        },
        rtlinfinitescroll: {
          '0%': {
            transform: 'translateX(-154%)'
          },
          '50%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-154%)'
          }
        },
        // spin: {
        //   to : {
        //     transform: 'rotate(1turn)'
        //   }
        // },
      }
    }
  },
  plugins: []
}


