import React, { useContext } from "react"
import { Container, Wrapper } from "./styles"
import { PostContext } from "../../context/PostContext"
import { format } from "date-fns"
import { eoLocale } from "date-fns/locale/eo"

function Posts() {
 const { posts } = useContext(PostContext)
 return (
  <Container>
   {posts.map(({ node }) => (
    <Wrapper to={node.fields.slug} key={node.fields.slug}>
     <h1>{node.frontmatter.title}</h1>
     <p>
      Por <b>{node.frontmatter.author}</b> em{" "}
      {format(new Date(node.frontmatter.date), "MMMM yyyy", {
       locale: eoLocale,
      })}
     </p>
     {node.frontmatter.tags?.map(tag => (
      <a>#{tag}</a>
     ))}
    </Wrapper>
   ))}
  </Container>
 )
}

export default Posts
