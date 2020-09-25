import React from "react"
import "../styles/styles.css"
import Layout from "../Components/Layout"
import { Link } from "gatsby"

export default () => {
  return (
    <Layout>
      <div className="header">
        <div className="header__text-box">
          <h1 className="header__primary-text">
            <span className="heading-primary--main">
              Red de Jovenes del futuro
            </span>
            <span className="heading-primary--sub">
              Acciones que crean impacto
            </span>
          </h1>
          <Link
            to="/about/"
            className="btn btn--white btn--animated-from-bottom"
          >
            ¡Conocenos!
          </Link>
        </div>
      </div>
    </Layout>
  )
}
