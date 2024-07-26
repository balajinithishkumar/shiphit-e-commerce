/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '240px', 'max': '767px'},  // between 640px and 767px
        'md': {'min': '768px', 'max': '1023px'}, // between 768px and 1023px
        'lp': {'min': '1024px', 'max': '1279px'}, // between 1024px and 1279px
        'lg': {'min': '1280px'}, // 1280px and above
      },
    },
  },
  plugins: [],
}