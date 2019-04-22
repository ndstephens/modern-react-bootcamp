import React from 'react'
import './AlphaButtons.css'

const AlphaButtons = ({ letters, handleGuess, guessed }) => {
  return (
    <div className="AlphaButtons">
      {letters.split('').map(ltr => (
        <button
          value={ltr}
          key={ltr}
          onClick={handleGuess}
          disabled={guessed.has(ltr)}
        >
          {ltr}
        </button>
      ))}
    </div>
  )
}

export default AlphaButtons
