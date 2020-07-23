import React from "react"
import { Container, PostList } from "./styles"
import Post from "../../components/Post"

const Home = () => {
 return (
  <Container>
   <PostList>
    <Post />
   </PostList>
  </Container>
 )
}

export default Home
