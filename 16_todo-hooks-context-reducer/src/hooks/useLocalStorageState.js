import { useState, useEffect } from 'react'

//* MUST PROVIDE A 'KEY'
function useLocalStorageState(key, initialValue = null) {
  const initialState =
    JSON.parse(localStorage.getItem(key)) || initialValue || []

  const [state, setState] = useState(initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, setState]
}

export default useLocalStorageState
