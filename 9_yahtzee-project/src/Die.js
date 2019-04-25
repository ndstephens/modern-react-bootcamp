import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  handleClick = () => {
    this.props.toggleLocked(this.props.idx)
  }

  render() {
    const { locked, val, dieVals, disabled } = this.props
    const classes = `Die ${locked ? 'Die-locked' : ''} fas fa-5x fa-dice-${
      dieVals[val - 1]
    }`

    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    )
  }
}

Die.defaultProps = {
  dieVals: ['one', 'two', 'three', 'four', 'five', 'six'],
}

export default Die
