/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    fontSize: {
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }], // 36px
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      xl: ['1.5rem', { lineHeight: '2rem' }],         // 24px
      lg: ['1.25rem', { lineHeight: '1.75rem' }],     // 20px
      base: ['1rem', { lineHeight: '1.5rem' }],       // 16px
      sm: ['0.875rem', { lineHeight: '1.25rem' }],    // 14px
    },
    spacing: {
      px: '1px',
      0: '0',
      2: '0.5rem',
      4: '1rem',
      6: '1.5rem',
      8: '2rem',
      12: '3rem',
      16: '4rem',
      24: '6rem',
    },
    extend: {
      colors: {
        offWhite: '#FAF9F7',
        charcoal: '#111827',
        slate: '#475569',
        primary: '#0D9488', // Teal-600
        accent: '#F59E0B',  // Amber-500
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
      },
      animation: {
        'bg-pan': 'bgPan 20s linear infinite',
      },
      keyframes: {
        bgPan: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      backgroundImage: {
        dotted: 'radial-gradient(circle, rgba(0,0,0,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        dotted: '20px 20px',
      },
    },
  },
  plugins: [],
};
