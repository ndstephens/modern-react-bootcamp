import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import './App.css'
import hazel from '../images/hazel.jpg'
import tubby from '../images/tubby.jpg'
import whiskey from '../images/whiskey.jpg'

import Navbar from './Navbar'
import DogList from './DogList'
import DogDetails from './DogDetails'

class App extends Component {
  render() {
    const getDog = props => {
      const name = props.match.params.name
      const currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog} />
    }

    return (
      <div>
        <Navbar dogs={this.props.dogs} />
        <Switch>
          <Route
            exact
            path="/dogs"
            render={() => <DogList dogs={this.props.dogs} />}
          />
          <Route exact path="/dogs/:name" render={getDog} />
        </Switch>
      </div>
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
