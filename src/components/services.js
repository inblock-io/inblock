import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './services.module.css'

export default ({ services }) => (
  <div className={styles.services}>
    <Container>
      <div className="row">
        <div className="col-12">
          <h2 className="title section-header">Our services</h2>
        </div>
        {services.map(({ node }) => {
          return (
            <div className={`col-lg-4 ${styles.serviceItem}`} key={node.title}>
              <h3 className="subtitle">{node.title}</h3>
              <p className="mb-1">{node.descriptionLong.content[0].content[0].value}</p>
              <Link className="read-more ml-auto" to={`/services/${node.slug}`}>Read more</Link>
            </div>
          )
        })}
      </div>
    </Container>
  </div>
  
)
