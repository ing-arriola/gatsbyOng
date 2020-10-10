import React from "react"
import Layout from "../Components/Layout"
import OngInfo from "../Components/OngInfo"
import scrollTo from "gatsby-plugin-smoothscroll"
const about = () => {
  return (
    <Layout>
      <div id="about-container">
        <OngInfo />
      </div>
    </Layout>
  )
}

export default about
