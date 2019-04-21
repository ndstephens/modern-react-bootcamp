import React from 'react'
import PropTypes from 'prop-types'
import './Die.css'

const Die = ({ num, isRolling }) => (
  <div className="Die">
    <i className={`fas fa-dice-${num} ${isRolling ? 'wobble' : ''} animated`} />
  </div>
)

Die.propTypes = {
  num: PropTypes.string.isRequired,
  isRolling: PropTypes.bool.isRequired,
}

export default Die
