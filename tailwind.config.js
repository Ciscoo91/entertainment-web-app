/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#FC4747",
        dark: "#10141E",
        secondary: "#5A698F",
        lightDark: "#161D2F",
      },
      fontFamily: {
        primary: ['Outfit sans-serif']
      }
    },
  },
  plugins: [],
}

