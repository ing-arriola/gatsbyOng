import React from "react"
import { graphql, Link } from "gatsby"
import { BLOCKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import Layout from "../Components/Layout"

const newTemplate = ({ data }) => {
  const firstContent = data.contentfulNews
  console.log(firstContent)
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
    <Layout color="black">
      <div className="post-container">
        <Link to="/news">Regresar a noticias</Link>
        <div className="article-text">
          {documentToReactComponents(
            firstContent.childContentfulNewsTextoRichTextNode.json,
            options
          )}
        </div>
      </div>
    </Layout>
  )
}

/* 

 <Layout>
    <div>
      <Link to="/news">Regresar a noticias</Link>
      <h1>{data.article.titulo}</h1>
    </div>
  </Layout>
*/

export const queryArcticle = graphql`
  query getSingleArticle($id: String) {
    contentfulNews(texto: { id: { eq: $id } }) {
      id
      childContentfulNewsTextoRichTextNode {
        json
      }
    }
  }
`

export default newTemplate
