import React from "react"
import { Layout, HookQuery, ComponentQuery } from "../components"
import { graphql } from "gatsby"

// Graphql examples

const examples = ({ data }) => {
  const {
    site: {
      info: { description },
    },
  } = data

  return (
    <Layout>
      <HookQuery />
      <ComponentQuery />
      <h5>{description}</h5>
    </Layout>
  )
}

export const data = graphql`
  query PageQuery {
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
export default examples
