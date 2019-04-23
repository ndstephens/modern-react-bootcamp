import React, { useState, useRef } from 'react'

const NewBoxForm = ({ onSubmit }) => {
  const [width, setWidth] = useState('')
  const [height, setHeight] = useState('')
  const [backgroundColor, setBackgroundColor] = useState('')

  const widthInput = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    onSubmit({ width, height, backgroundColor })
    setWidth('')
    setHeight('')
    setBackgroundColor('')
    widthInput.current.focus()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="width">width</label>
        <input
          autoFocus
          ref={widthInput}
          value={width}
          onChange={e => setWidth(e.target.value)}
          type="text"
          id="width"
        />
      </div>
      <div>
        <label htmlFor="height">height</label>
        <input
          value={height}
          onChange={e => setHeight(e.target.value)}
          type="text"
          id="height"
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">backgroundColor</label>
        <input
          value={backgroundColor}
          onChange={e => setBackgroundColor(e.target.value)}
          type="text"
          id="backgroundColor"
        />
      </div>
      <button>Add Box</button>
    </form>
  )
}

export default NewBoxForm
