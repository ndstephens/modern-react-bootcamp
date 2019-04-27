import React from 'react'
import './Joke.css'

const Joke = ({ id, joke, votes, handleVote }) => {
  const handleClick = e => {
    if (e.target.id === 'up') handleVote(id, 1)
    if (e.target.id === 'down') handleVote(id, -1)
  }

  const classname = 'em em-rolling_on_the_floor_laughing'

  return (
    <div className="Joke">
      <div className="Joke__voting">
        <i className="fas fa-arrow-up" onClick={handleClick} id="up" />
        <span className="Joke__num-votes">{votes}</span>
        <i className="fas fa-arrow-down" onClick={handleClick} id="down" />
      </div>
      <div className="Joke__text">{joke}</div>
      <div className="Joke__emoji">
        <i className={classname} />
      </div>
    </div>
  )
}

export default Joke
