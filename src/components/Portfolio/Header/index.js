import React from "react"
import { Container, Left, Right, Title, Text } from "./styles"
import { profile } from "../../../data/projects"

function Header() {
 return (
  <Container>
   <Left>
    <Title>{profile.title}</Title>
    <Text>
     {profile.description}
     <a href="http://yagolopes.com/blog">yagolopes.com</a>
    </Text>
   </Left>
   <Right />
  </Container>
 )
}

export default Header
