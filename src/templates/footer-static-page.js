import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'

class FooterStaticTemplate extends React.Component {
  render() {
    const staticPage = get(this.props, 'data.contentfulFooterStaticPages')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="page">
        <Container >
          <Helmet title={`${staticPage.title} | ${siteTitle}`} />
          <h1 className="title">{staticPage.title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: staticPage.body.childMarkdownRemark.html,
            }}
          />
        </Container>
      </div>
    )
  }
}

export default FooterStaticTemplate

export const pageQuery = graphql`
  query FooterStaticPageBySlug($slug: String!) {
    contentfulFooterStaticPages(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
