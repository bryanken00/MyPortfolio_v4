/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-fontColor': '#1F1717',
        'custom-buttonBG': '#CE5A67',
        'custom-bg': '#FCF5ED',
        'custom-buttonHover': '#1D5B79',
        'custom-headerColorBG': '#CE5A67',
        'custom-headercolorScrolled': '#ffffff',
        'custom-headercolorNotScrolled': '#1F1717',
      }
    },
  },
  plugins: [],
}

