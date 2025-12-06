import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Sand Beige backgrounds
        sand: {
          DEFAULT: '#F5E6D3',
          light: '#FAF9F7',
        },
        // Travel Blue (Primary)
        'travel-blue': {
          DEFAULT: '#2563EB',
          hover: '#1E4FCF',
          light: '#3B82F6',
        },
        // Text colors
        title: '#111827',
        paragraph: '#6B7280',
        'light-gray': '#9CA3AF',
        // Card/UI
        card: {
          bg: '#FFFFFF',
          border: '#E5E7EB',
        },
        // Navigation
        nav: {
          active: '#1F2937',
          inactive: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
