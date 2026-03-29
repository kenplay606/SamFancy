/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chinatown-red': '#DC143C',
        'gold-accent': '#D4AF37',
      },
      fontFamily: {
        'headline': ['Anton', 'sans-serif'],
        'body': ['Inter', 'Helvetica Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
