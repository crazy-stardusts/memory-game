/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  safelist: [
    'bg-[#53C3F8]',
    'bg-[#FF7070]',
    'bg-[#FFE559]',
    'bg-[#7DD13E]',
    'text-[#53C3F8]',
    'text-[#FF7070]',
    'text-[#FFE559]',
    'text-[#7DD13E]'
  ],
  theme: {
    extend: {
      fontFamily: {
        playpen: ['"Playpen Sans"', 'cursive'], 
      }
    },
  },
  plugins: [],
}
