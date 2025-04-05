/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          'sports-primary': '#0E76FD',
          'sports-secondary': '#1C2331',
          'sports-accent': '#FF4563',
          'sports-dark': '#0A111F',
          'sports-light': '#F0F4F8',
          'sports-gray': '#808A9D',
          'sports-success': '#30D158',
          'sports-warning': '#FFD60A',
          'sports-error': '#FF453A',
        },
        spacing: {
          '18': '4.5rem',
          '68': '17rem',
          '100': '25rem',
          '128': '32rem',
        },
        maxHeight: {
          '3/4-screen': '75vh',
          '9/10-screen': '90vh',
        },
        height: {
          'screen-minus-header': 'calc(100vh - 4rem)',
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
          'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
          'bounce-slow': 'bounce 2s infinite',
        },
        borderRadius: {
          'xl': '1rem',
          '2xl': '1.5rem',
          '3xl': '2rem',
        },
        fontSize: {
          'xxs': '0.625rem',
        },
        boxShadow: {
          'sports': '0 4px 14px 0 rgba(0, 0, 0, 0.1)',
          'sports-lg': '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
        },
      },
    },
    plugins: [],
    darkMode: 'media',
  }