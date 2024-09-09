/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#f19509",
        primaryDark: "#e86f00",
        lightOrange: "#f1dabf",
        darkGray: "#1a1f25",
        lightGray: "#272c35",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
        },
      },
      boxShadow: {
        'lg': '4px 4px rgba(0, 0, 0, 0.6)',
        'xl': '0px 10px 10px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
  
}

