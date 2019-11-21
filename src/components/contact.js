import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './contact.module.css'

export default ({ contact }) => (
  <div className={styles.contact}>
    <Container>
      <div className="row">
        <div className="col-lg-8 col-md-10">
          <h2 className={`title ${styles.title}`}>{contact.title}</h2>
          <p className={styles.subtitle}>{contact.subtitle}</p>
          <Link className={`btn-custom ${styles.btnContact}`} to="">{contact.buttonText}</Link>
        </div>
        {contact.icon!==null ? 
          <div className="col-lg-4 col-md-2 d-flex align-items-center">
            <img className={styles.icon} src={contact.icon.sizes.src} alt=""/>
          </div>
          :""
        }  
      </div> 
      
      
    </Container>
  </div>
  
)
