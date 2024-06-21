/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      fontFamily:{
        roboto:["Roboto", "sans-serif"]
      } ,
      colors:{
        "yellow_dark":"#FBBF24",
        "background" :"#FFFBEB",
        "text_color" :"#78350F",
        "sneakers":"#FBBF24",
        "card_color":"#0F172A"

    }
    

    },
  },
  plugins: [],
}

