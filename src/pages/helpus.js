import React from "react"
import Layout from "../Components/Layout"
import { FaHandHoldingHeart, FaHandPaper } from "react-icons/fa"
const helpus = () => {
  return (
    <Layout>
      <div className="helpContainer">
        <h1>Ayudanos a ayudar</h1>
        <p>
          Constantemente nos encontramos pensando en planes de accion para
          beneficiar a quinenes lo necesitan, tu tambien puedes ayudar como:
        </p>
        <ul>
          <li>
            {" "}
            <FaHandHoldingHeart size={70} /> Patrocinador
          </li>
          <li>
            {" "}
            <FaHandPaper size={70} /> Voluntario{" "}
          </li>
        </ul>
      </div>
    </Layout>
  )
}

export default helpus
