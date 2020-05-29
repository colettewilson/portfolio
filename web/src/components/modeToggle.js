import React from "react"

import styles from "./modeToggle.module.scss"

const ModeToggle = (props) => {
  return (
    <button className={styles.modeToggle} data-mode={props.mode} onClick={props.handleMode}>
      <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
       viewBox="0 0 274 274" enableBackground="new 0 0 274 274">
        <path className={styles.modeDark} fill="currentColor" d="M222.5,137c0,46.3-38.1,83.8-85,83.8c-34.4,0-64.1-20.2-77.4-49.2c1.8,0.1,3.6,0.2,5.4,0.2c46.9,0,85-37.5,85-83.8
      c0-12.4-2.7-24.1-7.6-34.6C187.3,56.1,222.5,92.5,222.5,137z"/>
        <ellipse className={styles.modeLight} fill="currentColor" cx="137.5" cy="137" rx="71" ry="70"/>
        <circle fill="currentColor" cx="137" cy="16.5" r="16.5"/>
        <circle fill="currentColor" cx="137" cy="257.5" r="16.5"/>
        <circle fill="currentColor" cx="51.8" cy="51.8" r="16.5"/>
        <circle fill="currentColor" cx="222.2" cy="222.2" r="16.5"/>
        <circle fill="currentColor" cx="16.5" cy="137" r="16.5"/>
        <circle fill="currentColor" cx="257.5" cy="137" r="16.5"/>
        <circle fill="currentColor" cx="51.8" cy="222.2" r="16.5"/>
        <circle fill="currentColor" cx="222.2" cy="51.8" r="16.5"/>
      </svg>
    </button>
  )
}

export default ModeToggle
