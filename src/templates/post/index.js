import React from "react"
import { graphql } from "gatsby"
import { Content } from "./styles"
import { Helmet } from "react-helmet"
import GlobalSyles from "../../styles/globalSyles"
import { Container } from "./styles"

export default ({ data }) => {
 const post = data.markdownRemark
 const htmlContent = { __html: post.html }

 return (
  <React.Fragment>
   <Helmet>
    <meta charSet="utf-8" />
    <title>{post.frontmatter.title}</title>
    <link rel={post.frontmatter.title} href={post.fields.slug} />
   </Helmet>
   <GlobalSyles />
   <Container>
    <br />
    <br />
    <Content dangerouslySetInnerHTML={htmlContent} />
    <br />
    <br />
   </Container>
  </React.Fragment>
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
   }
  }
 }
`
