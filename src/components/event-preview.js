import React from 'react'
import Link from 'gatsby-link'
import styles from './event-preview.module.css'

export default ({ event }) => {
  let date = new Date(event.date);
  return (
    <div key={event.slug} className={`row ${styles.event}`}>
      <div style={{ backgroundImage: `url(${event.image.sizes.src})` }} 
        className={`col-lg-3 ${styles.eventImg}`}>
      </div>
      <div className={`col-lg-9 ${styles.eventInfo}`}>
        <div className="row">
          <div className="col-md-8">
            <p className={styles.date}>{new Date(event.date).toDateString() }</p>
            <h3>
              <Link className={`subtitle ${styles.title}`} to={`/events/${event.slug}`}>
                {event.title}
              </Link>
            </h3>
            <p>{event.description}</p>
          </div>
          <div className={`col-md-4 ${styles.priceWrapper}`}>
            <p>
              <span className={styles.priceTitle}>Participation fee:</span><br />
              <span className={styles.price}>{event.price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
)}
