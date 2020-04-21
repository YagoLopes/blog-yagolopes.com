const siteMetadata = require("./src/siteMetadata")
module.exports = {
 siteMetadata,
 plugins: [
  {
   resolve: `gatsby-source-filesystem`,
   options: {
    name: `src`,
    path: `${__dirname}/src/`,
   },
  },
  `gatsby-plugin-react-helmet`,
  `gatsby-transformer-remark`,
  `gatsby-plugin-styled-components`,
 ],
}
