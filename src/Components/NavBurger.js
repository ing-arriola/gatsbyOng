import React from "react"

const NavBurger = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-tooogle"
      />
      <label for="navi-tooogle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/" className="navigation__link">
              {" "}
              INICIO
            </a>
          </li>
          <li className="navigation__item">
            <a href="/about/" className="navigation__link">
              NOSOTROS
            </a>
          </li>
          <li className="navigation__item">
            <a href="/programs/" className="navigation__link">
              PROGRAMAS
            </a>
          </li>
          <li className="navigation__item">
            <a href="/news/" className="navigation__link">
              NOTICIAS
            </a>
          </li>
          <li className="navigation__item">
            <a href="/helpus/" className="navigation__link">
              COLABORA
            </a>
          </li>
          <li className="navigation__item">
            <a href="/contactus/" className="navigation__link">
              CONTACTO
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default NavBurger
