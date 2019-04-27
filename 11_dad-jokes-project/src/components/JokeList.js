import React, { Component } from 'react'
import axios from 'axios'
import './JokeList.css'

import Joke from './Joke'

class JokeList extends Component {
  state = {
    jokeList: JSON.parse(localStorage.getItem('jokes')) || [],
    isLoading: false,
  }

  componentDidMount() {
    if (this.state.jokeList.length === 0) {
      this.getJokes(10)
    }
  }

  jokeIsDuplicate = (jokeList, jokeId) => {
    return jokeList.some(joke => joke.id === jokeId)
  }

  getJokes = async (numJokes = 10) => {
    this.setState({ isLoading: true })

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
        !this.jokeIsDuplicate(this.state.jokeList, id) &&
        !this.jokeIsDuplicate(jokes, id)
      ) {
        jokes.push({ id, joke, votes: 0 })
      }
    }

    this.setState(
      prevSt => ({
        jokeList: [...prevSt.jokeList, ...jokes],
        isLoading: false,
      }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokeList))
    )
  }

  handleVote = (jokeId, vote) => {
    this.setState(
      prevSt => ({
        jokeList: prevSt.jokeList.map(joke =>
          joke.id === jokeId ? { ...joke, votes: joke.votes + vote } : joke
        ),
      }),
      () => localStorage.setItem('jokes', JSON.stringify(this.state.jokeList))
    )
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="JokeList__spinner">
          <i className="far fa-8x fa-laugh fa-spin" />
          <h1 className="JokeList__title">Loading...</h1>
        </div>
      )
    }

    const { jokeList } = this.state
    const jokes = jokeList
      .sort((a, b) => b.votes - a.votes)
      .map(joke => (
        <Joke {...joke} key={joke.id} handleVote={this.handleVote} />
      ))

    return (
      <div className="JokeList">
        <div className="JokeList__sidebar">
          <h1 className="JokeList__title">
            <span>Dad</span> Jokes
          </h1>
          <img
            src="https://assets.dryicons.com/uploads/icon/svg/8927/0eb14c71-38f2-433a-bfc8-23d9c99b3647.svg"
            alt="Laughing Emoji"
          />
          <button
            onClick={() => this.getJokes()}
            className="JokeList__getMore-btn"
          >
            New Jokes
          </button>
        </div>

        <div className="JokeList__jokes">{jokes}</div>
      </div>
    )
  }
}

export default JokeList
