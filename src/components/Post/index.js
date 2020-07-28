import React, { useContext } from "react"
import { Container, Title, Description, Separetor } from "./styles"
import { PostContext } from "../../context/PostContext"

function Post() {
 const { posts } = useContext(PostContext)
 return posts.map(({ node }) => (
  <React.Fragment>
   <Separetor />
   <Container to={node.fields.slug} key={node.fields.slug}>
    <Title>{node.frontmatter.header}</Title>
    <Description>{node.frontmatter.description}</Description>
   </Container>
  </React.Fragment>
 ))
}

export default Post
