import { useReducer, useEffect } from 'react'

//* MUST PROVIDE A 'KEY' AND A 'REDUCER'
function useLocalStorageReducer(key, reducer, defaultState = null) {
  //? First check local storage
  const initialState =
    JSON.parse(localStorage.getItem(key)) || defaultState || []

  const [state, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state))
  }, [state])

  return [state, dispatch]
}

export default useLocalStorageReducer
