import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const programsQuery = graphql`
  {
    allContentfulOngPrograms {
      nodes {
        id
        titulo
        imagen {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        texto {
          id
        }
      }
    }
  }
`

const Program = () => {
  const data = useStaticQuery(programsQuery)
  console.log(data.allContentfulOngPrograms.nodes[0].titulo)
  return (
    <div className="progrmas-container">
      <div className="page-title">
        <p>NUESTROS PROGRAMAS DE AYUDA</p>
      </div>

      <div className="posts-container">
        {data.allContentfulOngPrograms.nodes.map(programa => (
          <section key={programa.id} className="post-card">
            <div className="post-card__title">
              <p>{programa.titulo}</p>
            </div>
            <div>
              <Image
                className="post-card__image"
                fluid={programa.imagen.fluid}
              />
            </div>
            <div className="post-card__read-more">
              <Link to={`/programs/${programa.texto.id}`}>Leer mas</Link>
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Program
