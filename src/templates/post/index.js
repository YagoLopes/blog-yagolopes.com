import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout"
import { formatDistanceToNow } from "date-fns"
import { Helmet } from "react-helmet"
import pt from "date-fns/locale/pt"
export default ({ data }) => {
 const post = data.markdownRemark
 const htmlContent = { __html: post.html }

 return (
  <Layout>
   <Helmet>
    <meta charSet="utf-8" />
    <title>{post.frontmatter.title}</title>
    <link rel={post.frontmatter.title} href={post.fields.slug} />
   </Helmet>
   <article className="content post">
    <h1 className="post-title">{post.frontmatter.header}</h1>
    <div className="post-date">
     <time>
      {formatDistanceToNow(new Date(post.frontmatter.date), {
       locale: pt,
      })}
     </time>
    </div>
    <div dangerouslySetInnerHTML={htmlContent} />
   </article>
  </Layout>
 )
}

export const query = graphql`
 query($slug: String!) {
  markdownRemark(fields: { slug: { eq: $slug } }) {
   html
   fields {
    slug
   }
   frontmatter {
    title
    header
    date
   }
  }
 }
`
