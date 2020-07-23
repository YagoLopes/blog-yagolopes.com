const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
 const { createNodeField } = actions
 if (node.internal.type === "MarkdownRemark") {
  const slug = createFilePath({
   node,
   getNode,
   basePath: "pages/markdown",
  })
  createNodeField({
   node,
   value: slug,
   name: "slug",
  })
 }
}

exports.createPages = ({ graphql, actions }) => {
 const { createPage } = actions
 const templatePost = path.resolve("src/templates/post/index.js")
 return graphql(`
  {
   allMarkdownRemark {
    edges {
     node {
      fields {
       slug
      }
      frontmatter {
       layout
      }
     }
    }
   }
  }
 `).then(({ data }) => {
  data.allMarkdownRemark.edges.forEach(({ node }) => {
   createPage({
    path: node.fields.slug,
    component: templatePost,
    context: {
     slug: node.fields.slug,
    },
   })
  })
 })
}
