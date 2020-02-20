import React from "react"
import { Styles } from "./styles"
import { Link } from "gatsby"
import logo from "../../assets/logo.png"
import Menu from "../menu"

const Header = () => {
  return (
    <Styles>
      <Link to="/" classNameNameName="title">
        <img src={logo} alt="yagolopes.com" />
      </Link>
      <Menu />
    </Styles>
  )
}

export default Header
