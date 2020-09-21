import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
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
  console.log(data.allContentfulRdf)
  console.log(data.allContentfulRdf.nodes[0].imgInfo.fluid)
  const orderToRender = ["Mision", "Vision", "Valores", "Politicas"]
  const sortedArray = []
  for (let i = 0; i < orderToRender.length; i++) {
    let sortedItem = (sortedItem = data.allContentfulRdf.nodes.filter(
      item => item.name === orderToRender[i]
    ))
    sortedArray.push(sortedItem[0])
  }

  let prevText = sortedArray.filter(chunk => chunk.name === "Valores")
  let enteredText = prevText[0].description.description
  console.log(sortedArray[0].imgInfo.fluid.src)
  /*for (let j = 0; j < enteredText.length; j++) {
      
      
  }*/

  console.log(enteredText)
  console.log(enteredText.indexOf("\n"))
  let numberOfLineBreaks = (enteredText.match(/\n/g) || []).length
  console.log(numberOfLineBreaks)
  return (
    <div>
      {sortedArray.map(info => (
        <article key={info.id} className="info-container" id={info.name}>
          <div className="info-container--title">
            <h2>{info.name}</h2>
          </div>

          <div className="info-container--ong-data">
            <div className="ong-data--image"></div>
            <div className={"ong-data-" + info.name}>
              <p>{info.description.description}</p>
            </div>
          </div>
        </article>
      ))}
    </div>
  )
}

export default OngInfo
