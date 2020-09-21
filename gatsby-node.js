const path = require("path")

//Create pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const res = await graphql(`
    query getProductsSlug {
      products: allContentfulProduct(filter: { title: { ne: "example" } }) {
        nodes {
          slug
        }
      }
    }
  `)

  //Destructure response
  const {
    data: {
      products: { nodes: products },
    },
  } = res

  //Create page
  products.forEach(product => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: { slug: product.slug },
    })
  })
}
