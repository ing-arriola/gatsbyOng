import React from "react"
import { graphql, useStaticQuery } from "gatsby"
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
      }
    }
  }
`
const NewsPosts = () => {
  const postsData = useStaticQuery(newsQuery)
  const posts = postsData.allContentfulNews.nodes
  console.log(posts)

  return (
    <div>
      {posts.map(post => (
        <article key={post.id}>
          <h2 key={post.id}>{post.titulo}</h2>
          <Image fluid={post.imagen.fluid} />
        </article>
      ))}
    </div>
  )
}

export default NewsPosts
