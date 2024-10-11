/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
      'open-sea' : "url('/workspace/AroundTheWorld/frontend/src/assets/Bg1.jpg')",
    }},
  },
  plugins: [],
}

