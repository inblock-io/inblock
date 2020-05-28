import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './footer.module.css'

export default ({ siteDetails, socialLinks, staticPages }) => (
  <footer className={styles.footer}>
    <Container>
      <div className="row">
        <div className="col-sm-6">
          <img className={styles.logo} src={siteDetails.logoLight.sizes.src} alt={siteDetails.siteName}/>
        </div>
        <div className={`col-sm-6 ${styles.social}`}>
          {socialLinks.map(({ node }) => {
            if(node.link!==null){
              if(node.socialNetwork==="facebook"){
                return (
                  <a href={node.link} target="_blank">
                    <i className="fab fa-facebook-square"></i>
                  </a>)
              }
              if(node.socialNetwork==="youtube"){
                return (
                  <a href={node.link} target="_blank">
                    <i className="fab fa-youtube"></i>
                  </a>)
              }
              if(node.socialNetwork==="linkedin"){
                return (
                  <a href={node.link} target="_blank">
                    <i className="fab fa-linkedin"></i>
                  </a>)
              }
              if(node.socialNetwork==="twitter"){
                return (
                  <a href={node.link} target="_blank">
                    <i className="fab fa-twitter-square"></i>
                  </a>)
              }
              if(node.socialNetwork==="medium"){
                return (
                  <a href={node.link} target="_blank">
                    <i className="fab fa-medium-square"></i>
                  </a>)
              }
            }
          })}
        </div>
      </div>
      <div className={`row ${styles.copyrighRow}`}>
        <div className={`col-sm-6 ${styles.staticPages}`}>
          {staticPages.map(({ node }) => (
            <Link key={node.slug} className="" to={`/${node.slug}`}>{node.title}</Link>
          ))}
        </div>
        <div className="col-sm-6">
          <p className="mb-0">Copyright © 2020. All Rights Reserved.</p>
        </div>
      </div>
    </Container>
  </footer>
)

