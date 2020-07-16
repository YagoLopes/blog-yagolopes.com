import React from "react"
import { Nav, Img } from "./styles"

import logo from "../../assets/logo.png"
import { Link } from "gatsby"
import PostList from "../PostList"

function Navbar() {
 return (
  <Nav>
   <Link to="/">
    <Img src={logo} alt="yagolopes.com" />
   </Link>
   <PostList />
  </Nav>
 )
}

export default Navbar
