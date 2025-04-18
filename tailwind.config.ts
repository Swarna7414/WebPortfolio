/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        glow: 'glow 2s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%, 100%': {
            boxShadow: '0 0 15px 5px rgba(59,130,246,0.5)',
          },
          '50%': {
            boxShadow: '0 0 25px 10px rgba(59,130,246,0.8)',
          },
        },
      },
    },
  },
  plugins: [],
}