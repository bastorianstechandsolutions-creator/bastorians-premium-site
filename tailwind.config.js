/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        brand: {
          blue: '#0055FF', // Electric bright blue
          lightBlue: '#3377FF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Geist', 'sans-serif'],
      },
      backgroundImage: {
        'glass': 'linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.0) 100%)',
      }
    },
  },
  plugins: [],
}