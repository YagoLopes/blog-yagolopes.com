import React from "react"
import { Nav, Img, SearchContainer, Search } from "./styles"

import logo from "../../assets/logo.png"
import { Link } from "gatsby"
import PostList from "../PostList"

function Navbar() {
 //  function handleChange(value) {
 //   if (value) {
 //    const postFiltred = Object.values(posts).filter(
 //     post =>
 //      post.props.children[0].props.children
 //       .toString()
 //       .toLowerCase()
 //       .indexOf(value.toLowerCase()) !== -1
 //    )
 //    if (postFiltred.length > 0) {
 //     setPosts(postFiltred)
 //    }
 //   } else {
 //    setPosts(children)
 //   }
 //  }

 return (
  <Nav>
   <Link to="/">
    <Img src={logo} alt="yagolopes.com" />
   </Link>
   <SearchContainer>
    <Search
     type="text"
     placeholder="Pesquise um post aqui..."
     // onChange={  e => handleChange(e.target.value)}
    />
   </SearchContainer>
   <PostList />
  </Nav>
 )
}

export default Navbar
