import React from "react"
import { Link } from "gatsby"
const Toolbar = () => {
  return (
    <nav>
      <ul>
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
          <Link to="/siteMetaData/">META</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar
