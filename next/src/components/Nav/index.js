import React from "react"
import Link from "next/link"
import ModeToggle from "../ModeToggle"
import MenuButton from "../MenuButton"

import styles from "./nav.module.scss"

const Nav = (props) => {
  return (
    <>
      <MenuButton handleMobileMenu={props.handleMobileMenu} mobileMenuOpen={props.mobileMenuOpen} />
      <nav className={styles.nav} id="menu">
        <ul>
          <li>
            <Link href="/#about" onClick={props.handleMenuReset}>About</Link>
          </li>
          <li>
            <Link href="/#experience" onClick={props.handleMenuReset}>Experience</Link>
          </li>
          <li>
            <Link href="/#portfolio" onClick={props.handleMenuReset}>Portfolio</Link>
          </li>
          {/* <li>
            <a href="/colettewilsonwyatt_cv.pdf" onClick={props.handleMenuReset} target="_blank" rel="nofollow noopener noreferrer">Resume</a>
          </li> */}
          <li>
            <Link href="/#contact" onClick={props.handleMenuReset}>Contact</Link>
          </li>
        </ul>
        <ModeToggle handleMode={props.handleMode} mode={props.mode} />
      </nav>
    </>
  )
}

export default Nav
