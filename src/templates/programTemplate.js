import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../Components/Layout"

const programTemplate = ({ data }) => {
  console.log(
    data.contentfulOngPrograms.childContentfulOngProgramsTextoRichTextNode
  )
  const programContent = data.contentfulOngPrograms
  const options = {
    renderNode: {
      [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
      [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
      [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
      [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
      [BLOCKS.EMBEDDED_ASSET]: (node, children) => (
        <div className="newsImages-container">
          <img
            className="newsImages"
            src={`https:${node.data.target.fields.file["en-US"].url}`}
          ></img>
        </div>
      ),
    },
    renderMark: {},
  }
  return (
    <div>
      <Layout>
        <div>
          <Link to="/programs">Regresar a programas</Link>
          <div className="article-text">
            {documentToReactComponents(
              programContent.childContentfulOngProgramsTextoRichTextNode.json,
              options
            )}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export const programQuery = graphql`
  query getSingleProgram($id: String) {
    contentfulOngPrograms(texto: { id: { eq: $id } }) {
      id
      childContentfulOngProgramsTextoRichTextNode {
        json
      }
    }
  }
`
export default programTemplate

/*


*/
