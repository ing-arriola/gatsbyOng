import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import * as FontAwesome from "react-icons/fa"

import mision from "../images/About/mision.svg"
import vision from "../images/About/vision.svg"
import valores from "../images/About/valores.svg"
import politicas from "../images/About/politicas.svg"

const infoQuery = graphql`
  {
    allContentfulRdf {
      nodes {
        id
        name
        imgInfo {
          fluid(maxWidth: 1000) {
            ...GatsbyContentfulFluid
          }
        }
        description {
          description
        }
      }
    }
  }
`
const OngInfo = () => {
  const data = useStaticQuery(infoQuery)

  const orderToRender = ["Mision", "Vision", "Valores", "Politicas"]
  const sortedArray = []
  let sortedItem
  for (let i = 0; i < orderToRender.length; i++) {
    sortedItem = sortedItem = data.allContentfulRdf.nodes.filter(
      item => item.name === orderToRender[i]
    )
    sortedArray.push(sortedItem[0])
  }

  /* Turning a paragraph into an array in order to add styles to each NGO's "Valor" */
  let prevText = sortedArray.filter(chunk => chunk.name === "Valores")
  let enteredText = prevText[0].description.description
  const valoresOng = enteredText.split("\n")
  /* Array for valores icons */
  const icons = [
    "FaHandsHelping",
    "FaHandshake",
    "FaLightbulb",
    "FaRegThumbsUp",
  ]

  const images = [mision, vision, valores, politicas]

  return (
    <div className="generic-section">
      {sortedArray.map((info, index) => (
        <article key={info.id} className="generic-inner row">
          <div className="column image-align ">
            <img className="image-sections" src={images[index]} />
          </div>

          <div className="column">
            <div className="info-container--title">
              <p>{info.name}</p>
            </div>

            <div>
              <div className={"ong-data-" + info.name}>
                {info.name === "Valores" ? (
                  valoresOng.map((valor, index) => (
                    <div className="ong-data-Valores--content">
                      <div className="valores-icons">
                        {React.createElement(FontAwesome[icons[index]])}
                      </div>
                      <span key={index}>{valor}</span>
                    </div>
                  ))
                ) : (
                  <p className="info-container--description">
                    {info.description.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default OngInfo
