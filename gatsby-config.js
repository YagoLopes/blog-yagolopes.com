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
      options: {
        // All code blocks will be wrapped in an additional <div>
        // containter to allow for better styling. This might break
        // your current theme. You might therefore have to provide
        // additional styling classes (below is just an example).
        divClassNames: "kg-card kg-code-card",
        // Class prefix for <pre> tags containing syntax highlighting;
        // defaults to 'language-' (e.g. <pre class="language-js">).
        // If your site loads Prism into the browser at runtime,
        // (e.g. for use with libraries like react-live),
        // you may use this to prevent Prism from re-processing syntax.
        // This is an uncommon use-case though;
        // If you're unsure, it's best to use the default value.
        classPrefix: "language-",
        // This is used to allow setting a language for inline code
        // (i.e. single backticks) by creating a separator.
        // This separator is a string and will do no white-space
        // stripping.
        // A suggested value for English speakers is the non-ascii
        // character '›'.
        inlineCodeMarker: null,
        // This lets you set up language aliases.  For example,
        // setting this to '{ sh: "bash" }' will let you use
        // the language "sh" which will highlight using the
        // bash highlighter.
        aliases: {},
        // If setting this to false, the parser handles and highlights inline
        // code, i.e. single backtick code like `this`.
        noInlineHighlight: true,
        // By default the HTML entities <>&'" are escaped.
        // Add additional HTML escapes by providing a mapping
        // of HTML entities and their escape value IE: { '}': '&#123;' }
        escapeEntities: {},
     },
    ],
   },
  },
 ],
}
