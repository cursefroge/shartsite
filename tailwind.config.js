/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./src/components/**/*.{vue,js,ts,jsx,tsx}", // Add this line
  ],
  theme: {
    fontFamily: {
      "rubik-burned": ['Rubik Burned', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

