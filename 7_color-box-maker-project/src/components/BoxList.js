import React, { useState } from 'react'

import NewBoxForm from './NewBoxForm'
import Box from './Box'

const BoxList = props => {
  const [boxes, setBoxes] = useState([])

  const createBox = box => {
    setBoxes([box, ...boxes])
  }

  const deleteBox = id => {
    setBoxes(boxes.filter(box => box.id !== id))
  }

  const boxUI = boxes.map(box => (
    <Box {...box} deleteBox={deleteBox} key={box.id} />
  ))

  return (
    <div>
      <h1>Make a box!!</h1>
      <NewBoxForm createBox={createBox} />
      {boxUI}
    </div>
  )
}

export default BoxList
