import React from "react"
import { Link } from "gatsby"
import Nav from "./nav"

import styles from "./header.module.scss"

const Header = (props) => (
  <header className={styles.header}>
    <div className={styles.headerInner}>
      <Link to="/"><span className={styles.headerTitle}>Colette Wilson Wyatt</span></Link>
      <Nav
        handleMode={props.handleMode}
        mode={props.mode}
        handleMobileMenu={props.handleMobileMenu}
        mobileMenuOpen={props.mobileMenuOpen}
        handleMenuReset={props.resetMobileNav}
      />
    </div>
  </header>
)

export default Header
