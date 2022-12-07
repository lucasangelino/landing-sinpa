/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(#051d7a, #010824)",
      },
      dropShadow: {
        "4xl": [
          "0px 0px 20px rgba(255, 221, 31, 0.75)",
          "0 0px 30px rgba(255, 221, 31, 0.95)",
        ],
      },
      animation: {
        "moving-background": "moving-background 5s ease-in-out",
      },
      keyframes: {
        "moving-background": {
          "0%": {
            transform: "translateY(0)",
            opacity: 0,
          },
          "66%": {
            opacity: 0.4,
          },
          "100%": {
            transform: "translateY(-150px)",
            opacity: 0,
          },
        },
      },
      colors: {
        gaia: {
          blue: {
            100: "#FFC837",
            200: "#1A2C5E",
          },
          white: {
            100: "#FFFFFF",
          },
          yellow: {
            100: "#fff601",
          },
        },
      },
    },
  },
  plugins: [],
};
