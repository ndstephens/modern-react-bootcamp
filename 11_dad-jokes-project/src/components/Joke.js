import React from 'react'
import './Joke.css'

const Joke = ({ id, joke }) => {
  return (
    <li className="Joke">
      <div className="Joke__voting">
        <div>Vote</div>
        <div>{joke}</div>
      </div>
      <div>Emoji</div>
    </li>
  )
}

export default Joke
