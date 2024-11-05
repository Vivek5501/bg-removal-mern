/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelPink: '#FDE2E4',
        pastelLavender: '#DAD7FF',
        pastelMint: '#B8E8D3',
        pastelBlue: '#D0E2FF',
      },
    },
  },
  plugins: [],
}