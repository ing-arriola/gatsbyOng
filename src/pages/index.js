import React from "react"
import "../styles/styles.css"
import Layout from "../Components/Layout"

export default () => {
  return (
    <Layout>
      <div className="header">
        <div className="header__text-box">
          <h1 className="header__primary-text">
            <span className="heading-primary--main">
              Red de Jovenes para el futuro
            </span>
            <span className="heading-primary--sub">
              Refuerzos escolares online
            </span>
          </h1>
        </div>
      </div>
    </Layout>
  )
}
