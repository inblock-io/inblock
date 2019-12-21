import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import ArticlePreview from '../components/article-preview'
import styles from './articles.module.css'

export default ({ posts }) =>(
  <Container>
    <div className={styles.blogSection}>
      <div className="row">
        <div className="col-12">
          <h2 className={`title ${styles.title}`}>Latest Blogposts</h2>
        </div>
      </div>

      <div className={`container-fluid ${styles.postsWrapper}`}> 
        <div className={`row flex-nowrap flex-lg-wrap ${styles.postsRow}`}>
        {posts.map(({ node }) => {
            return (
              <div className={`col-9 col-sm-5 col-lg-3 ${styles.post}`}>
                <ArticlePreview article={node} />
              </div>
            )
          })}
        </div>
      </div>
      
      <Link className="btn-custom btn-custom-light mx-lg-auto" to="/blog">more posts</Link>
      
    </div>
  </Container>
)
