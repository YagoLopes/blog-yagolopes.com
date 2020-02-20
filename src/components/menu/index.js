import React from "react"
import { Styles } from "./styles"

const Menu = () => {
  return (
    <Styles>
      <ul>
        <li>
          <a href="#home">Contato</a>
        </li>
        <li className="dropdown">
          <a href="javascript:void(0)" className="dropbtn">
            Posts
          </a>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </li>
      </ul>
    </Styles>
  )
}

export default Menu
