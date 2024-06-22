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
        xs: '12px', // Extra small text
        sm: '14px', // Small text
        base: '16px', // Base text
        lg: '18px', // Large text
        xl: '20px', // Extra large text
        '2xl': '24px', // 2X large text
        '3xl': '30px', // 3X large text
        '4xl': '36px', // 4X large text
        '5xl': '48px', // 5X large text
        '6xl': '60px', // 6X large text
      }
    },
  },
  plugins: [],
}
