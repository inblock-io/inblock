import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'
import Introduction from '../components/introduction'

class ServiceTemplate extends React.Component {
  render() {
    const service = get(this.props, 'data.contentfulOurServices')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')
    const [firstView] = get(this, 'props.data.allContentfulFirstView.edges')

    return (
      <div className="page">
        <Container >
          <Helmet title={`${service.title} | ${siteTitle}`} />
          <h1 className="title">{service.title}</h1>
          <Container>
            <Introduction introductionInfo={firstView.node} />
          </Container>
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
    allContentfulFirstView(limit:1){
      edges{
        node{
          mainTitle
          subtitle1
          subtitle2
          introductionImg {
            sizes(resizingBehavior: SCALE) {
             ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
