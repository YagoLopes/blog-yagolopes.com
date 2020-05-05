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
  `gatsby-transformer-remark`,
  `gatsby-plugin-react-helmet`,
  `gatsby-plugin-styled-components`,
  {
   resolve: `gatsby-transformer-rehype`,
   options: {
    plugins: [
     {
      resolve: `gatsby-rehype-prismjs`,
     },
    ],
   },
  },
 ],
}
