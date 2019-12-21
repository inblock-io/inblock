import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import styles from './blog.module.css'
import ArticlePreview from '../components/article-preview'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
      <div className="page">
        <Container>
          <Helmet title={siteTitle} />
          <h1 className="title">Blog</h1>
          <div className="row">
            {posts.map(({ node }) => {
              return (
                <div key={node.slug} className={`col-12 col-sm-6 col-md-4 col-lg-3 ${styles.post}`}>
                  <ArticlePreview article={node} />
                </div>
              )
            })}
          </div>
        </Container>
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
  }
`
