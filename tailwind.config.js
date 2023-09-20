/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'soft-blue': '#8bacda',
        'primary-cyan': '#00fff7',
        'main-bg': '#0d192b',
        'card-bg': '#14253d',
        'blue-line': '#2f415b'
      }, backgroundImage: {
        "hero-hover": "url('src/assets/images/icon-view.svg')",
        "hero": "url('src/assets/images/image-equilibrium.jpg')"
      }
    },
  },
  plugins: [],
}

