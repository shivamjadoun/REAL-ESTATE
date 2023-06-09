/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow:{
        "btn": "0px 10px 15px rgba(1,115,,153,0.2);"

      },
      fontSize: {
        sm: "0.7rem", //12px
        base: ".875rem", //14px
        md: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "1.5rem", //24px
        "2xl": "1.75rem", //28px
        "3xl": "2.25rem", //36px
      },
      colors: {
        gray: {
          dark: "#C4C4C4",
          light: "E5E5E5",
        },
        black: {
          light: "#242527",
          dark: "#2B2B2B",
        },
      },
    },
  },
  plugins: [],
};
