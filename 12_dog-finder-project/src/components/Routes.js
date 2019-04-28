import React, { Component } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import DogList from './DogList'
import DogDetails from './DogDetails'

class Routes extends Component {
  render() {
    const getDog = props => {
      const name = props.match.params.name
      const currentDog = this.props.dogs.find(
        dog => dog.name.toLowerCase() === name.toLowerCase()
      )
      return <DogDetails {...props} dog={currentDog} />
    }

    return (
      <Switch>
        <Route
          exact
          path="/dogs"
          render={() => <DogList dogs={this.props.dogs} />}
        />
        <Route exact path="/dogs/:name" render={getDog} />
        <Redirect to="/dogs" />
      </Switch>
    )
  }
}

export default Routes
