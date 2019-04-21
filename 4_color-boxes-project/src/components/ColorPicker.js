import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './ColorPicker.css'

import ColorBox from './ColorBox'

const ColorPicker = ({ numRows, boxMinWidth }) => {
  const containerRef = useRef()
  const [numBoxes, setNumBoxes] = useState(0)

  const pickerStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(auto-fill, minmax(${boxMinWidth}px, 1fr))`,
  }

  useEffect(() => {
    // Get width of Component
    const width = containerRef.current.clientWidth
    // Determine number of boxes to create
    setNumBoxes(Math.floor(width / boxMinWidth) * numRows)
  }, [])

  return (
    <div className="ColorPicker" style={pickerStyle} ref={containerRef}>
      {Array.from({ length: numBoxes }).map((box, i) => (
        <ColorBox key={i} />
      ))}
    </div>
  )
}

ColorPicker.defaultProps = {
  numRows: 4,
  boxMinWidth: 150,
}

ColorPicker.propTypes = {
  numRows: PropTypes.number.isRequired,
  boxMinWidth: PropTypes.number.isRequired,
}

export default ColorPicker
