import React from 'react'
import Container from '../components/container'
import styles from './partners.module.css'

export default ({ partners }) => (
  <div className={styles.partners}>
    <Container>
      <img className={styles.titleImg} src="/3d-cube.svg" alt=""/>
      <div className="d-block">
        <h2 className={styles.title}>Key partners <br className="d-none d-lg-block" /></h2>
      
        <div className="d-flex flex-wrap justify-content-center">
          {partners.map(({ node }) => {
            return (
              <a key={node.title} href={node.link} target="_blank">
                <img  className={styles.partnerLogo} src={node.logo.sizes.src} alt={node.title}/>
              </a>
            )
          })}
        </div>
      </div>
      
    </Container>
  </div>
  
)
