import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
const infoQuery = graphql`
  {
    allContentfulRdf {
      nodes {
        id
        name
        imgInfo {
          fluid {
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

  return (
    <div>
      {data.allContentfulRdf.nodes
        .slice(0)
        .reverse()
        .map(info => (
          <article key={info.id} className="info-container">
            <div className="info-container--title">
              <h2>{info.name}</h2>
            </div>
            <div className="info-container--ong-data">
              <div className="ong-data--image">
                <Image fluid={info.imgInfo.fluid} />
              </div>
              <div
                className={
                  info.name === "Valores"
                    ? "description--valores"
                    : "ong-data--description"
                }
              >
                <p>{info.description.description}</p>
              </div>
            </div>
          </article>
        ))}
    </div>
  )
}

export default OngInfo
