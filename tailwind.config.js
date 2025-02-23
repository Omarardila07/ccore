/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 15s linear infinite",
        "pulse-slow": "pulse 10s infinite",
      },
    },
  },
  plugins: [],
}

