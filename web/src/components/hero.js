import React from "react"

import styles from "./hero.module.scss"

const Hero = (props) => {
  return (
    <section className={props.extra ? styles.hero : styles.heroAlt}>
      <div className={styles.heroContent}>
        <h1><span>{props.title}</span></h1>
      </div>
      {props.extra &&
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 1366 760.9" enableBackground="new 0 0 1366 760.9" preserveAspectRatio="none">
          <path fill="currentColor" d="M1366,587.8v185.1H0v-57.6c92-16.5,182,31.7,275.7,40.8c34.4,3.4,69.4,1.4,103.5-3.5c176.7-25.3,328.9-127.3,507.5-141.2
            c44.3-3.4,88.9-1.2,133.3,0.9c57.8,2.8,115.5,5.6,173.2,8.4c27.8,1.3,55.9,2.7,83.3-1.3C1309.4,614.7,1338.6,602.9,1366,587.8z"/>
        </svg>
      }
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </section>
  )
}

export default Hero
