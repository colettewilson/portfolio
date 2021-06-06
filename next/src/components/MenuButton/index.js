import React from "react"

import styles from "./menuButton.module.scss"

const MenuButton = (props) => {
  return (
    <button className={styles.menuButton} aria-expanded={props.mobileMenuOpen} aria-controls="menu" onClick={props.handleMobileMenu}>
      <span className={styles.menuButtonLabel}>Menu</span>
      <span className={styles.menuButtonIcon}></span>
    </button>
  )
}

export default MenuButton
