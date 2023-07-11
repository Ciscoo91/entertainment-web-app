/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx,ts}"],
  theme: {
    extend: {
      colors: {
        primary: "#161D2F",
        secondary: "#5A698F",
        dark: "#10141E",
        danger: "#FC4747",
        transparency: "#00000030"
      },
      fontFamily: {
        primary: ['Outfit sans-serif']
      }
    },
  },
  plugins: [],
}

