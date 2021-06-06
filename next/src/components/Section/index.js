import React from "react"
import PropTypes from 'prop-types'
import { useInView } from 'react-intersection-observer'

import styles from "./section.module.scss"

const Section = ({ sectionId, sectionTitle, children, alignment }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  const id = sectionId ? {id: sectionId} : null
  let className = 'gridItem'
  if (alignment === 'left') className = 'gridItem large-6'
  if (alignment === 'right') className = 'gridItem large-6 large-offset-6'

  return (
    <section className={styles.section} {...id} data-inview={inView}>
      <div className="grid">
        <div className={className}>
          {!sectionTitle && <span ref={ref}></span>}
          {sectionTitle && 
            <h2 className={styles.sectionTitle} ref={ref}>{sectionTitle}</h2>
          }
          <div className={styles.sectionContent}>
            {children}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section

Section.propTypes = {
  sectionId: PropTypes.string,
  sectionTitle: PropTypes.string, 
  children: PropTypes.node,
  alignment: PropTypes.string
}
