/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Manrope: "Manrope",
        Covered_By_Your_Grace: "Covered By Your Grace",
        Questrial: "Questrial",
        Noto_Sans: "Noto Sans",
      },
      screens: {
        xxs: "320px",
        xs: "480px",
        ssm: "620px",
        sm: "768px",
        mmd: "920px",
        md: "1024px",
        lg: "1280px",
        xl: "1440px",
        xxl: "1920px",
      },
    },
  },
  plugins: [],
};
