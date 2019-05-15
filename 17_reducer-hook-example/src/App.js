import React, { useReducer } from 'react'
import './App.css'

function countReducer(state, action) {
  switch (action.type) {
    case 'INC':
      return { count: state.count + action.amount }
    case 'DEC':
      return { count: state.count - action.amount }
    case 'RESET':
      return { count: 0 }
    default:
      return state
  }
}

function App() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 })

  return (
    <div className="App">
      <h1>{state.count}</h1>
      <button onClick={() => dispatch({ type: 'INC', amount: 1 })}>
        Add 1
      </button>
      <button onClick={() => dispatch({ type: 'INC', amount: 5 })}>
        Add 5
      </button>
      <button onClick={() => dispatch({ type: 'DEC', amount: 1 })}>
        Subtract 1
      </button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
    </div>
  )
}

export default App
