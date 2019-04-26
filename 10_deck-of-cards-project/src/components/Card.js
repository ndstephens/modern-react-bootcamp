import React from 'react'
import './Card.css'

const Card = ({ suit, value, image, style }) => {
  return (
    <img
      className="Card"
      style={style}
      src={image}
      alt={`${value} of ${suit}`}
    />
  )
}

export default Card
