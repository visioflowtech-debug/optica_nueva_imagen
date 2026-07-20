/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primaryRed: '#8C1B2A', // Accento Principal (botón, banner)
        brandGreen: '#7E9C65', // Primario de Marca (iconos, hover)
        brandBlue: '#6A8CA3', // Secundario de Marca (fondos, tarjetas)
        darkGray: '#2C3539', // Texto, títulos
        lightGray: '#F3F4F6', // Fondo neutro claro
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
