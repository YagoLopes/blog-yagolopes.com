import React from "react"
import GlobalSyles, { Container } from "../styles/globalSyles"
import { Helmet } from "react-helmet"
import Home from "../components/Home"
import PostContextProvider from "../context/PostContext"
import { graphql } from "gatsby"

export default function({ data }) {
 const posts = data.allMarkdownRemark.edges.filter(
  ({ node }) => node.frontmatter.layout === "post"
 )
 return (
  <>
   <GlobalSyles />
   <Helmet>
    <meta charSet="utf-8" />
    <title>yagolopes.com | Blog</title>
    <link rel="yagolopes.com" href="http://yagolopes.com" />
   </Helmet>
   <PostContextProvider payload={posts}>
    <Container>
     <Home />
    </Container>
   </PostContextProvider>
  </>
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
      date
      author
      tags
     }
    }
   }
  }
 }
`
