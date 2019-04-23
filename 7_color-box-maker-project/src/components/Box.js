import React from 'react'

const Box = ({ width, height, backgroundColor, id, deleteBox }) => {
  const boxStyles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor,
  }

  const handleClick = () => deleteBox(id)

  return (
    <div>
      <div style={boxStyles} />
      <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Box
