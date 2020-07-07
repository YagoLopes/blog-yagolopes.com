import React, { useContext } from "react"
import { Container, Avatar, Post, DateInfo } from "./styles"
import { PostContext } from "../../context/PostContext"
import { formatDistanceToNow } from "date-fns"
import { pt } from "date-fns/locale"

function Main() {
 const { posts } = useContext(PostContext)
 return (
  <Container>
   {posts.map(({ node }) => (
    <Post to={node.fields.slug} key={node.fields.slug}>
     <Avatar>
      <img src={node.frontmatter.thumbnail} alt="thumbnail" />
     </Avatar>
     <DateInfo>
      {formatDistanceToNow(new Date(node.frontmatter.date), {
       locale: pt,
      })}
     </DateInfo>
     <strong>{node.frontmatter.header}</strong>
     <p>{node.frontmatter.description}</p>
    </Post>
   ))}
  </Container>
 )
}

export default Main
