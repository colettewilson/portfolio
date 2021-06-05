import React from "react"

import styles from "./footer.module.scss"

const Footer = () => {
  let copyrightYear = new Date()
  copyrightYear = copyrightYear.getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        <p>&copy; {copyrightYear}</p>
      </div>
    </footer>
  )
}

export default Footer
