import React, { Component } from 'react'
import './Cell.css'

/** A single cell on the board.
 *
 * This has no state --- just two props:
 *
 * - flipCellsAroundMe: a function rec'd from the board which flips this
 *      cell and the cells around of it
 *
 * - isLit: boolean, is this cell lit?
 *
 * This handles clicks --- by calling flipCellsAroundMe
 *
 **/

class Cell extends Component {
  handleClick = e => {
    this.props.flipCellsAroundMe(this.props.coord)
  }

  render() {
    const classes = 'Cell' + (this.props.isLit ? ' Cell-lit' : '')

    return <div className={classes} onClick={this.handleClick} />
  }
}

export default Cell
