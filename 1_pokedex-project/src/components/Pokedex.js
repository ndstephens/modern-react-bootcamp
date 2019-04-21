import React from 'react'

import './Pokedex.css'
import Pokecard from './Pokecard'

const Pokedex = ({ deck }) => {
  const [cards, total, isWinner] = deck

  return (
    <div className="Pokedex">
      <p className="Pokedex__total">Total: {total}</p>
      <div className="Pokedex__cards">
        {cards.map(pokemon => (
          <Pokecard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
      {isWinner && <p className="Pokedex__winner">YOU WON!!</p>}
    </div>
  )
}

export default Pokedex
