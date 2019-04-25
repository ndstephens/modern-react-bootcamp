import React, { Component } from 'react'
import Die from './Die'
import './Dice.css'

class Dice extends Component {
  render() {
    const { dice, locked, toggleLocked, disabled } = this.props

    return (
      <div className="Dice">
        {dice.map((d, idx) => (
          <Die
            toggleLocked={toggleLocked}
            val={d}
            locked={locked[idx]}
            idx={idx}
            disabled={disabled}
            key={idx}
          />
        ))}
      </div>
    )
  }
}

export default Dice
