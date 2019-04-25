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
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
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

  roll = evt => {
    // roll dice that are NOT locked (match 'locked' array index)
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
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
    this.roll()
  }

  render() {
    return (
      <div className="Game">
        <header className="Game-header">
          <h1 className="App-title">Yahtzee!</h1>

          <section className="Game-dice-section">
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              toggleLocked={this.toggleLocked}
              disabled={this.state.rollsLeft === 0}
            />

            <div className="Game-button-wrapper">
              <button
                className="Game-reroll"
                disabled={
                  this.state.locked.every(x => x) || this.state.rollsLeft === 0
                }
                onClick={this.roll}
              >
                {this.state.rollsLeft} Rolls Left
              </button>
            </div>
          </section>
        </header>

        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    )
  }
}

export default Game
