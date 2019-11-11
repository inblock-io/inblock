import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './projects.module.css'

export default ({ projects }) => (
  <Container>
    <div className="row">
      <div className="col-12">
        <h2 className="section-header">Projects</h2>
      </div>
      {projects.map(({ node }) => {
        return (
          <div key={node.slug} className="col-md-6">
            <div className={`d-flex flex-column ${styles.project}`}>
              <p className={styles.projectDescription}>{node.description}</p>
              <div className="d-flex">
                <img className={styles.projectImg} src="/project.png" alt="" />
                <Link className="read-more ml-auto" to={`/projects/${node.slug}`}>Read more</Link>
              </div>
            </div>
          </div>
        )
      })}
      <div className="col-12 ">
        <div className={styles.contactLineWrapper}>
          <div className={styles.contactLine}>
            <h3>Would you like to know more? Get in touch with us.</h3>
            <Link className={`read-more ${styles.contactLink}`} to={'#'}>Contact us</Link>
          </div>
        </div>
      </div>
    </div>
  </Container>
)
