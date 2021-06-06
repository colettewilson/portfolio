import React from "react"
import PropTypes from 'prop-types'
import Link from "next/link"

import { LinkTest } from "../../helpers/link"

import styles from "./button.module.scss"

const Button = ({ type = 'link', to, label, newTab, noFollow, onClick }) => {
  const linkType = LinkTest(to)
  const target = newTab ? {target: "_blank"} : null
  const rel = noFollow ? {rel: "nofollow noopener noreferrer"} : null

  if (type === 'button') return <button type={type} className={styles.button} onClick={onClick}>{label}</button>

  return (
    <>
      {linkType === "internal" ? (
        <Link href={to}><a className={styles.button}>{label}</a></Link>
      ) : (
        <a href={to} className={styles.button} {...target} {...rel}>{label}</a>
      )}
    </>
  )
}

export default Button

Button.propTypes = {
  type: PropTypes.string, 
  to: PropTypes.string, 
  label: PropTypes.string.isRequired, 
  newTab: PropTypes.bool, 
  noFollow: PropTypes.bool,
  onClick: PropTypes.func
}
