import React from "react"
import PropTypes from "prop-types"
import Header from "../header"
import GlobalStyles from "./globalSyles"
import { ThemeProvider } from "styled-components"
import theme from "./theme"

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Header />
      <div className="container">{children}</div>
    </ThemeProvider>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
