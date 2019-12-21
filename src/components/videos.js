import React from 'react'
import Link from 'gatsby-link'
import Container from '../components/container'
import styles from './videos.module.css'

export default ({ videoDescriptions, videos }) => (
  <Container>
    <div className="row">
      {videoDescriptions.map(({ node },index) => {
        return (
          <div key={index} className="col-md-6">
            <div className={styles.videoDescription}>
              <p>{node.description}</p>
            </div>
          </div>
        )
      })}
      <div id="videoCarousel" className={`carousel slide ${styles.videoCarousel}`} data-ride="carousel">
        <div className="carousel-inner">
          {videos.map(({ node },index) => {
            return (
              <div key={index} className={`col-12 carousel-item ${index===0 ? 'active' : '' }`}>
                <video className={styles.video} controls="controls">
                  <source src={node.video.file.url} type={node.video.file.contentType} />
                </video>
              </div>
            )
          })}
        </div>
        <a className="carousel-control-prev" href="#videoCarousel" role="button" data-slide="prev">
          <span className={`carousel-control-prev-icon ${styles.carouselPrevIcon}`} aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#videoCarousel" role="button" data-slide="next">
          <span className={`carousel-control-next-icon ${styles.carouselNextIcon}`} aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>

    
  </Container>
)
