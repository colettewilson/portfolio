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
            <Link href="/#about">
              <a onClick={props.handleMenuReset}>About</a>
            </Link>
          </li>
          <li>
            <Link href="/#experience">
              <a onClick={props.handleMenuReset}>Experience</a>
            </Link>
          </li>
          <li>
            <Link href="/#portfolio">
              <a onClick={props.handleMenuReset}>Portfolio</a>  
            </Link>
          </li>
          <li>
            <a href="/colette-wilson-wyatt-cv.pdf" onClick={props.handleMenuReset} target="_blank" rel="nofollow noopener noreferrer">Resume</a>
          </li>
          <li>
            <Link href="/#contact">
              <a onClick={props.handleMenuReset}>Contact</a>
            </Link>
          </li>
        </ul>
        <ModeToggle handleMode={props.handleMode} mode={props.mode} />
      </nav>
    </>
  )
}

export default Nav
