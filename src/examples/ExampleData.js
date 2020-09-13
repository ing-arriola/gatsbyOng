import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const ComponentName = () => {
  const data = useStaticQuery(graphql`
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
  `)
  console.log(data.site.siteMetadata.description)
  return <pre>{JSON.stringify(data, null, 4)}</pre>
}

export default ComponentName
