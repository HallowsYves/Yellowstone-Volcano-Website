/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        gold: '#FFD700',
        'gold-muted': '#B8960C',
        'gold-dim': 'rgba(255,215,0,0.15)',
        ash: '#8B8B8B',
        ember: '#8B1A1A',
        lava: '#C43E00',
        'surface': '#111111',
        'surface-2': '#222222',
      },
      fontFamily: {
        serif: ['"Noto Serif"', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['"Public Sans"', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'widest-2': '0.4em',
        'widest-3': '0.6em',
      },
      borderRadius: {
        DEFAULT: '0',
        sm: '0',
        md: '0',
        lg: '0',
        xl: '0',
        '2xl': '0',
        '3xl': '0',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
