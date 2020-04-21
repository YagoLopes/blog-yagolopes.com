import React from "react"
import Layout from "../layout"
import { graphql, Link } from "gatsby"
import { formatDistanceToNow } from "date-fns"
import pt from "date-fns/locale/pt"
export default function Home({ data }) {
 const posts = data.allMarkdownRemark.edges.filter(
  ({ node }) => node.frontmatter.layout === "post"
 )

 return (
  <Layout>
   {posts.map(({ node }) => (
    <div key={node.id} className="content list">
     <div className="list-item">
      <Link to={node.fields.slug} className="list-post-title">
       {node.frontmatter.header}
      </Link>
      <div className="list-post-date">
       <time>
        Publicado há{" "}
        {formatDistanceToNow(new Date(node.frontmatter.date), {
         locale: pt,
        })}{" "}
        atrás
       </time>
      </div>
      <div className="list-post-description">
       <img src={node.frontmatter.thumbnail} alt="thumbnail" />
       <p>{node.frontmatter.description}</p>
      </div>
     </div>
    </div>
   ))}
  </Layout>
 )
}

export const query = graphql`
 {
  allMarkdownRemark {
   edges {
    node {
     fields {
      slug
     }
     frontmatter {
      layout
      title
      header
      date
      description
      thumbnail
     }
    }
   }
  }
 }
`
