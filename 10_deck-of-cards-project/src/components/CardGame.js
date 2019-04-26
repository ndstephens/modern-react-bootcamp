import React, { Component } from 'react'
import axios from 'axios'

import './CardGame.css'
import Card from './Card'

class CardGame extends Component {
  state = {
    deckId: '',
    cardsRemaining: '52',
    cards: [],
  }

  async componentDidMount() {
    const deck = await axios.get(
      'https://deckofcardsapi.com/api/deck/new/shuffle/'
    )
    this.setState({ deckId: deck.data.deck_id })
  }

  getCard = async () => {
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${this.state.deckId}/draw/`
    )

    const rotate = Math.floor(Math.random() * 81 - 40)
    const transX = Math.floor(Math.random() * 41 - 20)
    const transY = Math.floor(Math.random() * 41 - 20)
    const transformStyle = {
      transform: `translateX(calc(-50% + ${transX}px)) translateY(${transY}px) rotate(${rotate}deg)`,
    }

    const newCard = { ...response.data.cards[0], style: transformStyle }

    this.setState(prevSt => ({
      cardsRemaining: response.data.remaining,
      cards: [...prevSt.cards, newCard],
    }))
  }

  render() {
    const { cards, cardsRemaining } = this.state

    return (
      <div className="CardGame">
        <button onClick={this.getCard} disabled={cardsRemaining === 0}>
          Gimme a Card
        </button>

        <p>Cards Remaining: {cardsRemaining}</p>

        <div className="CardGame__cards">
          {cards.map(card => (
            <Card {...card} key={card.code} />
          ))}
        </div>
      </div>
    )
  }
}

export default CardGame
