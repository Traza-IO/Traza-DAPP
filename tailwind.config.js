/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/declarations/**/*.{did,motoko}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        geistSans: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
