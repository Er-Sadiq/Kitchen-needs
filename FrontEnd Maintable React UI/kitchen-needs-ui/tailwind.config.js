/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        MidNight: '#23263A',
        Accent: '#A0D74A',
        pWhite: '#2F4F4F',  
        fontColor: '#2F4F4F', 
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}

