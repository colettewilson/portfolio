require("dotenv").config({
  path: `./.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: ``,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        exclude: [``]
      }
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: ``,
        includeInDevelopment: false,
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        sitemap: `${process.env.GATSBY_SITE_URL}`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `assets/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: `${process.env.GATSBY_PROJECT_ID}`,
        dataset: `${process.env.GATSBY_DATASET}`,
        overlayDrafts: false,
        watchMode: `${process.env.GATSBY_WATCH_MODE}`,
        token: `${process.env.GATSBY_TOKEN}`
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-sass-resources`,
      options: {
        resources: [`${__dirname}/src/_global/variables.scss`]
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/assets/svg`
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
