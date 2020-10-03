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
    <div>
      {data.allContentfulPrograms.nodes.map(programa => (
        <section key={programa.id}>
          <h2>{programa.nombre}</h2>
          <Image fluid={programa.imagen.fluid} />
          <Link to={`/programs/${programa.descripcion.id}`}>Leer mas</Link>
        </section>
      ))}
    </div>
  )
}

export default Program
