import React from "react"
import { Link } from "gatsby"
import Logo from "../images/LogRJF.png"
import scrollTo from "gatsby-plugin-smoothscroll"
const Toolbar = () => {
  return (
    <nav className="toolbar">
      <div className="logo">
        <img className="toolbar-logo" src={Logo} alt="Red de JF" />
      </div>
      <ul className="navigation-items">
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about/">Nosotros</Link>
        </li>
        <li>
          <Link to="/news/">Noticias</Link>
        </li>
        <li>
          <Link to="/siteMetaData/">Colabora</Link>
        </li>
        <li>
          <Link to="/siteMetaData/">Contactanos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
