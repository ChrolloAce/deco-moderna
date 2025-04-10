import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Black
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E5C158',
          dark: '#B38B2D',
        },
        accent: {
          DEFAULT: '#D4AF37', // Gold
          light: '#E5C158',
          dark: '#B38B2D',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config 