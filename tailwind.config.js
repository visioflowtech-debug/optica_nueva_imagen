/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma design tokens
        navy:       '#1B3A4B',
        navyLight:  '#243F55',
        gold:       '#C9973A',
        goldLight:  '#DFB55A',
        lightBg:    '#F0F4F8',
        borderCol:  '#E2E8F0',
        textMuted:  '#64748B',
        // Corporate palette
        primaryRed: '#8C1B2A',
        brandGreen: '#7E9C65',
        brandBlue:  '#6A8CA3',
        darkGray:   '#2C3539',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1B3A4B 0%, #0F2535 50%, #162D3D 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%':   { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up':  'fadeUp 0.5s ease forwards',
        'slide-in': 'slideIn 0.3s ease forwards',
      },
    },
  },
  plugins: [],
};
