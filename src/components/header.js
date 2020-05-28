import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './header.module.css'
import header from './header.css'

export default ({ siteDetails, menuItems, socialLinks }) => (
  <header className={styles.header}>
    <Container>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <Link to={"/"}>
          <img className={styles.logo} src={siteDetails.logoDark.sizes.src} alt={siteDetails.siteName}/>
        </Link>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
          <span className={`navbar-toggler-icon ${styles.navigationIcon}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav ml-auto">
            {menuItems.map(({ node }) => {
                return (
                  <li key={node.label} className={`nav-item ${styles.navigationItem}`} data-toggle="collapse" data-target=".navbar-collapse.show">
                    <Link className="nav-link" to={node.link} >{node.label}</Link>
                  </li>
                )
              })}
          </ul>
          <span data-toggle="collapse" data-target=".navbar-collapse.show">
            <Link className={`btn-custom ${styles.btnContact}`} to="/#contact">
              CONTACT
            </Link>
          </span>
          <div className={`d-lg-none ${styles.social}`}>
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
                      <i className="fab fa-medium"></i>
                    </a>)
                }
              }
            })}
          </div>
        </div>
      </nav>
    </Container>
  </header>
)

