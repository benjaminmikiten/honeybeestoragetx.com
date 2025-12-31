/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#FAB516",
        "yellow-light": "#fbc444",
        blue: "#074F83",
        "blue-dark": "#063f69",
        dark: "#1F1300",
        grey: "#666",
        green: "#078379",
        white: "#F4F2F3",
        "uhaul-brand": "#ff5314",
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      fontFamily: {
        sans: ["Source Sans Pro", "sans-serif"],
      },
      spacing: {
        "mobile-margin": "18px",
        "tablet-margin": "48px",
        "desktop-margin": "64px",
        "mobile-gutter": "16px",
        "tablet-gutter": "16px",
        "desktop-gutter": "24px",
      },
      maxWidth: {
        container: "1200px",
      },
    },
  },
  plugins: [],
};
