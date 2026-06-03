/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        night: '#07070c',
        panel: '#101018',
        accent: '#a78bfa',
        gold: '#f5c76b',
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(255,255,255,0.06), 0 24px 70px rgba(111,63,255,0.22)',
        card: '0 18px 45px rgba(0,0,0,0.35)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['Space Grotesk', 'sans-serif'],
      },
      backgroundImage: {
        mesh:
          'radial-gradient(circle at top left, rgba(167,139,250,0.18), transparent 30%), radial-gradient(circle at top right, rgba(245,199,107,0.18), transparent 24%), linear-gradient(180deg, #09090f 0%, #050507 100%)',
      },
    },
  },
  plugins: [],
}
