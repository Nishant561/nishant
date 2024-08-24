/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{

        'xxs': {'max': '479px'},
        'xs': '480px',   // Extra small devices
        'sm': '640px',   // Small devices
        'md': '768px',   // Medium devices
        'lg': '1024px',  // Large devices
        'xl': '1280px',  // Extra large devices
        '2xl': '1536px', // 2x Extra large devices
        '3xl': '1920px', // Custom large screen
        '900':{'max':'900px'},
        '1108':{'max':'1108px'},
        '540' : {'max':'540px'},
        '523' : {'max':'523px'},
        '1180' : {'max':'1180px'},
        '670' : {'max':'670px'},
        '650' : {'max':'650px'},
        '645' : {'max':'645px'},
        '445' : {'max':'445px'},
        '742' : {'max':'742px'},
        '793' : {'max':'793px'},

      }
    },
  },
  plugins: [],
}

