import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import EventPreview from '../components/event-preview'
import styles from './events.module.css'

export default ({ events }) => (
  <Container>
    <div className="row">
      <div className="col-12">
        <h2 className="title section-header">Our Events</h2>
      </div>
    </div>
    {events.map(({ node }) => <EventPreview event={node} />)}
    <div className="row">
      <div className="col-12">
        <Link className={`btn-custom btn-custom-light ${styles.btnMore}`} to="/events">See Previous Events List</Link>
      </div>
    </div>
  </Container>
)
