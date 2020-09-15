import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import imgs from "../images/img-1.jpg"
import Image from "gatsby-image"
/*const queryQl = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
*/
const queryImg = graphql`
  {
    img1: file(relativePath: { eq: "img-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img2: file(relativePath: { eq: "img-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    img3: file(relativePath: { eq: "img-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const ExampleData = () => {
  const dataImg = useStaticQuery(queryImg)

  /*const data = useStaticQuery(queryQl)
  
  */
  return (
    <div>
      <Image fluid={dataImg.img1.childImageSharp.fluid} />
      <Image fluid={dataImg.img2.childImageSharp.fluid} />
      <Image fluid={dataImg.img3.childImageSharp.fluid} />
    </div>
  )
}

export default ExampleData
