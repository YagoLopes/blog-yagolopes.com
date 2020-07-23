import React, { useContext } from "react"
import { Container, PostRow } from "./styles"
import { PostContext } from "../../context/PostContext"

function Post() {
 const { posts } = useContext(PostContext)
 return (
  <Container>
   {posts.map(({ node }) => (
    <PostRow to={node.fields.slug}>
     <strong>{node.frontmatter.header}</strong>
    </PostRow>
   ))}
  </Container>
 )
}

export default Post
