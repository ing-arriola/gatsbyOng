/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Gatsby Jaime Arriola Testsite",
    description: "random description",
    author: "Jaime Arriola",
    data: ["item-1", "item-2"],
    person: { name: "Gatsby", age: 25 },
  },
  plugins: [`gatsby-plugin-styled-components`],
}
