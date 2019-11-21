import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Header from '../components/header'
import Footer from '../components/footer'
import get from 'lodash/get'

class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    const [siteDetails] = get(this, 'props.data.allContentfulSiteDetails.edges')
    const menuItems = get(this, 'props.data.allContentfulMenuItems.edges')
    const socialLinks = get(this, 'props.data.allContentfulSocials.edges')
    const footerStaticPages = get(this, 'props.data.allContentfulFooterStaticPages.edges')

    return (
      <div>
        <Header 
          siteDetails={siteDetails.node} 
          menuItems={menuItems}
          socialLinks={socialLinks}/>
        
          {children()}
        
        <Footer 
          siteDetails={siteDetails.node}
          socialLinks={socialLinks}
          staticPages={footerStaticPages}/>
      </div>
    )
  }
}

export default Template

export const pageQuery = graphql`
  query HeaderQuery {
    allContentfulSiteDetails(limit:1){
      edges{
        node{
          siteName
          logoDark{
            sizes(maxWidth: 130, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          logoLight{
            sizes(maxWidth: 180, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
    allContentfulMenuItems(sort: { fields: [createdAt], order: ASC }){
      edges{
        node{
          label
          link
        }
      }
    }
    allContentfulSocials{
      edges{
        node{
          socialNetwork
          link
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
