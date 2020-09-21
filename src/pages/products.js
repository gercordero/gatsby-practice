import React from "react"
import { Layout } from "../components"
import { graphql, Link } from "gatsby"
import Image from "gatsby-image"
import styles from "./styles/products.module.css"

const products = ({ data }) => {
  //Deconstructing query from graphql
  const {
    product: { nodes: products },
  } = data

  return (
    <Layout>
      <section className={styles.products}>
        {products.map(prod => (
          <article key={prod.id}>
            <Image fluid={prod.image.fluid} alt={prod.title} />
            <h3>
              {prod.title} <span>${prod.price}</span>
            </h3>
            <Link to={`/products/${prod.slug}`}>More details</Link>
          </article>
        ))}
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    product: allContentfulProduct(filter: { title: { ne: "example" } }) {
      nodes {
        id
        price
        slug
        title
        image {
          fluid {
            ...GatsbyContentfulFluid_tracedSVG
          }
        }
      }
    }
  }
`
export default products
