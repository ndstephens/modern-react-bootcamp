import React from 'react'
import PropTypes from 'prop-types'
import './Coin.css'

const Coin = ({ face, imgUrl }) => (
  <div className="Coin">
    <img src={imgUrl} alt={face} />
  </div>
)

Coin.propTypes = {
  face: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
}

export default Coin
