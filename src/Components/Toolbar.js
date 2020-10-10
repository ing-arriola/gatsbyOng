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
          <Link to="/">INICIO</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/about/">NOSOTROS</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/programs/">PROGRAMAS</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/news/">NOTICIAS</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/helpus/">COLABORA</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/contactus/">CONTACTO</Link>
          <div className="underline"></div>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
