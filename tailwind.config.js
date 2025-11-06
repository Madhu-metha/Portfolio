/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  important: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'system-ui', 'Arial', 'sans-serif'],
      },
      colors: {
        brand: {
          500: '#2563eb', // sky/blue accent feel
          600: '#1d4ed8',
        },
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.08)',
      },
      transform: {
        'preserve-3d': 'preserve-3d',
      },
    },
  },
  plugins: [],
}