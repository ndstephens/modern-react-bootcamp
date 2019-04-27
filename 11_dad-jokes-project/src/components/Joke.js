import React from 'react'
import './Joke.css'

const Joke = ({ id, joke, votes, handleVote }) => {
  const handleClick = e => {
    if (e.target.id === 'up') handleVote(id, 1)
    if (e.target.id === 'down') handleVote(id, -1)
  }

  const getColor = () => {
    if (votes >= 15) return '#4caf50'
    if (votes >= 12) return '#8bc34a'
    if (votes >= 9) return '#cddc39'
    if (votes >= 6) return '#ffeb3b'
    if (votes >= 3) return '#ffc107'
    if (votes >= 0) return '#ff9800'
    return '#f44336'
  }

  const getClassName = () => {
    if (votes >= 15) return 'rolling_on_the_floor_laughing'
    if (votes >= 12) return 'laughing'
    if (votes >= 9) return 'smiley'
    if (votes >= 6) return 'slightly_smiling_face'
    if (votes >= 3) return 'neutral_face'
    if (votes >= 0) return 'confused'
    return 'angry'
  }

  return (
    <div className="Joke">
      <div className="Joke__voting">
        <i className="fas fa-arrow-up" onClick={handleClick} id="up" />
        <span className="Joke__num-votes" style={{ borderColor: getColor() }}>
          {votes}
        </span>
        <i className="fas fa-arrow-down" onClick={handleClick} id="down" />
      </div>
      <div className="Joke__text">{joke}</div>
      <div className="Joke__emoji">
        <i className={`em em-${getClassName()}`} />
      </div>
    </div>
  )
}

export default Joke
