import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
    </div>
  )
}

App.defaultProps = {
  dogs: [
    {
      name: 'Whiskey',
      age: 5,
      src: whiskey,
      facts: [
        'Whiskey loves eating popcorn.',
        'Whiskey is a terrible guard dog.',
        'Whiskey wants to cuddle with you!',
      ],
    },
    {
      name: 'Hazel',
      age: 3,
      src: hazel,
      facts: [
        'Hazel has soooo much energy!',
        'Hazel is highly intelligent.',
        'Hazel loves people more than dogs.',
      ],
    },
    {
      name: 'Tubby',
      age: 4,
      src: tubby,
      facts: [
        'Tubby is not the brightest dog',
        'Tubby does not like walks or exercise.',
        'Tubby loves eating food.',
      ],
    },
  ],
}

export default App
