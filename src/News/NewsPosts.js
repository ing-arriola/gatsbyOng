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
          fluid(maxWidth: 400) {
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

  return (
    <div className="posts-container">
      {posts.map(post => (
        <article key={post.id} className="post-card">
          <div className="post-card__title">
            <h2 key={post.id}>{post.titulo}</h2>
          </div>
          <Image className="post-card__image" fluid={post.imagen.fluid} />
          <div className="post-card__read-more">
            <Link to={`/news/${post.texto.id}`}>Leer mas</Link>
          </div>
        </article>
      ))}
    </div>
  )
}

export default NewsPosts
