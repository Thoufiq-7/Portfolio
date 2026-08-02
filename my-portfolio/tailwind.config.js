/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#0a0a0a',
        'text-main': '#ffffff',
        'text-muted': '#888888',
        'accent-red': '#d91a1a',
        'bg-red-dark': '#561414',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        caveat: ['Caveat', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}