/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    screens: {
      xs1: { min: '0px', max: '403px' },
      xs2: { min: '404px', max: '639px' },
      sm1: { min: '640px', max: '703px' },
      sm2: { min: '704px', max: '767px' },
      md1: { min: '768px', max: '929px' },
      md2: { min: '930px', max: '1023px' },
      lg1: { min: '1024px', max: '1151px' },
      lg2: { min: '1152px' }
 
    },
    extend: {}
  },
  plugins: []
}