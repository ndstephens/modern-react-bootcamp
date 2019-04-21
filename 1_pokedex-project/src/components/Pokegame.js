import React from 'react'

import Pokedex from './Pokedex'

const shuffleDeck = deck => {
  let newDeck = []
  while (deck.length > 0) {
    newDeck.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
  }
  return newDeck
}

const totalPoints = deck =>
  deck.reduce((total, cur) => total + cur.base_experience, 0)

const createDecks = deck => {
  const newDeck = shuffleDeck(deck)

  const deck1Cards = newDeck.slice(0, newDeck.length / 2)
  const deck2Cards = newDeck.slice(newDeck.length / 2)

  const deck1Total = totalPoints(deck1Cards)
  const deck2Total = totalPoints(deck2Cards)

  const deck1Winner = deck1Total > deck2Total
  const deck2Winner = !deck1Winner

  return [
    [deck1Cards, deck1Total, deck1Winner],
    [deck2Cards, deck2Total, deck2Winner],
  ]
}

const Pokegame = ({ data }) => {
  const [deck1, deck2] = createDecks(data)

  return (
    <div className="Pokegame">
      <Pokedex deck={deck1} />
      <hr />
      <Pokedex deck={deck2} />
    </div>
  )
}

export default Pokegame
