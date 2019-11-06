import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './header.module.css'
import header from './header.css'

export default ({ siteDetails, menuItems }) => (
  <header className={styles.header}>
    <Container>
      <nav className={`navbar navbar-expand-lg ${styles.navbar}`}>
        <img className={styles.logo} src={siteDetails.logo.sizes.src} alt={siteDetails.siteName}/>
        
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false">
          <span className={`navbar-toggler-icon ${styles.navigationIcon}`}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbar">
          <ul className="navbar-nav mr-auto">
            {menuItems.map(({ node }) => {
                return (
                  <li key={node.label} className={`nav-item ${styles.navigationItem}`}>
                    <Link className="nav-link" to={node.link}>{node.label}</Link>
                  </li>
                )
              })}
          </ul>
          <Link className={`btn-custom ${styles.btnContact}`} to="">CONTACT</Link>
          <div className={`d-lg-none ${styles.social}`}>
            <a href="#"><i className="fab fa-youtube"></i></a>
            <a href="#"><i className="fab fa-facebook-square"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter-square"></i></a>
          </div>
        </div>
      </nav>
    </Container>
  </header>
)

