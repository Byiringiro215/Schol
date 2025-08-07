/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/LandingPageComponents/**/*.{js,ts,jsx,tsx}",
    "./src/DashboardComponents/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/components/LandingPage/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',   
        '20': '5rem',      
        '22': '5.5rem',  
        '24': '6rem',      
        '26': '6.5rem',  
        '28': '7rem',     
        '30': '7.5rem',   
        '32': '8rem',      
        '34': '8.5rem',    
        '36': '9rem',     
        '38': '9.5rem',    
        '40': '10rem',     
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
