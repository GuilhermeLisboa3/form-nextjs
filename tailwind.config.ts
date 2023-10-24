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
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          light: '#ACB1BA',
          DEFAULT: '#5A646E'
        },
        yellow: {
          dark: '#FFB800'
        },
        blue: {
          dark: '#19202D'
        }
      }
    },
  },
  plugins: [],
}
export default config
