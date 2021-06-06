import React from 'react'
import PropTypes from 'prop-types'

import Twitter from '../../svg/icon-twitter.svg'
import LinkedIn from '../../svg/icon-linkedin.svg'
import Polywork from '../../svg/icon-polywork.svg'

import styles from './social.module.scss'

const Icon = ({ platform }) => {
  const platforms = {
    Twitter: <Twitter />,
    LinkedIn: <LinkedIn />,
    Polywork: <Polywork />,
  }

  return platform ? platforms[platform] : null
}

const Social = ({ social }) => {
  return (
  <ul className={styles.social}>
    {social &&
      social.map(p => (
        <li key={p._key}>
          <a href={p.url} target="_blank" rel="noopener nofollow noreferrer">
            <span>{p.platform}</span>
            <Icon platform={p.platform} />
          </a>
        </li>
      ))}
  </ul>
)}

export default Social

Social.propTypes = {
  platform: PropTypes.array,
}