import React from "react"
import { Link } from "gatsby"
import Logo from "../images/LogRJF.png"

const Toolbar_articles = () => {
  return (
    <nav className="toolbar_posts">
      <div className="logo">
        <img className="toolbar-logo" src={Logo} alt="Red de JF" />
      </div>
      <ul className="black-item">
        <li>
          <Link to="/">INICIO</Link>
          <div className="underline-black"></div>
        </li>
        <li>
          <Link to="/about/">NOSOTROS</Link>
          <div className="underline-black"></div>
        </li>
        <li>
          <Link to="/programs/">PROGRAMAS</Link>
          <div className="underline-black"></div>
        </li>
        <li>
          <Link to="/news/">NOTICIAS</Link>
          <div className="underline-black"></div>
        </li>
        <li>
          <Link to="/helpus/">COLABORA</Link>
          <div className="underline-black"></div>
        </li>
        <li>
          <Link to="/contactus/">CONTACTO</Link>
          <div className="underline-black"></div>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar_articles
