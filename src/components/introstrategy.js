import React from 'react'
import styles from './introstrategy.module.css'
import Container from '../components/container'

export default ({ introstrategyInfo }) => (
  <Container>
  <div className={`row ${styles.fullintro_decoration_row}`}>
    <div className="col-8">
      <h3 className="">Not showing{introstrategyInfo.subtitle}</h3>
      <p>Also not showing{introstrategyInfo.title}</p>
    </div>
  </div>
  </Container>
)
