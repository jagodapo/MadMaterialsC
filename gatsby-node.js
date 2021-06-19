/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require("path")

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogTemplate = path.resolve("./src/templates/blogpost-template.js")
  const materialCardTemplate = path.resolve(
    "./src/templates/material-template.js"
  )
  const res = await graphql(`
    query {
      allContentfulMaterialCard {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulBlogPost.edges.forEach(edge => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })

  res.data.allContentfulMaterialCard.edges.forEach(edge => {
    createPage({
      component: materialCardTemplate,
      path: `/discover/${edge.node.slug}`,
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
