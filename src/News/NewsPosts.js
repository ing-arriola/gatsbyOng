import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Image from "gatsby-image"
const newsQuery = graphql`
  {
    allContentfulNews {
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
const NewsPosts = () => {
  const postsData = useStaticQuery(newsQuery)
  const posts = postsData.allContentfulNews.nodes
  console.log(posts[0].imagen.fluid)
  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2 key={post.id}>{post.titulo}</h2>
          <Image fluid={post.imagen.fluid} />
          <Link to={`/news/${post.texto.id}`}>Leer mas</Link>
        </article>
      ))}
    </div>
  )
}

export default NewsPosts
