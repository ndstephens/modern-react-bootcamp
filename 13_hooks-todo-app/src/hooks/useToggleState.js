import { useState } from 'react'

function useToggleState(initialVal = false) {
  const [value, setValue] = useState(initialVal)

  const toggleState = () => {
    setValue(!value)
  }

  return [value, toggleState]
}

export default useToggleState
