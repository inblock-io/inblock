import React from 'react'
import styles from './introduction.module.css'

export default ({ introductionInfo }) => (
  <div className={`row ${styles.introduction}`}>
    <div className={styles.background}></div>
    <div className="col-lg-6">
      <p>{introductionInfo.subtitle1}</p>
      <h1 className={styles.title}>{introductionInfo.mainTitle}</h1>
      <p className={styles.subtitle}>{introductionInfo.subtitle2}</p>
    </div>
    <div className="col-lg-6">
      <img className={styles.introImg} src={introductionInfo.introductionImg.sizes.srcWebp} alt=""/>
    </div>
  </div>

)
