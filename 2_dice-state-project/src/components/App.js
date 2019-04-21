import React, { Component } from 'react'
import './App.css'

import RollDice from './RollDice'

class App extends Component {
  render() {
    return (
      <div className="App">
        <RollDice numDice={2} />
      </div>
    )
  }
}

export default App
