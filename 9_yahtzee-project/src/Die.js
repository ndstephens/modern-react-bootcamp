import React, { Component } from 'react'
import './Die.css'

class Die extends Component {
  handleClick = () => {
    this.props.toggleLocked(this.props.idx)
  }

  render() {
    const { locked, val } = this.props

    return (
      <button
        className={'Die'}
        style={{ backgroundColor: locked ? 'grey' : 'black' }}
        onClick={this.handleClick}
      >
        {val}
      </button>
    )
  }
}

export default Die
