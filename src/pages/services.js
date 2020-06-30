import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import Introduction from '../components/introduction'
import Services from '../components/services'
import Container from '../components/container'
import MissionSection from '../components/mission'
import styles from '../templates/service.module.css'
import StrategyIntro from '../components/introstrategy'

class ServicesPage extends React.Component {
  render() {
    /* Gets data via graphQL queries defined at the bottom of the page */
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const services = get(this, 'props.data.allContentfulOurServices.edges')
    const [servicesOverview] = get(this, 'props.data.allContentfulServicesOverview.edges')
    const [missionInfo] = get(this, 'props.data.allContentfulMission.edges')

    return (
      <div className="page">
        <Helmet title={siteTitle} />
        <div className="title-bg text-center">
          <h1 className={`title ${styles.title}`}>Our Services</h1>
        </div>

        {/*<MissionSection mission={missionInfo.node}/>*/}
        
        <StrategyIntro introstrategyInfo={servicesOverview.node}/>
        
        {/*<Container>
          <div className="row">
            <div className="col-12">
              <div className="">
                <h3 className="">S</h3>
              </div>
            </div>
          </div>
        </Container>*/}

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
    allContentfulMission(limit: 1) {
      edges {
        node {
          subtitle
          title
          descriptionHalf {
            content{
              content{
                value
              }
            }
          }
          descriptionHalf2 {
            content{
              content{
                value
              }
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
    allContentfulServicesOverview {
      edges {
        node {
          title
          subtitle
          childContentfulServicesOverviewIntrotextTextNode {
            childMarkdownRemark {
              html
          }
        }
        }
      }
    }
  }
`
