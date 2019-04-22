import React from 'react'
import './Cell.css'

const Cell = ({ coord, flipCellsAroundMe, isLit }) => {
  const handleClick = e => {
    flipCellsAroundMe(coord)
  }

  const classes = 'Cell' + (isLit ? ' Cell-lit' : '')

  return <div className={classes} onClick={handleClick} />
}

export default Cell
