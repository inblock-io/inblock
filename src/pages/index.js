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

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const [firstView] = get(this, 'props.data.allContentfulFirstView.edges')
    const services = get(this, 'props.data.allContentfulOurServices.edges')
    const [focusInfo] = get(this, 'props.data.allContentfulFocusSection.edges')
    const projects = get(this, 'props.data.allContentfulProjects.edges')
    const partners = get(this, 'props.data.allContentfulPartners.edges')
    const [missionInfo] = get(this, 'props.data.allContentfulMission.edges')
    const events = get(this, 'props.data.allContentfulEvents.edges')
    const teamMembers = get(this, 'props.data.allContentfulTeamMembers.edges')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [contactSection] = get(this, 'props.data.allContentfulContactSection.edges')

    return (
      <div>
        <Helmet title={siteTitle} />
        <Container>
          <Introduction introductionInfo={firstView.node} />
        </Container>

        <MissionSection mission={missionInfo.node}/>

        <a className="anchor" id="services"></a>
        <Services services={services}/>

        {/* <Container>
          <FocusSection focus={focusInfo.node}/>
        </Container> */}

        <Projects projects={projects}/>

        <Events events={events}/>

        <Partners partners={partners}/>

        
        
        {/* <a className="anchor" id="team"></a>
        <Team teamMembers={teamMembers}/> */}

        <a className="anchor" id="contact"></a>
        <ContactSection contact={contactSection.node} />

        <Articles posts={posts} />
        {/* <a className="twitter-timeline" data-height="600" data-theme="light" data-link-color="#2B7BB9" href="https://twitter.com/inblockio?ref_src=twsrc%5Etfw">Tweets by inblockio</a>  */}
        
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }, limit:4 ) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          heroImage {
            sizes(maxWidth: 300, maxHeight: 200, resizingBehavior: SCALE) {
              ...GatsbyContentfulSizes_withWebp
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
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
    allContentfulOurServices(limit:3, sort: { fields: [createdAt], order: ASC}){
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
    allContentfulProjects(limit: 2) {
      edges {
        node {
          title
          slug
          description
          icon {
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
    allContentfulEvents(limit: 1) {
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
          facebook
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
