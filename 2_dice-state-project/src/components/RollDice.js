import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './RollDice.css'

import Die from './Die'

const generateDice = (totalDie, dieFaces) => {
  const dice = []
  for (let i = 1; i <= totalDie; i++) {
    dice.push(dieFaces[Math.floor(Math.random() * dieFaces.length)])
  }
  return dice
}

const RollDice = ({ numDice, dieNums }) => {
  const [isRolling, setIsRolling] = useState(false)
  const [dieNumbers, setDieNumbers] = useState(generateDice(numDice, dieNums))

  const roll = () => {
    const dice = generateDice(numDice, dieNums)

    setIsRolling(true)

    setTimeout(() => {
      setDieNumbers(dice)
    }, 400)

    setTimeout(() => {
      setIsRolling(false)
    }, 1000)
  }

  return (
    <div className="RollDice">
      <div className="RollDice__dice">
        {dieNumbers.map((num, i) => (
          <Die num={num} key={i} isRolling={isRolling} />
        ))}
      </div>
      <button onClick={roll} disabled={isRolling}>
        {isRolling ? 'Rolling...' : 'Roll Dice!'}
      </button>
    </div>
  )
}

RollDice.defaultProps = {
  numDice: 2,
  dieNums: ['one', 'two', 'three', 'four', 'five', 'six'],
}

RollDice.propTypes = {
  numDice: PropTypes.number.isRequired,
  dieNums: PropTypes.array.isRequired,
}

export default RollDice
