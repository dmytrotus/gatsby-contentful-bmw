const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-post-contentful.js`)
  const mainPages = path.resolve(`./src/templates/page-contentful.js`)

  const result = await graphql(
    `
      {
        allContentfulPost {
          edges {
            node {
              title
              slug
              content {
                json
              }
            }
          }
        }

        allContentfulPage {
          edges {
            node {
              slug
              title
            }
          }
        }

     allContentfulSectionLeftText {
      edges {
        node {
          title
          content {
            json
          }
          image {
            file {
              url
            }
          }
        }
      }
    }


     allContentfulSectionRightText {
        edges {
          node {
            title
            content {
              json
            }
            image {
              file {
                url
              }
            }
          }
        }
      }


      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create blog posts pages.
  const posts = result.data.allContentfulPost.edges

  posts.forEach((post, index) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: blogPost,
      context: {
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })

  // Create Main Pages.
  const pages = result.data.allContentfulPage.edges

  pages.forEach((post, index) => {
    const previous = index === pages.length - 1 ? null : pages[index + 1].node
    const next = index === 0 ? null : pages[index - 1].node

    createPage({
      path: page.slug,
      component: mainPages,
      context: {
        slug: page.node.slug,
      },
    })
  })

  
}

/*exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}*/
