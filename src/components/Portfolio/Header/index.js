import React from "react"
import { Container, Left, Right, Title, Text } from "./styles"
import { profile } from "../../../data/projects"
import { Link } from "gatsby"

function Header() {
 return (
  <Container>
   <Left>
    <Title>{profile.title}</Title>
    <Text>
     {profile.description}
     <Link to="/blog">blog</Link>
    </Text>
   </Left>
   <Right>
    <div />
   </Right>
  </Container>
 )
}

export default Header
