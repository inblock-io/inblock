import React from 'react'
import Container from '../components/container'
import styles from './team.module.css'

export default ({ teamMembers }) => (
  <Container>
    <div className="row">
      <div className="col-lg-4">
        <h2 className={`title ${styles.title}`}>Meet Our Team</h2>
        <div className={styles.underTitleBlock}></div>
      </div>
      <div className="col-lg-8">
        <div className={`container-fluid ${styles.teamWrapper}`}> 
          <div className={`row flex-nowrap flex-lg-wrap ${styles.teamRow}`}>
            {teamMembers.map(({ node }) => {
              return (
                <div key={node.name} className={`col-10 col-sm-5 col-lg-6 ${styles.teamMember}`}>
                  <img src={node.photo.sizes.src} alt={node.name}/>
                  <h3 className={styles.name}>{node.name}</h3>
                  <p>{node.position}</p>
                  <p>{node.about}</p>
                  <p>
                    <a className={styles.email} href={`mailto:${node.email}`}>{node.email}</a>
                  </p>
                  {node.facebook!==null ? 
                    <a className={styles.socialLink} href={node.facebook} target="_blank">
                      <i className="fab fa-facebook-square"></i>
                    </a>
                    : "" }
                  {node.linkedin!==null ? 
                    <a  className={styles.socialLink} href={node.linkedin} target="_blank">
                      <i className="fab fa-linkedin"></i>
                    </a>
                    : "" }
                </div>
              )
            })}
          </div>
        </div>
        
      </div>
    </div>
  </Container>
)
