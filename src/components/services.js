import React from 'react'
import Container from '../components/container'
import styles from './services.module.css'

export default ({ services }) => (
  <div className={styles.services}>
    <Container>
      <div className="row">
        <div className="col-12">
          <h2 className="section-header">Our services</h2>
        </div>
        {services.map(({ node }) => {
          return (
            <div className={`col-lg-4 ${styles.serviceItem}`} key={node.title}>
              <h3 className="subtitle">{node.title}</h3>
              <p className="mb-0">{node.descriptionLong.content[0].content[0].value}</p>
            </div>
          )
        })}
      </div>
    </Container>
  </div>
  
)
