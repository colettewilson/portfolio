import React, { useState } from "react"
import View from "../components/view"
import SVG from "../../assets/svg/wavy-lines.svg"

import styles from "./portfolio.module.scss"

const Portfolio = (props) => {
  const [setLayout, setLayoutState] = useState("grid")
  const LayoutSelect = () => {
    setLayoutState(setLayout === "grid" ? "list" : "grid")
  }
  return (
    <div className={props.alt ? styles.portfolioAlt : styles.portfolio}>
      <div className={styles.portfolioLayout}>
        <input type="radio" id="grid" name="layout" value="grid" onChange={LayoutSelect} defaultChecked />
        <label htmlFor="grid" aria-label="Grid Layout">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 51 51" enableBackground="new 0 0 51 51">
          <rect fill="currentColor" x="0" width="22" height="22"/>
          <rect fill="currentColor" x="29" width="22" height="22"/>
          <rect fill="currentColor" y="29" width="22" height="22"/>
          <rect fill="currentColor" x="29" y="29" width="22" height="22"/>
        </svg>
        </label>
        <input type="radio" id="list" name="layout" value="list" onChange={LayoutSelect} />
        <label htmlFor="list" aria-label="List Layout">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
           viewBox="0 0 51 51" enableBackground="new 0 0 51 51">
            <rect fill="currentColor" x="0" width="51" height="13"/>
            <rect fill="currentColor" x="0" y="19" width="51" height="13"/>
            <rect fill="currentColor" x="0" y="38" width="51" height="13"/>
        </svg>
        </label>
      </div>
      <View layout={setLayout} projects={props.projects} />
      <SVG />
      <span></span>
    </div>
  )
}

export default Portfolio
