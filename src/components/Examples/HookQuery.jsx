import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  query HookQuery {
    site {
      info: siteMetadata {
        author
        data
        description
        person {
          age
          name
        }
        title
      }
    }
  }
`

const HookQuery = () => {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      <h1>Title: {title}</h1>
      <h1>Name: {name}</h1>
    </div>
  )
}

export default HookQuery
