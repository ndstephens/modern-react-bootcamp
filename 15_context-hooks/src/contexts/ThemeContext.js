import React, { createContext } from 'react'
import useToggleState from '../hooks/useToggleState'

export const ThemeContext = createContext()

export default function ThemeProvider(props) {
  const [isDarkTheme, toggleTheme] = useToggleState(false)

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  )
}
