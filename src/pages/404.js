import React from "react"
import { Link } from "gatsby"
import { FaRegGrinBeamSweat } from "react-icons/fa"
import Layout from "../Components/Layout"

const errorPage = () => {
  return (
    <Layout color="black">
      <div className="page404-container">
        <div className="page404-title">
          <p>Upppss!! esta pagina no existe</p>
          <FaRegGrinBeamSweat size={50} />
        </div>
        <div className="page404-link">
          <Link to="/">Volver al inicio</Link>
        </div>
      </div>
    </Layout>
  )
}

export default errorPage
