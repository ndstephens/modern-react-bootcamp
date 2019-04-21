import React from 'react'
import PropTypes from 'prop-types'
import './ColorBox.css'

const ColorBox = ({ minWidth, randomColor }) => {
  const boxStyle = {
    minWidth: minWidth,
    backgroundColor: randomColor(),
  }

  const handleClick = e => {
    e.target.style.backgroundColor = randomColor()
  }

  return <div onClick={handleClick} className="ColorBox" style={boxStyle} />
}

ColorBox.propTypes = {
  minWidth: PropTypes.number.isRequired,
  randomColor: PropTypes.func.isRequired,
}

export default ColorBox
