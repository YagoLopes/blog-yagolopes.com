import React from "react"
import { graphql } from "gatsby"
import { Content } from "./styles"
import { Helmet } from "react-helmet"
import GlobalSyles from "../../styles/blogSyles"
export default ({ data }) => {
 const post = data.markdownRemark
 const htmlContent = { __html: post.html }

 return (
  <>
   <Helmet>
    <meta charSet="utf-8" />
    <title>{post.frontmatter.title}</title>
    <link rel={post.frontmatter.title} href={post.fields.slug} />
   </Helmet>
   <Content dangerouslySetInnerHTML={htmlContent} />
   <GlobalSyles />
  </>
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
   }
  }
 }
`
