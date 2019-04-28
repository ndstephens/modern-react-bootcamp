import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import hazel from '../images/hazel.jpg'
import tubby from '../images/tubby.jpg'
import whiskey from '../images/whiskey.jpg'

import DogList from './DogList'

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/dogs" render={() => <DogList dogs={this.props.dogs} />} />
      </Switch>
    )
  }
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
