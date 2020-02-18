import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
export default ({ data }) => (
  <Layout>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <div key={node.id} className="content list">
        <div className="list-item">
          <Link to={node.fields.slug} className="list-post-title">
            {node.frontmatter.title}
          </Link>
          <div className="list-post-date">
            <time>{node.frontmatter.date}</time>
          </div>
          <div className="list-post-description">
            <img hei="" src={node.frontmatter.thumbnail} alt="thumbnail" />
            <p>{node.frontmatter.description}</p>
          </div>
        </div>
      </div>
    ))}
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            description
            thumbnail
          }
        }
      }
    }
  }
`
