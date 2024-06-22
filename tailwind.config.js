/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"]
      },
      colors: {
        yellow_dark: "#FBBF24",
        background: "#FFFBEB",
        text_color: "#78350F",
        sneakers: "#FBBF24",
        card_color: "#0F172A",
        collected :"#78350F",
        collected_text:"#FFFBEB"
      },
      fontSize: {
        xs: '12px', 
        sm: '18px', 
        base: '16px', 
        lg: '18px', 
        xl: '20px', 
        '2xl': '40px', 
        '3xl': '30px', 
        '4xl': '45px', 
        '5xl': '52px', 
        '6xl': '60px', 
      }
    },
  },
  plugins: [],
}
