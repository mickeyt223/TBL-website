/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0A0A0A',
        teal: {
          DEFAULT: '#20566E',
          hover: '#2B7090',
        },
        brass: {
          DEFAULT: '#A6841C',
          dark: '#7C6316',
        },
        ivory: '#F5F1E8',
        muted: '#B8B0A0',
      },
      fontFamily: {
        display: ['Quattrocento', 'Georgia', 'serif'],
        body: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        eyebrow: '0.1em',
      },
      fontSize: {
        hero: ['75px', { lineHeight: '1.1' }],
        'hero-sm': ['42px', { lineHeight: '1.1' }],
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
};
