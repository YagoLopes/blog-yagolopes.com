import React, { useContext } from "react"
import { Container, Avatar, Post } from "./styles"
import { PostContext } from "../../context/PostContext"
import { formatDistanceToNow } from "date-fns"
import { pt } from "date-fns/locale"

function Main() {
 const { posts } = useContext(PostContext)
 return (
  <Container>
   {posts.map(({ node }) => (
    <Post to={node.fields.slug} key={node.fields.slug}>
     <strong>{node.frontmatter.header}</strong>
     <span>
      Publicado há
      {formatDistanceToNow(new Date(node.frontmatter.date), {
       locale: pt,
      })}
      atrás
     </span>
     <Avatar>
      <img src={node.frontmatter.thumbnail} alt="thumbnail" />
     </Avatar>
     {/* <strong>{node.frontmatter.description}</strong> */}
    </Post>
   ))}
   {posts.map(({ node }) => (
    <Post to={node.fields.slug} key={node.fields.slug}>
     <strong>{node.frontmatter.header}</strong>
     <span>
      Publicado há
      {formatDistanceToNow(new Date(node.frontmatter.date), {
       locale: pt,
      })}
      atrás
     </span>
     <Avatar>
      <img src={node.frontmatter.thumbnail} alt="thumbnail" />
     </Avatar>
     {/* <strong>{node.frontmatter.description}</strong> */}
    </Post>
   ))}
   {posts.map(({ node }) => (
    <Post to={node.fields.slug} key={node.fields.slug}>
     <strong>{node.frontmatter.header}</strong>
     <span>
      Publicado há
      {formatDistanceToNow(new Date(node.frontmatter.date), {
       locale: pt,
      })}
      atrás
     </span>
     <Avatar>
      <img src={node.frontmatter.thumbnail} alt="thumbnail" />
     </Avatar>
     {/* <strong>{node.frontmatter.description}</strong> */}
    </Post>
   ))}
  </Container>
 )
}

export default Main
