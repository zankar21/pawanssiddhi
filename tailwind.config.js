// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  theme: {
    // Custom type and spacing scales
    fontSize: {
      '3xl': ['2.25rem', { lineHeight: '2.5rem' }],   // 36px
      '2xl': ['1.875rem', { lineHeight: '2.25rem' }], // 30px
      xl:   ['1.5rem',   { lineHeight: '2rem'   }], // 24px
      lg:   ['1.25rem',  { lineHeight: '1.75rem'}], // 20px
      base: ['1rem',     { lineHeight: '1.5rem' }], // 16px
      sm:   ['0.875rem', { lineHeight: '1.25rem'}], // 14px
    },
    spacing: {
      px: '1px',
      0: '0',
      2: '0.5rem',  // 8px
      4: '1rem',    // 16px
      6: '1.5rem',  // 24px
      8: '2rem',    // 32px
      12: '3rem',   // 48px
      16: '4rem',   // 64px
      24: '6rem',   // 96px
    },
    extend: {
      colors: {
        // Sophisticated neutrals + one bold accent
        offWhite:      '#FAF9F7',
        charcoal:      '#111827',
        slate:         '#475569',
        primary:       '#0D9488', // teal-600
        accent:        '#F59E0B', // amber-500
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],  // high-contrast display
        body:    ['Inter', 'sans-serif'],         // clean humanist
      },
    },
  },
  plugins: [],
};
