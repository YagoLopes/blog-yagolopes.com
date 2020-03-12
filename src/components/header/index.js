import React from "react"
import { Styles } from "./styles"
import { Link } from "gatsby"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <Styles>
      <Link to="/" className="title">
        <img src={logo} alt="yagolopes.com" />
      </Link>
    </Styles>
  )
}

export default Header
