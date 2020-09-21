import React from "react"
import { graphql, Link } from "gatsby"
import { Layout } from "../components"
import Image from "gatsby-image"
import styles from "./styles/product-template.module.css"

const productTemplate = ({ data }) => {
  //Deconstructure
  const {
    product: {
      title,
      price,
      image,
      info: { info },
    },
  } = data

  return (
    <Layout>
      <div style={{ textAlign: "center" }}>
        <Link to="/products">Back to products</Link>
        <h1 style={{ textTransform: "capitalize" }}>{title}</h1>
      </div>
      <section className={styles.singleProduct}>
        <aside>
          <Image fluid={image.fluid} alt={title} />
        </aside>
        <article>
          <h3>${price}</h3>
          <p>{info}</p>
        </article>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query getSingleProduct($slug: String) {
    product: contentfulProduct(slug: { eq: $slug }) {
      price
      title
      image {
        fluid {
          ...GatsbyContentfulFluid_tracedSVG
        }
      }
      info {
        info
      }
    }
  }
`

export default productTemplate
