import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Container from '../components/container'
import EventPreview from '../components/event-preview'

class Events extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const events = get(this, 'props.data.allContentfulEvents.edges')

    return (
      <div className="page">
        <Container>
          <Helmet title={siteTitle} />
          <div className="row">
            <div className="col-12">
              <h2 className="title section-header">Our Events</h2>
            </div>
          </div>
          {events.map(({ node }) => <EventPreview event={node} />)}
        </Container>
      </div>
    )
  }
}

export default Events

export const pageQuery = graphql`
  query EventsPageQuery {
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
  }
`
