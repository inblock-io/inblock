import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'

class ProjectTemplate extends React.Component {
  render() {
    const project = get(this.props, 'data.contentfulProject')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="page">
        <Container >
          <Helmet title={`${project.title} | ${siteTitle}`} />
          <h1>{project.title}</h1>
          <p></p>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: project.body.childMarkdownRemark.html,
            }}
          /> */}
            
        </Container>
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query ProjectBySlug($slug: String!) {
    contentfulProject(slug: { eq: $slug }) {
      title
      description
    }
  }
`
