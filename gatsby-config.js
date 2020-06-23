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

  {
   resolve: `gatsby-transformer-remark`,
   options: {
    plugins: [
     {
      resolve: `gatsby-remark-prismjs`,
      options: {
       aliases: { sh: "bash", js: "javascript" },
       showLineNumbers: true,
      },
     },
    ],
   },
  },
  `gatsby-plugin-styled-components`,
 ],
}
