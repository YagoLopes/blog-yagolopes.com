const { createFilePath } = require("gatsby-source-filesystem")
const path = require("path")
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "MarkdownRemark") {
    const slug = createFilePath({
      node,
      getNode,
      basePath: "pages",
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
  const templatePage = path.resolve("src/templates/page/index.js")
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
        component:
          node.frontmatter.layout === "page" ? templatePage : templatePost,
        context: {
          slug: node.fields.slug,
        },
      })
    })
  })
}
