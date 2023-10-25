/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)']
      },
      boxShadow: {
        "button": '0px 0px 0px 0px rgba(255, 213, 104, 0.24), 0px 1px 3px 0px rgba(255, 213, 104, 0.24), 0px 5px 5px 0px rgba(255, 213, 104, 0.20), 0px 11px 7px 0px rgba(255, 213, 104, 0.12), 0px 20px 8px 0px rgba(255, 213, 104, 0.04), 0px 31px 9px 0px rgba(255, 213, 104, 0.00)'
      },
      backgroundImage: {
        "gradient-form": "linear-gradient(to top, #f2f4f8 75%, #19202D 25%);"
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        ice: {
          light: '#f2f4f8'
        },
        gray: {
          light: '#ACB1BA',
          DEFAULT: '#5A646E'
        },
        yellow: {
          dark: '#FFB800'
        },
        blue: {
          dark: '#19202D'
        },
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}