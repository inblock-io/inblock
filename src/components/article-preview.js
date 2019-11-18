import React from 'react'
import Link from 'gatsby-link'
import styles from './article-preview.module.css'

export default ({ article }) => (
  <div>
    <img src={article.heroImage.sizes.src} alt="" />
    <p className={styles.date}>{article.publishDate}</p>
    <h3>
      <Link className={`subtitle ${styles.postTitle}`} to={`/blog/${article.slug}`}>{article.title}</Link>
    </h3>
  </div>
)
