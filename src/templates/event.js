import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Container from '../components/container'

class ProjectTemplate extends React.Component {
  render() {
    const event = get(this.props, 'data.contentfulEvents')
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <div className="page">
        <Container >
          <Helmet title={`${event.title} | ${siteTitle}`} />
          <h1 className="title">{event.title}</h1>
          <img src={event.image.sizes.src} alt="" />
          <p>{new Date(event.date).toDateString()}</p>
          <p>{event.price}</p>
          <p>{event.description}</p>
        </Container>
      </div>
    )
  }
}

export default ProjectTemplate

export const pageQuery = graphql`
  query EventBySlug($slug: String!) {
    contentfulEvents(slug: { eq: $slug }) {
      title
      description
      image {
        sizes(resizingBehavior: SCALE) {
          ...GatsbyContentfulSizes_withWebp
        }
      }
      date
      price
    }
  }
`
