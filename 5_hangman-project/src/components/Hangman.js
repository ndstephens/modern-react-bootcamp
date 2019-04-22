import React, { Component } from 'react'
import './Hangman.css'

import AlphaButtons from './AlphaButtons'

import { getRandom } from '../utils/getRandom'
import { ENGLISH_WORDS } from '../assets/words'

import img0 from '../assets/0.jpg'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img4 from '../assets/4.jpg'
import img5 from '../assets/5.jpg'
import img6 from '../assets/6.jpg'

class Hangman extends Component {
  state = {
    nWrong: 0,
    guessed: new Set(),
    answer: getRandom(ENGLISH_WORDS),
    isPlaying: true,
    winner: false,
  }

  restartGame = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: getRandom(ENGLISH_WORDS),
      isPlaying: true,
      winner: false,
    })
  }

  /** guessedWord: show current-state of word:
    if guessed letters are {a,p,e}, show "app_e" for "apple"
  */
  guessedWord = () => {
    return this.state.answer
      .split('')
      .map(ltr => (this.state.guessed.has(ltr) ? ltr : '_'))
  }

  /** handleGuest: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = evt => {
    let ltr = evt.target.value
    this.setState(
      st => ({
        guessed: st.guessed.add(ltr),
        nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
      }),
      () => {
        if (this.state.nWrong >= this.props.maxWrong) {
          return this.setState({ isPlaying: false })
        }
        if (!this.guessedWord().includes('_')) {
          return this.setState({ isPlaying: false, winner: true })
        }
      }
    )
  }

  /** render: render game */
  render() {
    const { nWrong, isPlaying, answer, guessed, winner } = this.state
    const { maxWrong, images, letters } = this.props

    return (
      <div className="Hangman">
        <h1>Hangman</h1>
        <img src={images[nWrong]} alt={`${nWrong}/${maxWrong} wrong`} />
        <h3>{isPlaying ? `Number wrong: ${nWrong}` : 'Game Over'}</h3>
        <h3>{!isPlaying && winner && 'YOU WON'}</h3>
        <p>{answer}</p>
        <p className="Hangman-word">{this.guessedWord()}</p>

        {isPlaying ? (
          <AlphaButtons
            letters={letters}
            handleGuess={this.handleGuess}
            guessed={guessed}
          />
        ) : null}

        <div onClick={this.restartGame} style={{ cursor: 'pointer' }}>
          RESTART GAME
        </div>
      </div>
    )
  }
}

Hangman.defaultProps = {
  maxWrong: 6,
  images: [img0, img1, img2, img3, img4, img5, img6],
  letters: 'abcdefghijklmnopqrstuvwxyz',
}

export default Hangman
