import React, { useState } from "react"
import PropTypes from "prop-types"
import { Header, Main } from "./styles"
import GlobalStyles from "../styles/globalSyles"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import logo from "../assets/logo.png"

const Layout = ({ children }) => {
 const [posts, setPosts] = useState(children)
 const url = window.location.href.toString()

 function handleChange(value) {
  if (value) {
   const postFiltred = Object.values(posts).filter(
    post =>
     post.props.children[0].props.children
      .toString()
      .toLowerCase()
      .indexOf(value.toLowerCase()) !== -1
   )
   if (postFiltred.length > 0) {
    setPosts(postFiltred)
   }
  } else {
   setPosts(children)
  }
 }

 return (
  <>
   <Helmet>
    <meta charSet="utf-8" />
    <title>yagolopes.com</title>
    <link rel="yagolopes.com" href="http://yagolopes.com" />
   </Helmet>
   <GlobalStyles />
   <Header>
    <Link to="/">
     <img src={logo} alt="yagolopes.com" />
    </Link>
    {url.indexOf("post") === -1 ? (
     <input
      type="text"
      placeholder="Pesquise um post aqui..."
      onChange={e => handleChange(e.target.value)}
     />
    ) : (
     ""
    )}
   </Header>
   <Main>{posts}</Main>
  </>
 )
}

Layout.propTypes = {
 children: PropTypes.node.isRequired,
}

export default Layout
