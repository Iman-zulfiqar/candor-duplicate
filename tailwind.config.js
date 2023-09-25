module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      
      boxShadow: {
        lg: "0 7px 14px 3px rgba(0, 0, 0, 0.3)",
        sm: "0px 7px 14px 3px rgba(0, 0, 0, 0.03)",
      },
      screens: {
        xxxs: "360px",
        xxs: "480px",
        xs: "550px",
        sm: "680px",
        md: "760px",  
        laptop: "880px",
        mid: "960px",
        lg: "1090px",
        xl: "1280px",
        xxl: "1350px",
        led: "1520px",
        xxxl: "1700px",
        xxxxl: "1920px",
        xxxxxl: "2150px",
      },
    },
  },
  plugins: [],
};
