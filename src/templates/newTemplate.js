import React from "react"
import { graphql } from "gatsby"

const newTemplate = ({ data }) => <pre>{JSON.stringify(data, null, 4)}</pre>

export const queryArcticle = graphql`
  query getSingleArticle($id: String) {
    contentfulNews(texto: { id: { eq: $id } }) {
      titulo
      imagen {
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      texto {
        content {
          content {
            value
          }
        }
      }
    }
  }
`

export default newTemplate
