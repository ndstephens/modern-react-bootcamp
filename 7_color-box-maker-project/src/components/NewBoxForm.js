import React, { useState, useRef } from 'react'
import uuid from 'uuid/v4'

const NewBoxForm = ({ createBox }) => {
  const [box, setBox] = useState({ width: '', height: '', backgroundColor: '' })
  const primaryInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    createBox({ ...box, id: uuid() })
    // reset all inputs and input focus
    setBox({ width: '', height: '', backgroundColor: '' })
    primaryInput.current.focus()
  }

  const handleChange = e => {
    setBox({ ...box, [e.target.name]: e.target.value })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">width</label>
        <input
          autoFocus
          ref={primaryInput}
          value={box.width}
          name="width"
          onChange={handleChange}
          type="text"
          id="width"
        />
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input
          value={box.height}
          name="height"
          onChange={handleChange}
          type="text"
          id="height"
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">color</label>
        <input
          value={box.backgroundColor}
          name="backgroundColor"
          onChange={handleChange}
          type="text"
          id="backgroundColor"
        />
      </div>
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm
