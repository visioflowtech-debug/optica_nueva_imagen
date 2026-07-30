/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand accent — óptica, confianza, claridad visual
        brand: {
          DEFAULT: 'oklch(0.55 0.14 235)',
          dark:    'oklch(0.40 0.13 235)',
          light:   'oklch(0.94 0.03 235)',
        },
        whatsapp: '#25D366',
        ink:        'oklch(0.24 0.02 250)',
        inkMuted:   'oklch(0.45 0.02 250)',
        surface:    'oklch(0.99 0.003 250)',
        surfaceAlt: 'oklch(0.965 0.006 250)',
        borderSoft: 'oklch(0.90 0.01 250)',
      },
      fontFamily: {
        sans: ['var(--font-body)', 'sans-serif'],
        display: ['var(--font-display)', 'sans-serif'],
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
