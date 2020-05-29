import React from "react"
import { Link } from "gatsby"

import styles from "./view.module.scss"

const View = (props) => {
  return (
    <ul className={styles.view} data-layout={props.layout}>
      {props.projects.map(project =>
        <li className={styles.gridItem} key={project._id}>
          <Link to={`/portfolio/${project.slug.current}`}>
            <div className={styles.gridThumbnail} style={{backgroundImage: `url(${project._rawImage ? project._rawImage.asset.url : null})`}}></div>
            <div className={styles.gridContent}>
              <h3>{project.title}</h3>
              <p>{project.excerpt}</p>
            </div>
          </Link>
        </li>
      )}
    </ul>
  )
}

export default View
