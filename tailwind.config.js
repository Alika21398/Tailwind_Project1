/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    extend: {
      backgroundImage:{
        'backcar':'url(/src/img/11.jpg)',
        'car1':'url(/src/img/2.jpg)',
        'car2':'url(/src/img/1.jpg)',
        'car3':'url(/src/img/3.jpg)'

      },
      textColor:{
        'brand':'#FFB84B',
      },
    },
  },
  plugins: [],
}

