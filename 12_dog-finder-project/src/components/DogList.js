import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './DogList.css'

class DogList extends Component {
  render() {
    return (
      <div className="DogList">
        <h1 className="display-1 text-center mt-3 mb-5">Dog List!</h1>
        <div className="row">
          {this.props.dogs.map(dog => (
            <div className="DogList__dog col-md-4 text-center" key={dog.name}>
              <img src={dog.src} alt={dog.name} />
              <h3>
                <Link className="underline" to={`/dogs/${dog.name}`}>
                  {dog.name}
                </Link>
              </h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

export default DogList
