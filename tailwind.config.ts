import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'tb': '1025px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        drop: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0%)', opacity: '1' },
        },
        rise: {
          '0%': { transform: 'translateY(0%)', opacity: '1' },
          '100%': { transform: 'translateY(-100%)', opacity: '0' },
        },
        sideDrop: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
        sideRise: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        appear: {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'}
        },
        disappear: {
          '0%': {opacity: '1', transform:'translateZ(0%)'},
          '100%': {opacity: '0', transform:'translateZ(100%)', pointerEvents: 'none'}
        },
      },
      animation: {
        drop: 'drop 1s ease-out forwards',
        rise: 'rise 1s ease-out forwards',
        sidedrop: 'sideDrop 0.5s ease-out forwards',
        siderise: 'sideRise 0.5s ease-out forwards',
        appear: 'appear 0.5s ease-out forwards',
        disappear: 'disappear 0.5s ease-out forwards',
        
      },
    },
  },
  plugins: [],
};

export default config;
