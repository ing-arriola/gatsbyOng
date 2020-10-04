import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../Components/Layout"

const programTemplate = ({ data }) => {
  console.log(data)
  return (
    <div>
      <Layout>
        <div>Holas</div>
      </Layout>
    </div>
  )
}

export const programQuery = graphql`
  query getSingleProgram($id: String) {
    contentfulPrograms(descripcion: { id: { eq: $id } }) {
      id
      childContentfulProgramsDescripcionRichTextNode {
        json
      }
    }
  }
`

export default programTemplate
