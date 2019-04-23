import React from 'react'

const Box = ({ width, height, backgroundColor, id, deleteBox }) => {
  const boxStyles = {
    width,
    height,
    backgroundColor,
  }

  return (
    <div>
      <div style={boxStyles} />
      <button onClick={() => deleteBox(id)}>DELETE</button>
    </div>
  )
}

export default Box
