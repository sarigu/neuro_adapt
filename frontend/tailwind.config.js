/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography'

module.exports = {
    content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        highlight: '#4f39f6'
      },
      fontFamily: {
        primary: ['Savate', 'sans-serif'],
      },
    },
  },
  plugins: [
    typography
  ],
}

