import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: 'D9D9D9',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#141313',
        },
        orange: {
          DEFAULT: '#FFB147'
        },
        red: {
          DEFAULT: '#FF6C63'
        },
        purple: {
          DEFAULT: '#B86ADF'
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        ibmPlexSans: ['IBM Plex Sans', 'sans-serif'],
      }
    },
  },
} satisfies Config;

export default config;
