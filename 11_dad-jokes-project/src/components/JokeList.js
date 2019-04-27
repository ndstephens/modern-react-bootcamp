import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'

import Joke from './Joke'

class JokeList extends Component {
  state = {
    jokeList: [],
  }

  componentDidMount() {
    this.getJokes(10)
  }

  jokeIsDuplicate = (jokeList, jokeId) => {
    return jokeList.some(joke => joke.id === jokeId)
  }

  getJokes = async (numJokes = 10) => {
    function getJoke() {
      return axios.get('https://icanhazdadjoke.com/', {
        headers: { Accept: 'application/json' },
      })
    }

    const jokes = []
    while (jokes.length < numJokes) {
      const {
        data: { id, joke },
      } = await getJoke()
      if (
        !this.jokeIsDuplicate(this.state.jokeList, id) ||
        !this.jokeIsDuplicate(jokes, id)
      ) {
        jokes.push({ id, joke })
      }
    }

    this.setState(prevSt => ({ jokeList: [...prevSt.jokeList, ...jokes] }))
  }

  render() {
    const { jokeList } = this.state
    const jokes = jokeList.map(joke => <Joke {...joke} key={joke.id} />)

    return (
      <div className="JokeList">
        <div className="JokeList__sidebar">
          <h1>Dad Jokes</h1>
          <div>Emoji Button</div>
          <div>New Jokes</div>
        </div>
        <ul className="JokeList__jokes">{jokes}</ul>
      </div>
    )
  }
}

export default JokeList
