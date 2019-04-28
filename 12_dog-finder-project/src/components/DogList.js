import React, { Component } from 'react'
import './DogList.css'

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center">Dog List!</h1>
        <div className="container">
          <div className="row">
            {this.props.dogs.map(dog => (
              <div className="DogList__dog col-md-4 text-center" key={dog.name}>
                <img src={dog.src} alt={dog.name} />
                <h3>{dog.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default DogList
