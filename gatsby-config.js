module.exports = {
  pathPrefix: "/countdown-timer",
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          indentedSyntax: true,
          includePaths: ["src/styles"],
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
        icon: `src/images/icon.png`,
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
