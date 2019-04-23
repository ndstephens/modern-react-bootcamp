import React, { useState } from 'react'
import uuid from 'uuid/v4'

import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = props => {
  const [boxes, setBoxes] = useState([])

  const handleFormSubmit = box => {
    setBoxes([...boxes, { ...box, id: uuid() }])
  }

  const deleteBox = id => {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  return (
    <div>
      <NewBoxForm onSubmit={handleFormSubmit} />
      <div>
        {boxes.map(box => (
          <Box {...box} deleteBox={deleteBox} key={box.id} />
        ))}
      </div>
    </div>
  )
}

export default BoxList
