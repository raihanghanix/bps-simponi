import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        bpsPurple: "#C12CC9",
        bpsBlue: "#2D95C9",
        bpsGreen: "#75B547",
        bpsOrange: "#E18939",
        bpsRed: "#C92C3C",
        bpsDarkBlue: "#131842",
      },
    },
  },
  plugins: [],
};
