import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getData = graphql`
  query ComponentQuery {
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

const ComponentQuery = () => (
  <StaticQuery
    query={getData}
    render={({
      site: {
        info: { author },
      },
    }) => <h4>Author: {author}</h4>}
  ></StaticQuery>
)

export default ComponentQuery
