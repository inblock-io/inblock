import React from 'react'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import ArticlePreview from '../components/article-preview'
import Introduction from '../components/introduction'
import Services from '../components/services'
import FocusSection from '../components/focus'
import Container from '../components/container'
import Projects from '../components/projects'

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [firstView] = get(this, 'props.data.allContentfulFirstView.edges')
    const services = get(this, 'props.data.allContentfulOurServices.edges')
    const [focusInfo] = get(this, 'props.data.allContentfulFocusSection.edges')
    const projects = get(this, 'props.data.allContentfulProject.edges')
    console.log(projects)
    return (
      <div>
        <Helmet title={siteTitle} />
        <Container>
          <Introduction introductionInfo={firstView.node} />
        </Container>
        <Services services={services}/>

        <Container>
          <FocusSection focus={ focusInfo.node }/>
        </Container>

        <Projects projects={projects}/>

        <p>&nsbp;</p>
        <p>&nsbp;</p>
        <p>&nsbp;</p>
        <p>&nsbp;</p>
        <p>&nsbp;</p>
        <p>&nsbp;</p>
        
        {/* <div className="wrapper">
          <h2 className="section-headline">Recent articles</h2>
          <ul className="article-list">
            {posts.map(({ node }) => {
              return (
                <li key={node.slug}>
                  <ArticlePreview article={node} />
                </li>
              )
            })}
          </ul>
        </div> */}
      </div>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            sizes(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
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
    allContentfulPerson(filter: { id: { eq: "c15jwOBqpxqSAOy2eOO4S0m" } }) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            sizes(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulSizes_withWebp
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
    allContentfulProject(limit: 2) {
      edges {
        node {
          title
          slug
          description
          
        }
      }
    }
  }
`
