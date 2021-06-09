import React, { useRef, useEffect } from "react"
import Link from "next/link"

import { useHeaderStore } from '../../stores/header'
import { scramble } from '../../hooks/scrambler'

import Nav from "../Nav"

import styles from "./header.module.scss"

const Header = (props) => {
  const { scrollHeader } = useHeaderStore()
  const title = useRef()

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")

    if (!mediaQuery.matches) {
      const scrolled = window?.scrollY > 50
      if (!scrolled && title.current) scramble(title.current)
    }
  }, [])

  return (
  <header className={styles.header} data-scrolled={scrollHeader}>
    <div className={styles.headerInner}>
      <div className={styles.headerLeft}>
        <Link href="/">
          <a className={styles.headerMobileTitle}>
            cww.
          </a></Link>
        <Link href="/">
          <a className={styles.headerTitle} ref={title}>
            <span>c</span><span className={styles.full}>olette</span> <span className={styles.initial}>w</span><span className={styles.full}>ilson</span> <span className={styles.initial}>w</span><span className={styles.full}>yatt</span><span className={styles.initial}>.</span>
          </a>
        </Link>
        <p className={styles.headerSubtitle}>Brighton-based frontend developer</p>
      </div>
      <Nav
        handleMode={props.handleMode}
        mode={props.mode}
        handleMobileMenu={props.handleMobileMenu}
        mobileMenuOpen={props.mobileMenuOpen}
        handleMenuReset={props.resetMobileNav}
      />
    </div>
  </header>
)}

export default Header
