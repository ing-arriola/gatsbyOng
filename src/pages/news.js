import React from "react"
import Layout from "../Components/Layout"
import NewsPosts from "../News/NewsPosts"
const news = () => {
  return (
    <Layout>
      <div className="news-container">
        <div className="page-title">
          <p>ACCIONES CON IMPACTO POSITIVO</p>
        </div>

        <NewsPosts />
      </div>
    </Layout>
  )
}

export default news
