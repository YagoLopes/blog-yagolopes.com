import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import GlobalStyles from "../styles/globalSyles"

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <Header />
      <div className="container">{children}</div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
