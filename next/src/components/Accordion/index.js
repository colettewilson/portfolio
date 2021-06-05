import React from 'react'
import PropTypes from 'prop-types'

import Tab from './Tab'

const Accordion = ({ experience }) => {
  return (
    <div>
      {experience.map(role => 
        <Tab key={role._id} {...role} />
      )}
    </div>
  )
}

export default Accordion

Accordion.propTypes = {
  experience: PropTypes.array
}