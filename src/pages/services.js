import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Introduction from '../components/introduction'
import Services from '../components/services'
import Container from '../components/container'
import MissionSection from '../components/mission'
import styles from '../templates/service.module.css'

class ServicesPage extends React.Component {
  render() {
    /* Gets data via graphQL queries defined at the bottom of the page */
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const services = get(this, 'props.data.allContentfulOurServices.edges')

    return (
      <div className="page">
        <Helmet title={siteTitle} />
        <div className="title-bg text-center">
          <h1 className={`title ${styles.title}`}>Services</h1>
        </div>

        <Services services={services}/>
      </div>
    )
  }
}

export default ServicesPage

export const pageQuery = graphql`
  query ServicesPageQuery {
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
    allContentfulOurServices(limit:2, sort: { fields: [createdAt], order: ASC}){
      edges{
        node{
          title
          slug
          descriptionLong {
            content {
              content {
                value
              }
            }
          }
        }
      }
    }
  }
`
