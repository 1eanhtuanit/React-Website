/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Space: "Space Grotesk",
      },
      colors: {
        "primary": "#FF4C3B",
        "secondary": "#000000",
        "tertiary": "#FFFFFF",
       
      },  
      textColor: {
        "title": "#000000",
        "subtitle": "#707070",
        "primary": "#FFFFFF",
      },
      fontSize: {
        "prima": "16px",
        "18": "18px",
        "20": "20px",
        "24": "24px",
        "28": "28px",
        "32": "32px",
        "36": "36px",
      },
      spacing: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "40": "40px",
        "50": "50px",
        "60": "60px",
        "70": "70px",
        "80": "80px",
        "90": "90px",
      },
      borderRadius: {
        "10": "10px",
        "20": "20px",
        "30": "30px",
        "40": "40px", 
        "50": "50px",
      },
      boxShadow: {
        "button": "0px 4px 4px rgba(0, 0, 0, 0.25)",
        "card": "0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
