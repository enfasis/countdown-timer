const path = require("path")

module.exports = {
  pathPrefix: "/countdown-timer",
  plugins: [
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@layouts": path.resolve(__dirname, "src/layouts"),
          "@styles": path.resolve(__dirname, "src/assets/styles"),
          "@images": path.resolve(__dirname, "src/assets/images"),
          "@components": path.resolve(__dirname, "src/components/"),
          "@pages": path.resolve(__dirname, "src/pages/"),
          "@helpers": path.resolve(__dirname, "src/helpers/"),
        },
        extensions: ["js"],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          indentedSyntax: true,
          includePaths: ["src/assets/styles"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Timer`,
        short_name: `tim`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/images/icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`],
      },
    },
  ],
}
