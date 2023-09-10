module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          primary: "#EBF3FA",
          secondary: "#E3EDF7",
          "blue-dark": "#31456A",
          "blue-light": "#7687A1",
        },
        dark: {
          "blue-light": "#7687a1",
        },
      },
      animation: {
        "fade-in": "fade-in 200ms ease-out 0s 1 normal forwards running",
        "fade-out": "fade-out 200ms ease-in 0s 1 normal forwards running",
        expand: "expand 400ms linear 0s 1 normal forwards running",
        "slide-in": "slide-in 400ms linear 0s 1 normal forwards running",
        "slide-out": "slide-out 400ms linear 0s 1 normal forwards running",
        collapse: "collapse 400ms linear 0s 1 normal forwards running",
      },

      fontSize: {
        "4xs": "0.5rem", // 10px
        "3xs": "0.65rem", // 12px
        xxs: "0.8125rem", // 13px
        xs: "0.875rem", // 14px
        sm: "0.9375rem", // 15px
        "2xl": "1.75rem", // 28px
        "3xl": "1.875rem", // 36px
      },
      zIndex: {
        "-1": "-1",
        "-10": "-10",
        "-20": "-20",
      },
      transitionProperty: {
        width: "width",
      },
      animation: {
        "moving-background": "moving-background 5s ease-in-out",
        "slide-text": "slide 5s infinite",
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
        slide: {
          "0%": {
            top: 0,
          },
          "25%": {
            top: "-1.2em",
          },
          "50%": {
            top: "-2.4em",
          },
          "75%": {
            top: "-3.6em",
          },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
