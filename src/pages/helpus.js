import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../Components/Layout"

export const helpQuery = graphql`
  {
    allContentfulHelp {
      nodes {
        childContentfulHelpDescriptionRichTextNode {
          json
        }
        icon
        id
      }
    }
  }
`

const Helpus = () => {
  const data = useStaticQuery(helpQuery)
  //console.log(data)
  data.allContentfulHelp.nodes.map(help => {
    console.log(help.icon)
  })

  const helpContent = data.allContentfulHelp.nodes

  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => (
        <h2 className="helpway-title">{children}</h2>
      ),
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,

      [INLINES.HYPERLINK]: node => {
        return (
          <div className="embed-video-container">
            <iframe
              width="560"
              height="315"
              src={node.data.uri}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              className="embed-video"
            ></iframe>
          </div>
        )
      },
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <div className="newsImages-container">
          <img src={`https:${node.data.target.fields.file["en-US"].url}`}></img>
        </div>
      ),
    },
    renderMark: {},
  }

  const helpWays = [
    {
      name: "Patrocinador",
      description:
        "Puedes realizar un aporte economico a la cuenta: 003400517134 del banco agricola ",
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
        <div className="helpway-content">
          {helpContent.map(help =>
            documentToReactComponents(
              help.childContentfulHelpDescriptionRichTextNode.json,
              options
            )
          )}
        </div>
      </div>
    </Layout>
  )
}

export default Helpus
