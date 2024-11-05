/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex:{
        '-2':'-2',
      },
      boxShadow: {
        'white': '0 2px 2px rgba(255, 255, 255, 0.5)',
      }
    },
  },
  plugins: [],
}

