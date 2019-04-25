import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  handleClick = () => {
    if (!this.props.isRolling) {
      this.props.toggleLocked(this.props.idx)
    }
  }

  render() {
    const { isLocked, val, dieVals, disabled, isRolling } = this.props

    let classes = `Die fas fa-5x fa-dice-${dieVals[val - 1]} `
    if (isLocked) classes += ' Die-locked'
    if (isRolling && !isLocked) classes += ' Die-rolling'

    return (
      <i className={classes} onClick={this.handleClick} disabled={disabled} />
    )
  }
}

Die.defaultProps = {
  dieVals: ['one', 'two', 'three', 'four', 'five', 'six'],
}

export default Die
