module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/app.scss";`
      }
    }
  },
  publicPath: process.env.NODE_ENV === "production" ? "/ScreenIndiaV2/" : "/"
};
