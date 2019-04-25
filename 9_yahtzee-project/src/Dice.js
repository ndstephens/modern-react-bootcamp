import React, { Component } from 'react'
import Die from './Die'
import './Dice.css'

class Dice extends Component {
  render() {
    const { dice, locked, toggleLocked, disabled, isRolling } = this.props

    return (
      <div className="Dice">
        {dice.map((d, idx) => (
          <Die
            toggleLocked={toggleLocked}
            val={d}
            isLocked={locked[idx]}
            idx={idx}
            disabled={disabled}
            isRolling={isRolling}
            key={idx}
          />
        ))}
      </div>
    )
  }
}

export default Dice
