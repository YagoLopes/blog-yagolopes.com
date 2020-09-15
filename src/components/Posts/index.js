import React, { useContext } from "react"
import { PostContext } from "../../context/PostContext"
import { format } from "date-fns"
import { Link } from "gatsby"
import { Wrapper } from "./styles"

function Posts() {
 const { posts } = useContext(PostContext)
 return posts.map(({ node }) => (
  <Wrapper key={node.fields.slug}>
   <Link to={node.fields.slug}>
    <h1>{node.frontmatter.title}</h1>
    <p>
     Por <b>{node.frontmatter.author}</b> em{" "}
     {format(new Date(node.frontmatter.date), "MMMM yyyy")}
    </p>
    {node.frontmatter.tags?.map(tag => (
     <strong>#{tag}</strong>
    ))}
   </Link>
  </Wrapper>
 ))
}

export default Posts
