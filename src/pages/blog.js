import React from "react"
import GlobalSyles from "../styles/blogSyles"
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
    <title>yagolopes.com</title>
    <link rel="yagolopes.com" href="http://yagolopes.com" />
   </Helmet>
   <PostContextProvider payload={posts}>
    <Home />
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
