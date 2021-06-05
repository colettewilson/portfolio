import React from "react"
import { useInView } from 'react-intersection-observer'

import Desk from './Desk'

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
            <svg className={styles.heroShape} viewBox="0 0 336 355" version="1.1">
              <path fill="currentColor" d="M38.945,316.997c61.65,42.696 138.349,51.922 205.432,14.136c85.022,-47.892 114.986,-167.565 71.73,-252.987c-11.084,-21.889 -26.405,-39.291 -45.472,-54.602c-11.526,-9.255 -20.212,-14.309 -34.299,-18.86c-5.614,-1.814 -11.434,-3.059 -17.288,-3.794c-7.476,-0.938 -21.419,-1.485 -30.007,0.186c-24.518,4.769 -43.151,25.036 -55.121,45.716c-14.042,24.261 -19.343,53.837 -36.565,76.165c-20.203,26.193 -48.806,45.158 -72.008,68.443c-13.888,13.938 -24.379,32.438 -25.245,52.451c-0.275,6.355 -0.012,12.776 1.004,19.055c1.165,7.197 6.13,18.527 10.264,24.405c7.912,11.249 13.995,20.281 27.575,29.686Z" shapeRendering="geometricPrecision" />
            </svg>
            <Desk className={styles.heroDesk}  />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
