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
    <section key={node.fields.slug}>
     <Link to={node.fields.slug}>{node.frontmatter.header}</Link>
     <time>
      Publicado há{" "}
      {formatDistanceToNow(new Date(node.frontmatter.date), {
       locale: pt,
      })}{" "}
      atrás
     </time>
     <article>
      <img src={node.frontmatter.thumbnail} alt="thumbnail" />
      <p>{node.frontmatter.description}</p>
     </article>
    </section>
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
