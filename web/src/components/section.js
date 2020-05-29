import React from "react"

import styles from "./section.module.scss"

const Section = (props) => {
  const sectionId = props.sectionId ? {["id"]: props.sectionId} : null
  return (
    <section className={styles.section} {...sectionId}>
      <div className="grid">
        <div className="gridItem large-10 large-offset-1">
          {props.sectionTitle && <h2 className={styles.sectionTitle}><span>{props.sectionTitle}</span></h2>}
          {props.children}
        </div>
      </div>
    </section>
  )
}

export default Section
