import React from "react"
import { graphql } from "gatsby"
import Layout from "../../layout"
import { Content, Footer } from "./styles"
import { Helmet } from "react-helmet"
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
   <Content dangerouslySetInnerHTML={htmlContent} />
   <Footer />
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
   }
  }
 }
`
