import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import dummyImg from "../../assets/images/img3.jpg"
import styles from "./images.module.css"

const getImage = graphql`
  {
    fixed: file(relativePath: { eq: "images/img1.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "images/img2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`

const Images = () => {
  const { fixed, fluid } = useStaticQuery(getImage)

  return (
    <section className={styles.images}>
      <article className={styles.singleImage}>
        <h3>basic image</h3>
        <img src={dummyImg} width="100%" alt="Dummy img" />
      </article>
      <article className={styles.singleImage}>
        <h3>fixed image/blur</h3>
        <Image fixed={fixed.childImageSharp.fixed} />
      </article>
      <article className={styles.singleImage}>
        <h3>fluid image/svg</h3>
        <Image fluid={fluid.childImageSharp.fluid} />
      </article>
    </section>
  )
}

export default Images
