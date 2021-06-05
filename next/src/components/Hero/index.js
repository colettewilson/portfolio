import React from "react"
import { useInView } from 'react-intersection-observer'

import Person from './Person'

import styles from "./hero.module.scss"

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <section className={styles.hero} data-inview={inView}>
      <div className="grid">
        <div className="gridItem large-6 align-center">
          <h1 className={styles.heroTitle} ref={ref}>Hi, I code web apps for people.</h1>
          <div className={styles.heroContent}>
            <p>I'm passionate about building modern web applications with a focus on user experience, accessibility and performance.</p>
            <p>I'm accepting projects so why not <a href="#contact">get in touch</a>?</p>
          </div>
        </div>
        <div className="gridItem large-6">
          <div className={styles.heroIcon}>
            <Person className={styles.heroPerson} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
