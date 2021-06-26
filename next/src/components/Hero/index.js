import React from "react"
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

import Person404 from './Person404'
import Person from './Person'

import styles from "./hero.module.scss"

const Hero = ({title, children, alt }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  return (
    <section className={styles.hero} data-inview={inView}>
      <div className="grid">
        <div className="gridItem large-6 align-center">
          <h1 className={styles.heroTitle} ref={ref}>{title}</h1>
          <div className={styles.heroContent}>
            {children}
          </div>
        </div>
        <div className="gridItem large-6">
          <div className={styles.heroIcon}>
            {alt ? <Person404 className={styles.heroPerson} /> : <Person className={styles.heroPerson} />}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

Hero.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node
}
