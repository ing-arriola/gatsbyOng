import React from "react"
import Layout from "../Components/Layout"
import OngInfo from "../Components/OngInfo"
import scrollTo from "gatsby-plugin-smoothscroll"
const about = () => {
  return (
    <Layout>
      <div id="about-container">
        <div id="sections-navigation">
          <button onClick={() => scrollTo("#Mision")}>MISION</button>
          <button onClick={() => scrollTo("#Vision")}>VISION</button>
          <button onClick={() => scrollTo("#Valores")}>VALORES</button>
          <button onClick={() => scrollTo("#Politicas")}>POLITICAS</button>
        </div>
        <div>
          <OngInfo />
        </div>
      </div>
    </Layout>
  )
}

export default about
