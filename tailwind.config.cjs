/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'caveat':['"Caveat"', "cursive"]
      },
      animation: {
        'bounce-slow': 'bounce 3s linear infinite',
      }
    },
  },
  plugins: [],
}
