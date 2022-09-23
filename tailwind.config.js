/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  daisyui: {
      themes: [
        {
          mytheme: {
          
 "primary": "#db89ff",
          
 "secondary": "#fbccff",
          
 "accent": "#43ce33",
          
 "neutral": "#191B1F",
          
 "base-100": "#E7E6EA",
          
 "info": "#7D97D8",
          
 "success": "#1BC58D",
          
 "warning": "#F7C25F",
          
 "error": "#F13B72",
          },
        },
      ],
    },
  plugins: [require("daisyui")],
}
