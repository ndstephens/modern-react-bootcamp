import { useState } from 'react'

export default function useToggleState(initialVal = false) {
  const [state, setState] = useState(initialVal)

  const toggleState = () => setState(!state)

  return [state, toggleState]
}
