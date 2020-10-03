import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import { MdSentimentSatisfied } from "react-icons/md"
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
  for (let i = 0; i < orderToRender.length; i++) {
    let sortedItem = (sortedItem = data.allContentfulRdf.nodes.filter(
      item => item.name === orderToRender[i]
    ))
    sortedArray.push(sortedItem[0])
  }

  /* Turning a paragraph into an array in order to add styles to each NGO's "Valor" */
  let prevText = sortedArray.filter(chunk => chunk.name === "Valores")
  let enteredText = prevText[0].description.description
  const valores = enteredText.split("\n")

  return (
    <div>
      {sortedArray.map(info => (
        <article
          key={info.id}
          className={
            info.name === "Politicas" ? "info-politicas" : "info-container"
          }
          id={info.name}
        >
          <div className="info-container--title">
            <h2>{info.name}</h2>
          </div>

          <div className="info-container--ong-data">
            <div className="ong-data--image"></div>

            <div
              data-sal="fade"
              data-sal-duration="800"
              data-sal-delay="300"
              data-sal-easing="ease"
              className={"ong-data-" + info.name}
            >
              {info.name === "Valores" ? (
                valores.map((valor, index) => <span key={index}>{valor}</span>)
              ) : (
                <p>{info.description.description}</p>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default OngInfo
