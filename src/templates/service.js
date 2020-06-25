import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'
import Introduction from '../components/introduction'
import styles from './service.module.css'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this.props, 'data.contentfulOurServices')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="page"> 
        <Helmet title={`${service.title} | ${siteTitle}`} />
        <div className="title-bg text-center">
          <h1 className={`title ${styles.title}`}>{service.title}</h1>
        </div>
        <Container >
          <div className="title-bg my-4 p-4">
            <h2 className={`mb-0 ${styles.title}`}>{service.motivation}</h2>
          </div>
          
          <div className="row">
            <div className="col-12">
              <h2 className="title section-header">{service.serviceSubtitle1}</h2>
              {/* <p>serviceSubtext1{service.serviceSubtext1}</p> */}
            </div>
          </div>
        </Container>
        {/* <div
          dangerouslySetInnerHTML={{
            __html: service.body.childMarkdownRemark.html,
          }}
        /> */}
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
      motivation
      serviceSubtitle1
    }
  }
`
