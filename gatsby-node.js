const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve('./src/templates/blog-post.js')
    const projectTemplate = path.resolve('./src/templates/project.js')
    const footerStaticPageTemplate = path.resolve('./src/templates/footer-static-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulBlogPost {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulProjects {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulFooterStaticPages {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulBlogPost.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/blog/${post.node.slug}/`,
            component: blogPost,
            context: {
              slug: post.node.slug
            },
          })
        })

        const projects = result.data.allContentfulProjects.edges
        projects.forEach((project, index) => {
          createPage({
            path: `/projects/${project.node.slug}/`,
            component: projectTemplate,
            context: {
              slug: project.node.slug
            },
          })
        })

        const footerStaticPages = result.data.allContentfulFooterStaticPages.edges
        footerStaticPages.forEach((page, index) => {
          createPage({
            path: `/${page.node.slug}/`,
            component: footerStaticPageTemplate,
            context: {
              slug: page.node.slug
            },
          })
        })
      })
    )
  })
}
