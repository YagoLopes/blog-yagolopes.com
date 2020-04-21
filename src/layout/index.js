import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import { Styles } from "./styles"
import GlobalStyles from "../styles/globalSyles"
import { Helmet } from "react-helmet"

const Layout = ({ children }) => {
 return (
  <>
   <Helmet>
    <meta charSet="utf-8" />
    <title>yagolopes.com</title>
    <link rel="yagolopes.com" href="http://yagolopes.com" />
   </Helmet>
   <GlobalStyles />
   <Styles>
    <Header />
    <div className="container">{children}</div>
   </Styles>
  </>
 )
}

Layout.propTypes = {
 children: PropTypes.node.isRequired,
}

export default Layout
