import React, { useState } from 'react'
import './CoinGame.css'

import Coin from './Coin'

const flipCoin = coin => {
  return coin[Math.floor(Math.random() * coin.length)]
}

const CoinGame = ({ coinSides }) => {
  const [coin, setCoin] = useState(coinSides[0])
  const [numRolls, setNumRolls] = useState(0)
  const [numHeads, setNumHeads] = useState(0)
  const [numTails, setNumTails] = useState(0)

  const handleClick = () => {
    const result = flipCoin(coinSides)

    setCoin(result)
    setNumRolls(numRolls + 1)
    setNumHeads(numHeads + +(result.face === 'heads'))
    setNumTails(numTails + +(result.face === 'tails'))
  }

  return (
    <div className="CoinGame">
      <h1>Let's flip a coin!</h1>
      <Coin {...coin} />
      <button onClick={handleClick}>FLIP!</button>
      <p>
        Out of {numRolls} <strong>flips</strong>, there have been {numHeads}{' '}
        <strong>heads</strong> and {numTails} <strong>tails</strong>
      </p>
    </div>
  )
}

CoinGame.defaultProps = {
  coinSides: [
    {
      face: 'heads',
      imgUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a0/2006_Quarter_Proof.png',
    },
    {
      face: 'tails',
      imgUrl:
        'http://www.clker.com/cliparts/4/a/2/6/1393621733287511319tails-hi.png',
    },
  ],
}

export default CoinGame
