import React from "react"
import { Link } from "gatsby"
import { LinkTest } from "../helpers/link"

import styles from "./button.module.scss"

const Button = (props) => {
  const type = LinkTest(props.to)
  const newTab = props.newTab ? {["target"]: "_blank"} : null
  const noFollow = props.noFollow ? {["rel"]: "nofollow noopener noreferrer"} : null

  return (
    <>
      {type === "internal" ? (
        <Link className={styles.button} to={props.to}>{props.label}</Link>
      ) : (
        <a href={props.to} className={styles.button} {...newTab} {...noFollow}>{props.label}</a>
      )}
    </>
  )
}

export default Button
