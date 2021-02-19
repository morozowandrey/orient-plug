module.exports = {
  flags: {
    DEV_SSR: false,
  },
  siteMetadata: {
    title: `Chornobyl`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-190159524-1',
        head: true,
      },
    },
  ],
}
