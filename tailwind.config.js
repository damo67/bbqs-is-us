/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ember: { DEFAULT: '#e8511a', dark: '#c4410f', light: '#ff7043' },
        charcoal: { DEFAULT: '#1a1a1a', light: '#2d2d2d' },
        smoke: '#4a4a4a',
        ash: '#9e9e9e',
        cream: '#fdf6ec',
        'warm-white': '#fefcf7',
        gold: { DEFAULT: '#f5a623', dark: '#d4911e' },
      },
    },
  },
  plugins: [],
}
