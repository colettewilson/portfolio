import React from "react"
import { Link } from "gatsby"
import ModeToggle from "./modeToggle"
import MenuButton from "./menuButton"

import styles from "./nav.module.scss"

const Nav = (props) => {
  return (
    <>
      <MenuButton handleMobileMenu={props.handleMobileMenu} mobileMenuOpen={props.mobileMenuOpen} />
      <nav className={styles.nav} id="menu">
        <ul>
          <li>
            <Link to="/#about" onClick={props.handleMenuReset}>About me</Link>
          </li>
          <li>
            <Link to="/#portfolio" onClick={props.handleMenuReset}>Portfolio</Link>
          </li>
          <li>
            <a href="/colettewilsonwyatt_cv.pdf" onClick={props.handleMenuReset} target="_blank" rel="nofollow noopener noreferrer">Resume</a>
          </li>
          <li>
            <Link to="/#contact" onClick={props.handleMenuReset}>Contact</Link>
          </li>
        </ul>
        <ModeToggle handleMode={props.handleMode} mode={props.mode} />
      </nav>
    </>
  )
}

export default Nav
