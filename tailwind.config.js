/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: 'selector',
  theme: {
    extend: {
      colors: {
        'light-asphalt': '#44607b', // rgb(68, 96, 123)
        'wet-asphalt': '#34495E', // rgb(52, 73, 94)
        'dark-asphalt': '#1d2834', // rgb(29, 40, 52)
        'silver': '#BDC3C7', // rgb(189, 195, 199)
        'dark-silver': '#989c9f', // rgb(152, 156, 159)
        'turquoize': '#1ABC9C' // rgb(26, 188, 156)
      },
      fontFamily: {
        ubuntu: ['Ubuntu', 'sans-serif']
      }
    },
  },
  plugins: [],
}

