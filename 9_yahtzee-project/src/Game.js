import React, { Component } from 'react'
import Dice from './Dice'
import ScoreTable from './ScoreTable'
import './Game.css'

const NUM_DICE = 5
const NUM_ROLLS = 3

class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dice: Array.from({ length: NUM_DICE }).map(d =>
        Math.ceil(Math.random() * 6)
      ),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      isRolling: false,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    }
  }

  componentDidMount() {
    this.animateRoll()
  }

  animateRoll = () => {
    this.setState({ isRolling: true })
    setTimeout(this.roll, 1000)
  }

  roll = evt => {
    // roll dice that are NOT locked (match 'locked' array index)
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      isRolling: false,
    }))
  }

  toggleLocked = idx => {
    // toggle whether idx is in locked or not
    if (this.state.rollsLeft > 0) {
      this.setState(st => ({
        locked: st.locked.map((val, i) => (idx === i ? !val : val)),
      }))
    }
  }

  doScore = (rulename, ruleFn) => {
    // evaluate this ruleFn with the dice and score this rulename
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false),
    }))
    this.animateRoll()
  }

  rollButtonText = () => {
    const messages = [
      '0 Rolls Left',
      '1 Roll Left',
      '2 Rolls Left',
      'Good Luck',
    ]
    return messages[this.state.rollsLeft]
  }

  render() {
    const { dice, locked, rollsLeft, isRolling, scores } = this.state

    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={dice}
              locked={locked}
              toggleLocked={this.toggleLocked}
              disabled={rollsLeft === 0}
              isRolling={isRolling}
            />

            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={locked.every(x => x) || rollsLeft === 0 || isRolling}
                onClick={this.animateRoll}
              >
                {this.rollButtonText()}
              </button>
            </div>
          </section>
        </header>

        <ScoreTable doScore={this.doScore} scores={scores} />
      </div>
    )
  }
}

export default Game
