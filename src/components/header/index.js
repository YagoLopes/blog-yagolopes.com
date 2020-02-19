import React from "react"
import { Styles } from "./styles"
import { Link } from "gatsby"
import logo from "../../assets/logo.png"
import Menu from "../menu"

const Header = () => {
  return (
    <Styles>
      <Link to="/" className="title">
        <img src={logo} alt="yagolopes.com" />
      </Link>
      <nav>
        <Link to="/" className="pageTitle">
          Contato
        </Link>
        <Link to="/" className="pageTitle">
          Posts
        </Link>
        <Menu />
      </nav>
    </Styles>
  )
}

export default Header
