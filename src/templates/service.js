import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this.props, 'data.contentfulOurServices')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="page">
        <Container >
          <Helmet title={`${service.title} | ${siteTitle}`} />
          <h1 className="title">{service.title}</h1>
          {/* <div
            dangerouslySetInnerHTML={{
              __html: service.body.childMarkdownRemark.html,
            }}
          /> */}
        </Container>
      </div>
    )
  }
}

export default ServiceTemplate
// description {
//   childMarkdownRemark {
//     html
//   }
// }
// body {
//   childMarkdownRemark {
//     html
//   }
// }
export const pageQuery = graphql`
  query ServiceBySlug($slug: String!) {
    contentfulOurServices(slug: { eq: $slug }) {
      title
    }
  }
`
