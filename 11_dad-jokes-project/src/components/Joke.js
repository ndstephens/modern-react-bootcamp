import React from 'react'
import './Joke.css'

const Joke = ({ id, joke }) => {
  return (
    <div className="Joke">
      <div className="Joke__voting">
        <div className="Joke__vote" />
        <div className="Joke__text">{joke}</div>
      </div>
      <div>Emoji</div>
    </div>
  )
}

export default Joke
