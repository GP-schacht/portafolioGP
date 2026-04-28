/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffa500',
        secondary: '#0e0e0e',
        background: '#000000',
        text: '#ffffff',
      },
      keyframes: {
        carousel: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-200%)' },
        },
      },
      animation: {
        carousel: 'carousel 25s linear infinite',
      },
    },
  },
  plugins: [],
}