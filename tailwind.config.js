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
      fontSize: {
  'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'h2': ['2rem', { lineHeight: '1.25' }],
  'h3': ['1.5rem', { lineHeight: '1.3' }],
  'body': ['1rem', { lineHeight: '1.5' }],
  'sm': ['0.875rem', { lineHeight: '1.5' }],
  'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.05em' }],
},
      
    },
  },
  plugins: [],
}