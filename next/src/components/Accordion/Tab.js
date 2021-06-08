import React, { useState, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'

import { formatDate } from '../../helpers/date'

import RichText from '../RichText'

import styles from './tab.module.scss'

const Tab = ({ _id, name, position, start, end, responsibilities, skills }) => {
  const [expanded, setExpanded] = useState(false)
  const [height, setHeight] = useState(0)
  const content = useRef()

  useEffect(() => {
    if (expanded) {
      setHeight(content.current?.scrollHeight)
    } else {
      setHeight(0)
    }
  }, [expanded])

  return (
    <div className={styles.tab}>
      <input
        id={`${_id}_input`}
        className={styles.tabInput}
        type="checkbox"
        name={`${name}_${position}`}
      />
      <label 
        id={_id}
        htmlFor={`${_id}_input`}
        className={styles.tabLabel}
        aria-expanded={expanded}
        aria-controls={`${_id}_content`}
        onClick={() => setExpanded(!expanded)}
      >
        <span>{name} - <em>{position}</em></span>
        <span className={styles.tabLabelDate}>{formatDate(start)} - {end ? formatDate(end) : 'present'}</span>
      </label>
      <div
        id={`${_id}_content`}
        className={styles.tabContent}
        role="region"
        aria-labelledby={_id}
        aria-hidden={!expanded}
        ref={content}
        style={{ maxHeight: `${height}px` }}
      >
          <div className={styles.tabContentInner}>
            <div><RichText blocks={responsibilities} /></div>
            <div>
              <p className={styles.tabContentTitle}>Skills &amp; Technologies</p>
              {skills && <ul className={styles.tabContentList}>
                {skills.map(skill => <li key={skill}>{skill}</li>)}
              </ul>}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Tab

Tab.propTypes = {
  _key: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  start: PropTypes.string,
  end: PropTypes.string,
  current: PropTypes.bool
}