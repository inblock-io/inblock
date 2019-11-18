import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './events.module.css'

export default ({ events }) => (
  <Container>
    <div className="row">
      <div className="col-12">
        <h2 className="title section-header">Our Events</h2>
      </div>
    </div>
    {events.map(({ node }) => {
      let date = new Date(node.date);
      return (
        <div key={node.slug} className={`row ${styles.event}`}>
          <div style={{ backgroundImage: `url(${node.image.sizes.src})` }} 
            className={`col-lg-3 ${styles.eventImg}`}>
          </div>
          <div className={`col-lg-9 ${styles.eventInfo}`}>
            <div className="row">
              <div className="col-md-8">
                <p className={styles.date}>{new Date(node.date).toDateString() }</p>
                <h3>
                  <Link className={`subtitle ${styles.title}`} to={`/events/${node.slug}`}>
                    {node.title}
                  </Link>
                </h3>
                <p>{node.description}</p>
              </div>
              <div className={`col-md-4 ${styles.priceWrapper}`}>
                <p>
                  <span className={styles.priceTitle}>Participation fee:</span><br />
                  <span className={styles.price}>{node.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )
    })}
    <div className="row">
      <div className="col-12">
        <Link className={`btn-custom btn-custom-light ${styles.btnMore}`} to="">See past events</Link>
      </div>
    </div>
  </Container>
)
