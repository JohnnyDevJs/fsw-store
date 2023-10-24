import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-prompt)',
      },
      colors: {
        black: {
          50: '#e8e8e8',
          100: '#dddddd',
          200: '#b8b8b8',
          300: '#1a1a1a',
          400: '#171717',
          500: '#151515',
          600: '#141414',
          700: '#101010',
          800: '#0B0B0B',
          900: '#000000',
        },
        gray: {
          50: '#f0f0f0',
          100: '#e8e8e8',
          200: '#d0d0d0',
          300: '#676767',
          400: '#5d5d5d',
          500: '#525252',
          600: '#4d4d4d',
          700: '#3e3e3e',
          800: '#2a2a2a',
          900: '#242424',
        },
        purple: {
          50: '#f2efff',
          100: '#ece7ff',
          200: '#d8ceff',
          300: '#8162ff',
          400: '#7458e6',
          500: '#674ecc',
          600: '#5033C3',
          700: '#4d3b99',
          800: '#3a2c73',
          900: '#2d2259',
        },
      },
    },
  },
  plugins: [],
}
export default config
