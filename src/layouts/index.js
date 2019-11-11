import React, { Fragment } from 'react'
import Link from 'gatsby-link'
import base from './base.css'
import Container from '../components/container'
import Header from '../components/header'
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

    return (
      <div>
        <Header siteDetails={siteDetails.node} menuItems={menuItems}/>
        
          {children()}
       
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
          logo{
            sizes(maxWidth: 130, resizingBehavior: SCALE) {
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
  }
`
