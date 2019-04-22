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
  }

  restartGame = () => {
    this.setState({
      nWrong: 0,
      guessed: new Set(),
      answer: getRandom(ENGLISH_WORDS),
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

  /** handleGuess: handle a guessed letter:
    - add to guessed letters
    - if not in answer, increase number-wrong guesses
  */
  handleGuess = e => {
    let ltr = e.target.value
    this.setState(st => ({
      guessed: st.guessed.add(ltr),
      nWrong: st.nWrong + (st.answer.includes(ltr) ? 0 : 1),
    }))
  }

  /** render: render game */
  render() {
    const { nWrong, answer, guessed } = this.state
    const { maxWrong, images, letters } = this.props

    const isWinner = !this.guessedWord().includes('_')
    const isPlaying = nWrong < maxWrong && !isWinner

    return (
      <div className="Hangman">
        {/* <p>{answer}</p> */}
        <h1>Hangman</h1>
        <img src={images[nWrong]} alt={`${nWrong}/${maxWrong} wrong`} />
        <h3>Guessed wrong: {nWrong}</h3>
        <p className="Hangman-word">
          {isPlaying ? this.guessedWord() : [...answer]}
        </p>

        {isPlaying && (
          <AlphaButtons
            letters={letters}
            handleGuess={this.handleGuess}
            guessed={guessed}
          />
        )}

        {!isPlaying && (isWinner ? 'YOU WON' : 'YOU LOST')}

        <button
          className="Hangman__reset"
          onClick={this.restartGame}
          style={{ cursor: 'pointer' }}
        >
          RESTART GAME
        </button>
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
