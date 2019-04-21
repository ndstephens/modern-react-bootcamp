import React from 'react'

import './Pokecard.css'

const padId = id => {
  return id.toString().padStart(3, '0')
}

const Pokecard = ({ pokemon }) => (
  <div className="Pokecard">
    <p className="Pokecard__name">{pokemon.name}</p>
    <img
      src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padId(
        pokemon.id
      )}.png`}
      alt={pokemon.name}
    />
    <div className="Pokecard__info">
      <p>Type: {pokemon.type}</p>
      <p>EXP: {pokemon.base_experience}</p>
    </div>
  </div>
)

export default Pokecard
