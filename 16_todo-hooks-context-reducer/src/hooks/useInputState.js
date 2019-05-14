import { useState } from 'react'

const useInputState = (initialVal = '') => {
  const [value, setValue] = useState(initialVal)

  const handleChange = e => {
    setValue(e.target.value)
  }

  const handleReset = () => {
    setValue('')
  }

  return [value, handleChange, handleReset]
}

export default useInputState
