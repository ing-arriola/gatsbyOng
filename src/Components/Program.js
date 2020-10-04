import React from "react"
import Image from "gatsby-image"
import { graphql, useStaticQuery, Link } from "gatsby"

const programsQuery = graphql`
  {
    allContentfulPrograms {
      nodes {
        id
        nombre
        imagen {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        descripcion {
          id
        }
      }
    }
  }
`

const Program = () => {
  const data = useStaticQuery(programsQuery)
  console.log(data.allContentfulPrograms.nodes[0].nombre)
  return (
    <div className="posts-container">
      {data.allContentfulPrograms.nodes.map(programa => (
        <section key={programa.id} className="post-card">
          <div className="post-card__title">
            <h2>{programa.nombre}</h2>
          </div>
          <Image fluid={programa.imagen.fluid} />
          <div className="post-card__read-more">
            <Link to={`/programs/${programa.descripcion.id}`}>Leer mas</Link>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Program
