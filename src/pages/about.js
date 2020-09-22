import React from "react"
import Layout from "../Components/Layout"
import OngInfo from "../Components/OngInfo"
import scrollTo from "gatsby-plugin-smoothscroll"
const about = () => {
  return (
    <Layout>
      <div id="about-container">
        <div id="sections-navigation">
          <a onClick={() => scrollTo("#Mision")}>MISION</a>
          <a onClick={() => scrollTo("#Vision")}>VISION</a>
          <a onClick={() => scrollTo("#Valores")}>VALORES</a>
          <a onClick={() => scrollTo("#Politicas")}>POLITICAS</a>
        </div>
        <div>
          <OngInfo />
        </div>
      </div>
    </Layout>
  )
}

export default about
