import React, { useContext } from "react"
import { Container, PostRow } from "./styles"
import { PostContext } from "../../context/PostContext"

function PostList() {
 const { posts } = useContext(PostContext)
 return (
  <Container>
   {posts.map(({ node }) => (
    <PostRow to={node.fields.slug}>
     <span />
     <strong>{node.frontmatter.header}</strong>
    </PostRow>
   ))}
  </Container>
 )
}

export default PostList
