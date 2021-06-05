import React from "react"

import styles from "./formattedList.module.scss"

const FormattedList = ({children}) => (
  <ul className={styles.formattedList}>{children}</ul>
)

export default FormattedList
