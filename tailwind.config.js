/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      fontWeight: {
        thin: 100,
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
    },
    variants: {
      extend: {
        fontStyle: ["hover", "focus"],
      },
    },
    colors: {
      transparent: "transparent",
      white: "#FFFFFF",
      primary: "#6B3CC9",
      secondary: "#F28D35",
      analogous1: "#6A44F2",
      analogous2: "#1CBDDD",
      triadic1: "#52378C",
      dark1: "#78BF91",
      dark2: "#4DCA79",
      text1: "#2F2F2F",
      text2: "#100C08",
      "text-light": "#545A75",
      "text-subtle": "#9C9991",
      accent1: "#E2F2FE",
      accent2: "#FFF8E0",
      error: "#FF0335",
      success: "#5EB30B",
    },
  },
  plugins: [],
};
