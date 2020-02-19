import React from "react"
import { Styles } from "./styles"

const Menu = () => {
  return (
    <Styles>
      <input id="menu-hamburguer" type="checkbox" />
      <label htmlFor="menu-hamburguer">
        <div className="menu">
          <span className="hamburguer"></span>
        </div>
      </label>
    </Styles>
  )
}

export default Menu
