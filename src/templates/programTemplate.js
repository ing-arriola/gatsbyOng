import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../Components/Layout"

const programTemplate = ({ data }) => {
  console.log(data.contentfulPrograms)
  /*const programContent = data.contentfulPrograms
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
    },
    renderMark: {},
  }*/
  return (
    <div>
      <Layout>
        <div className="long-info">Hola</div>
      </Layout>
    </div>
  )
}
/*
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
*/
export default programTemplate
