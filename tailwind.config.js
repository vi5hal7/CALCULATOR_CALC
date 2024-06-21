/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'gray-700': '#555',
        'gray-800': '#444444',
        'gray-900': '#1D1D1D',
        'orange-500': '#FE6602',
        'gray-600': '#868686',
      }
    },
  },
  plugins: [],
}

