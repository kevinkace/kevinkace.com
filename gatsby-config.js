const title       = 'kevinkace.dev';
const description = 'Portfolio site for Kevin Cameron';

module.exports = {
  siteMetadata: {
    title,
    header: 'Kevin Cameron',
    description,
    author: '@kevinkace',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `${title} - ${description}`,
        short_name: title,
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/kevinkace-icon.png',
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: "UA-68300806-1",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg'
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ]
}
