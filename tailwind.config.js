/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#002855", // Blue color as it was before
        "primary-hover": "#B71C1C",
        "logo-orange": "#E65100", // Orange part of the shield
        "text-dark": "#1F2937", // Slate-800
        "text-light": "#F3F4F6", // Gray-100
        "background-light": "#FFFFFF",
        "background-dark": "#111827", // Gray-900
        "primary-dark": "#000080",
        "card-beige": "#F9F6F1", // Light beige for the card background
        "card-dark": "#1F2937",
        "nav-active": "#FCF8F3", // Very light beige for active nav
        "nav-active-dark": "#374151",
      },

      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },

      borderRadius: {
        DEFAULT: "0.375rem",
      },
    },
  },
  plugins: [],
};
