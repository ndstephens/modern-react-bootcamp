import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import './ColorPicker.css'

import ColorBox from './ColorBox'

const ColorPicker = ({ numRows, boxMinWidth, colors }) => {
  const containerRef = useRef()
  const [numBoxes, setNumBoxes] = useState(0)

  useEffect(() => {
    // Get width of Component
    const width = containerRef.current.clientWidth
    // Determine number of boxes to create
    setNumBoxes(Math.floor(width / boxMinWidth) * numRows)
  }, [])

  const randomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const pickerStyle = {
    gridTemplateColumns: `repeat(auto-fill, minmax(${boxMinWidth}px, 1fr))`,
  }

  return (
    <div className="ColorPicker" style={pickerStyle} ref={containerRef}>
      {Array.from({ length: numBoxes }).map((box, i) => (
        <ColorBox minWidth={boxMinWidth} randomColor={randomColor} key={i} />
      ))}
    </div>
  )
}

ColorPicker.defaultProps = {
  numRows: 4,
  boxMinWidth: 150,
  colors: [
    'cornsilk',
    'bisque',
    'burlywood',
    'rosybrown',
    'sandybrown',
    'goldenrod',
    'darkgoldenrod',
    'chocolate',
    'saddlebrown',
    'brown',
    'maroon',
    'firebrick',
  ],
}

ColorPicker.propTypes = {
  numRows: PropTypes.number.isRequired,
  boxMinWidth: PropTypes.number.isRequired,
  colors: PropTypes.array.isRequired,
}

export default ColorPicker
