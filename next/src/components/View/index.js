import React from "react"
import PropTypes from 'prop-types'

// import { useModalStore } from '../../stores/modal'

import Image from '../../lib/image'

import styles from "./view.module.scss"

const View = ({ layout, projects }) => {
  // const { setModalDisplay, setModalContent } = useModalStore()

  // const handleClick = (evt, project) => {
  //   evt.preventDefault()

  //   setModalDisplay(true)
  //   setModalContent(project)
  // }

  return (
    <ul className={styles.view} data-layout={layout}>
      {projects.map(project =>
        <li className={styles.gridItem} key={project._id}>
          <a href={project.website} target="_blank" rel="noopener noreferrer nofollow">
            <div className={styles.gridThumbnail}>
              <div className={styles.gridThumbnailInner}>
                <Image source={project.image} />

              </div>
            </div>
            <div className={styles.gridContent}>
              <header>
                <h3>{project.title}</h3>
                {project.tag && <p>Employment: <b>{project.tag.name}</b></p>}
              </header>
              <p>{project.excerpt}</p>
            </div>
          </a>
        </li>
      )}
    </ul>
  )
}

export default View

View.propTypes = {
  layout: PropTypes.string,
  projects: PropTypes.array
}
