import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import Introduction from '../components/introduction'
import Services from '../components/services'
import FocusSection from '../components/focus'
import Container from '../components/container'
import Projects from '../components/projects'
import Partners from '../components/partners'
import MissionSection from '../components/mission'
import Events from '../components/events'
import Team from '../components/team'
import Articles from '../components/articles'
import ContactSection from '../components/contact'
import VideoSection from '../components/videos'

class RootIndex extends React.Component {
  render() {
    /* Gets data via graphQL queries defined at the bottom of the page */
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [firstView] = get(this, 'props.data.allContentfulFirstView.edges')
    const services = get(this, 'props.data.allContentfulOurServices.edges')
    const [focusInfo] = get(this, 'props.data.allContentfulFocusSection.edges')
    const projects = get(this, 'props.data.allContentfulProjects.edges')
    const videoDescription = get(this, 'props.data.allContentfulVideoDescription.edges')
    const videos = get(this, 'props.data.allContentfulVideos.edges')
    const partners = get(this, 'props.data.allContentfulPartners.edges')
    const [missionInfo] = get(this, 'props.data.allContentfulMission.edges')
    const events = get(this, 'props.data.allContentfulEvents.edges')
    const teamMembers = get(this, 'props.data.allContentfulTeamMembers.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [contactSection] = get(this, 'props.data.allContentfulContactSection.edges')

    console.log(videos)

    return (
      <div>
        <Helmet title={siteTitle} />
        <Container>
          <Introduction introductionInfo={firstView.node} />
        </Container>

        <MissionSection mission={missionInfo.node}/>

        <a className="anchor" id="services"></a>
        <Services services={services}/>

        <Partners partners={partners}/>

        <a className="anchor" id="contact"></a>
        <ContactSection contact={contactSection.node} />

        {/* Latest Medium Posts Component can be added here later , leave this comment here */}

        {/* NEEDS TO BE MODIFIED BY CSS, TOO UGLY BY DEFAULT <a className="twitter-timeline" data-height="600" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/inblockio?ref_src=twsrc%5Etfw">Tweets by inblockio</a>  */}
        
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
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
    allContentfulFocusSection(limit: 1) {
      edges {
        node {
          title
          description
          image{
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
    allContentfulPartners(limit: 4) {
      edges {
        node {
          title
          logo{
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          link
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
    allContentfulContactSection(limit: 1) {
      edges {
        node {
          title
          subtitle
          buttonText
          icon{
            sizes(resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
        }
      }
    }
  }
`
