/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 0px 4px 4px rgb(215, 83, 210)',
      },
    },
  },
  plugins: [],
}