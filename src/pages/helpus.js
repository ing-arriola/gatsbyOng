import React from "react"
import Layout from "../Components/Layout"
import * as FontAwesome from "react-icons/fa"
const helpus = () => {
  const helpWays = [
    {
      name: "Patrocinador",
      description:
        "Puedes realizar un aporte economico a nuestra cuenta del banco agricola",
      icon: "FaHandHoldingHeart",
      size: 70,
    },
    {
      name: "Voluntario",
      description:
        "Puedes ayudar con tu tiempo colaborando en nuestros programas de apoyo a la comunidad",
      icon: "FaHandPaper",
      size: 70,
    },
  ]

  return (
    <Layout>
      <div className="helpContainer">
        <p className="helpContainer__title">ILUMINA CON TU AYUDA A OTROS</p>
        <p className="helpContainer__subtitle">
          Tu tambien puede ayudar hoy mismo de las siguientes maneras:
        </p>
        <div>
          {helpWays.map(helpWay => (
            <section className="help-section">
              <div className="help-section--title">
                {helpWay.name}
                <div style={{ fontSize: helpWay.size }}>
                  {React.createElement(FontAwesome[helpWay.icon])}
                </div>
              </div>
              <div className="help-section--description">
                {helpWay.description}
              </div>
            </section>
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default helpus
