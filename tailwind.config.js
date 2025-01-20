/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
  ],
  theme: {
    extend: {
      colors: {
        fundo: "#faf2f0",
        roxo: {
          100 : "#f1ecf3",
          200: "#e5dde8",
          300: "#d9cede",
          400 : "#cdbfd4",
          500: "#c1b0c9",
          600: "#b6a0bf",
          700: "#9372a0"
          
        } 
        
        
      }
    },
  },
  plugins: [],
}

