import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Link from 'gatsby-link'
import Container from '../components/container'
import Events from '../components/events'
import Team from '../components/team'

class About extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const teamMembers = get(this, 'props.data.allContentfulTeamMembers.edges')
    const events = get(this, 'props.data.allContentfulEvents.edges')

    return (
      <div className="page">
        <Helmet title={siteTitle} />
        
        <Team teamMembers={teamMembers}/>
        
        <Container>
          <Link className={`btn-custom mx-auto mt-3`} to="/legal">
            Legal
          </Link>
        </Container>
      
        {/* <Events events={events}/> */}
      </div>
    )
  }
}

export default About

export const pageQuery = graphql`
  query AboutQuery {
    allContentfulEvents {
      edges {
        node {
          title
          slug
          description
          date
          price
          image{
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
    allContentfulTeamMembers(limit: 4) {
      edges {
        node {
          name
          photo{
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          position
          about
          email
          linkedin
        }
      }
    }
  }
`
