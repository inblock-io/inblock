import React from 'react'
import styles from './focus.module.css'

export default ({ focus }) => (
  <div className={`row ${styles.focus}`}>
    <div className="col-md-6 d-flex align-items-center">
      <div>
        <h2 className={styles.title}>
          <br className="d-md-none" />
          {focus.title}
        </h2>
        <p className={styles.description}>{focus.description}</p>
      </div>
    </div>
    <div className="col-md-6">
      <img className={styles.focusImg} src={focus.image.sizes.src} alt=""/>
    </div>
  </div>

)
