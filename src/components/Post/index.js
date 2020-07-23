import React, { useContext } from "react"
import { Container } from "./styles"
import { PostContext } from "../../context/PostContext"

function Post() {
 const { posts } = useContext(PostContext)
 return posts.map(({ node }) => (
  <Container to={node.fields.slug} key={node.fields.slug}>
   <strong>{node.frontmatter.header}</strong>
  </Container>
 ))
}

export default Post
