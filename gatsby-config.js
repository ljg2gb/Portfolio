/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {

  siteMetadata: {
    title: `Lydia Gregory Portfolio`,
    description: `Web Development portfolio for Washington, DC based software engineer Lydia Gregory.`,
    author: `Lydia Gregory`, 
  },
  plugins: [`gatsby-plugin-sass`,
    { resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Jost`,
            variants: [`400`,`400 italic`, `700`]
          }
        ],
      },
    }
  ],
}
