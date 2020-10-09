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
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/about/">Nosotros</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/programs/">Programas</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/news/">Noticias</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/helpus/">Colabora</Link>
          <div className="underline"></div>
        </li>
        <li>
          <Link to="/contactus/">Contactanos</Link>
          <div className="underline"></div>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
