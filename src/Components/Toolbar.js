import React from "react"
import { Link } from "gatsby"
const Toolbar = () => {
  return (
    <nav className="toolbar">
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
          <Link to="/siteMetaData/">Unete</Link>
        </li>
        <li>
          <Link to="/siteMetaData/">Donaciones</Link>
        </li>
        <li>
          <Link to="/siteMetaData/">Contactanos</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
