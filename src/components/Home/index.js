// import React, { useState } from "react"
// import PropTypes from "prop-types"
// import { Header, Main, Container, Logo, SearchContainer } from "./styles"
// import { Helmet } from "react-helmet"

// // import logo from "../assets/logo.png"

// const Layout = ({ children }) => {
//  const [posts, setPosts] = useState(children)

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

//  return (
//   <>
//
//    <Container>
//     <Header>
//
//     </Header>
//     <Main>{posts}</Main>
//    </Container>
//   </>
//  )
// }

// Layout.propTypes = {
//  children: PropTypes.node.isRequired,
// }

// export default Layout

import React from "react"
import { Container } from "./styles"
import Navbar from "../Navbar"
import Main from "../Main"

const Home = () => {
 return (
  <Container>
   <Navbar />
   <Main />
  </Container>
 )
}

export default Home
