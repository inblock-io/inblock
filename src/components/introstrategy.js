import React from 'react'
import styles from './introstrategy.module.css'

export default ({ introstrategyInfo }) => (
  <div className={`row ${styles.introstrategy}`}>
    <div className={styles.background}></div>
    <div className="col-lg-6">
      <p>{introstrategyInfo.subtitle1}</p>
      <h1 className={styles.title}>{introstrategyInfo.mainTitle}</h1>
      <p className={styles.subtitle}>{introstrategyInfo.subtitle2}</p>
    </div>
    <div className="col-lg-6">
      <img className={styles.introImg} src={introstrategyInfo.introductionImg.sizes.src} alt=""/>
    </div>
  </div>

)
