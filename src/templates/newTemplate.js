import React from "react"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import Layout from "../Components/Layout"

const newTemplate = ({ data: { article } }) => {
  //console.log(article.texto.content)

  /*  article.texto.content.map(item => {
    console.log(item.content[0].value.substring(1, 20))
  })*/

  return (
    <Layout>
      <div>
        <Link to="/news">Regresar a noticias</Link>
        <h1>{article.titulo}</h1>
        <Image fluid={article.imagen.fluid} />
        {article.texto.content.map(item => (
          <p key={item.content[0].value.substring(1, 20)}>
            {item.content[0].value}{" "}
          </p>
        ))}
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
    article: contentfulNews(texto: { id: { eq: $id } }) {
      id
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
