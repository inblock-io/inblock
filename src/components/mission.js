import React from 'react'
import Container from '../components/container'
import styles from './mission.module.css'

export default ({ mission }) => (
  <Container>
    <div className={`row ${styles.mission}`}>
      <div className="col-12">
        {/* <p className={styles.subtitle}>{mission.subtitle}</p>
        <h2 className={`title ${styles.title}`} >{mission.title}</h2> */}
      </div>
      

      <div className="col-md-6 col-lg-5">
        {mission.descriptionHalf.content.map(({ content }) => {
          if(content[0] !== undefined){
            return (
              <p key={content[0].value}>{content[0].value}</p>
            )
          }
          return;
          }) }
      </div>
      <div className="col-md-6 col-lg-5 offset-lg-1">
        {mission.descriptionHalf2.content.map(({ content }) => {
          if(content[0] !== undefined){
            return (
              <p key={content[0].value}>{content[0].value}</p>
            )
          }
          return;
          }) }
      </div>
    </div>
  </Container>
)
